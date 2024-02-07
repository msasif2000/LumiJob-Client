import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheackoutForm from "./CheackoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-2/6">
        <Elements stripe={stripePromise}>
          <CheackoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
