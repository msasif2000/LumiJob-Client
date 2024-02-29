import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheackoutForm from "./CheackoutForm";
import { Helmet } from "react-helmet-async";
import GoToTop from "../../component/GoToTop/GoToTop";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Payment | LumiJobs</title>
      </Helmet>
      <GoToTop />

      <div className="w-full min-h-screen bg-[#FAFAFA] flex justify-center items-center">
        <div className="w-11/12 lg:w-8/12 2xl:w-6/12">
          <Elements stripe={stripePromise}>
            <CheackoutForm />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
