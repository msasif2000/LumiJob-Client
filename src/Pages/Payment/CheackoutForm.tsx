import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import bgimg from "../../assets/svg/bg-glow.svg";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import Payment from './Payment';

interface Payment {
  name: string;
  package: string;
  email: string;
  price: number;
  Features: string[];
  transactionId: string;
  date: Date;
  userStatus: string;
  userRole: string;
  canPost?: number; // Optional property for 'company' role
  canApply?: number; // Optional property for other roles
}

const CheackoutForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, role } = useAuth();
  const [subs, setSubs] = useState<any | null>(null);

  const price = subs?.selectedPlan?.price;

  useEffect(() => {
    price > 0 &&
      axiosPublic
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
  }, [axiosPublic, price]);

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/get-subs-details/${user.email}`)
        .then((res) => {
          setSubs(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  console.log(subs);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const card = elements.getElement(CardElement);

    if (card == null) {
      setLoading(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment Error", error);
      //   setError(error.message);
      setLoading(false);
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

        const payment: Payment = {
          name: user?.displayName,
          packages: subs?.selectedPlan?.name,
          email: user?.email,
          price: subs?.selectedPlan?.price,
          Features: subs?.selectedPlan?.features,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js
          userStatus: "premium",
          userRole: role,
        };

        // Depending on the user's role, set the appropriate permission
        if (role === "company") {
          payment.canPost = subs?.selectedPlan?.canPost;
        } else {
          payment.canApply = subs?.selectedPlan?.canApply;
        }

        console.log(payment)

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
        navigate("/");
      }
    }
    setLoading(false);
  };

  const handleCancel = (id: string) => {
    axiosPublic.delete(`/delete-subs-plan/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        if (role === "company") {
          navigate(`/subscriptionsUiCompany`);
        } else {
          navigate("/subscriptionsUiCandidate");
        }
      } else {
        toast.warn("Something went wrong");
      }
    });
  };
  return (
    <div className=" bg-white rounded-sm border flex flex-col md:flex-row p-4">
      <div className="w-full md:w-1/2 rounded-md">
        <div
          className="w-full min-h-64 bg-[#18181B] bg-no-repeat bg-center rounded-t-sm flex justify-center items-center p-10"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          <h2 className="text-white text-3xl font-heading font-medium text-center">
            {/* TODO: Add heading by user role */}
            Subscribe and start your Hiring process now
          </h2>
        </div>
        {subs && (
          <div className="bg-[#F1F3F7] p-10 rounded-b-sm relative">
            {/* TODO: Add data dynamically */}

            <div className="w-[80%] mx-auto bg-white p-3 rounded-md absolute -top-10">
              <div className="flex items-center ">
                <figure className="w-24 mr-4">
                  <img
                    src="https://i.pinimg.com/564x/9e/4d/7f/9e4d7f6d814054bf75611ebf8ed0d1ee.jpg"
                    alt="pay"
                    className="w-full rounded-md"
                  />
                </figure>
                <div>
                  <h3 className="text-gray-500 text-xl">
                    {subs?.selectedPlan?.name}
                  </h3>
                  <h3 className="font-bold">
                    Price: ${subs?.selectedPlan?.price}
                  </h3>
                </div>
              </div>
            </div>
            <ul role="list" className="my-8  space-y-4 text-left">
              {subs?.selectedPlan?.features?.map(
                (feature: any, index: number) => (
                  <li key={index} className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                )
              )}
            </ul>
            <div className="flex justify-center">
              <button
                onClick={() => handleCancel(subs?._id)}
                className="underline text-violet-400"
              >
                Cancel Plan
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 p-10">
        <Link to="/">
          <h3 className="text-3xl font-bold text-center">
            Lumi<span className="text-[#4869DD]">Jobs</span>
          </h3>
          <div className="divider w-2/3 mx-auto"></div>
        </Link>
        <div className="pt-14 md:pt-[10rem]">
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

            <div className="w-full pt-8 flex justify-center">
              <button
                type="submit"
                disabled={!stripe || !clientSecret || loading}
                className="btn w-2/3 bg-accent hover:bg-accentTwo text-white mt-10"
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>
            </div>
            <p className="text-red-600 mt-5">{error}</p>
            {transactionId && (
              <p className="text-green-600 mt-5">
                Transaction Id: {transactionId}
              </p>
            )}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CheackoutForm;
