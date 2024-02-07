import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ThemeContext } from "../../providers/ThemeProvider";

const CheackoutForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const themeInfo = useContext(ThemeContext);
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const user = themeInfo !== null ? themeInfo.user : null;

  const totalPrice = 79;

  useEffect(() => {
    totalPrice > 0 &&
      axiosPublic
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
  }, [axiosPublic, totalPrice]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment Error", error);
      //   setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      //   console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transaction Id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the databse

        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js
          status: "pending",
        };

        const res = await axiosPublic.post("/payments", payment);
        console.log("payment saved", res.data);
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/dashboard/paymentHistory");
      }
    }
  };
  return (
    <div className=" bg-gray-200 rounded-md p-10 shadow ">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        ></CardElement>

        <div className="w-full pt-8">
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="btn w-2/3 bg-accent hover:bg-accentTwo text-white mt-10"
          >
            Pay Now
          </button>
        </div>
        <p className="text-red-600 mt-5">{error}</p>
        {transactionId && (
          <p className="text-green-600 mt-5">Transaction Id: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheackoutForm;
