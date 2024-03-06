import { useEffect, useState } from "react";
import "./SubScriptions.css";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoToTop from "../../component/GoToTop/GoToTop";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SubscriptionsUiCandidate = () => {
  const [plans, setPlans] = useState<any | null>(null);
  const [subscription, setSubscription] = useState<any | null>(null);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosPublic
      .get("/packages/candidate")
      .then((res) => {
        // console.log(res.data);
        setPlans(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/payment/${user.email}`)
        .then((res) => {
          console.log(res.data);
          setSubscription(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  console.log(subscription);

  const handleChoosePlan = (plan: any) => {
    if (subscription && subscription.packages === plan.name) {
      toast.error('You already have this plan!', {
        position: 'top-center' // Adjust the position as needed
      });
    } else {
      window.location.href = user ? `/payment/${plan._id}` : '/login';
    }
  };

  return (
    <>
      <Helmet>
        <title>Candidate Subscription | LumiJobs</title>
      </Helmet>
      <GoToTop />
      <div className="max-w-screen-2xl mx-auto px-4">
        <section className="bg-white ">
          <div className="py-8 lg:py-16 ">
            <div className="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                Choose the Right Plan for Your Career Success
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl ">
                Explore our range of pricing plans tailored to suit your
                job-seeking needs. Whether you're just starting your job search
                journey or looking for premium features to enhance your
                experience, LumiJobs offers flexible options to cater to every
                candidate.
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* Render subscription cards dynamically */}
              {plans?.map((plan: any) => (
                <div
                  key={plan._id} // Use plan._id as the key
                  className={`flex flex-col p-6 mx-auto max-w-lg text-center relative text-gray-900 bg-white rounded-lg border-2 ${plan.popular ? "scale-110" : "scale-100"
                    } border-gray-100 xl:p-8`}
                >
                  {plan.popular && (
                    <p className="absolute top-2 right-2 bg-blue-200 p-1 px-2 rounded-2xl font-semibold">
                      Popular
                    </p>
                  )}
                  <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
                  <p className="font-light text-gray-500 sm:text-lg ">
                    {plan.description}
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">
                      ${plan.price}
                    </span>
                  </div>
                  {/* List */}
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {plan.features.map((feature: any, index: number) => (
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
                    ))}
                  </ul>
                  <div className="action">
                    <div className="flex justify-center">
                      <button className="button" onClick={() => handleChoosePlan(plan)}>
                        {subscription && subscription?.packages === plan.name ? 'Choose Plan' : 'Choose Plan'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};

export default SubscriptionsUiCandidate;
