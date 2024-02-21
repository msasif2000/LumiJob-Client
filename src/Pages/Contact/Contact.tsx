import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./contact.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handlefrom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contacts | LumiJobs</title>
      </Helmet>
      <div className="min-h-screen bg-[#fdfdfd]">
        <div className="max-w-screen-2xl mx-auto">
          <div>
            <div className="text-center pt-20 ">
              <h3 className="text-5xl lg:text-7xl font-heading font-semibold text-center mb-4 lg:mb-5">
                Contact <span className="text-accentTwo">Us</span>
              </h3>
              <p className="text-sm md:text-lg lg:text-xl text-[#707070] text-center">
                Any question or remarks? Just write us a message!
              </p>
            </div>

            {/* main section  */}
            <div className="grid grid-cols-6 lg:grid-cols-12 justify-center gap-8 mt-10 bg-white rounded-lg border shadow mx-2 px-3">
              <div className="col-span-1 ">
                <div className="flex flex-col justify-center items-center gap-3">
                  <div className="lg:mt-12 xl:mt-16 py-10">
                    <p className="-rotate-90 font-bold text-accentTwo">
                      Follow us
                    </p>
                  </div>
                  <div className="rotate-90 py-8">
                    <hr className="w-20  border-accentTwo" />
                  </div>
                  <Link
                    to="https://www.facebook.com/"
                    target="_blank"
                    className="rounded-full w-10 hover:bg-accentTwo bg-black text-white duration-200 p-3"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to="https://youtube.com/"
                    target="_blank"
                    className="rounded-full w-10 hover:bg-accentTwo bg-black text-white duration-200 p-3"
                  >
                    <AiFillYoutube />
                  </Link>

                  <Link
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="rounded-full w-10 hover:bg-accentTwo bg-black text-white duration-200 p-3"
                  >
                    <AiFillInstagram />
                  </Link>

                  <Link
                    to="https://twitter.com/"
                    target="_blank"
                    className="rounded-full w-10 hover:bg-accentTwo bg-black text-white duration-200 p-3"
                  >
                    <FaTwitter />
                  </Link>
                </div>
              </div>

              {/* contact details  */}

              <div className=" parent col-span-5 lg:col-span-4 bg-accent p-8 py-12 space-y-24 text-black rounded-lg">
                <div>
                  <h3 className="text-4xl font-heading font-semibold text-white">
                    Contact Information
                  </h3>
                  <p className="text-lg text-[#BFD0E6]">
                    Say something to start a live chat!
                  </p>
                </div>
                <div className="space-y-8 text-[#F8EDFE]">
                  <div className="flex items-center gap-3">
                    <BiSolidPhoneCall className="text-lg" />
                    <p>+1012 3456 789</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdEmail className="text-lg" />
                    <p>contact@lumijob.netlify.app</p>
                  </div>
                  <div className="flex  gap-3">
                    <IoLocationSharp className="text-3xl" />
                    <p>
                      132 Dartmouth Street Boston,
                      <br className="block lg:hidden" /> Massachusetts 02156
                      United States
                    </p>
                  </div>
                </div>

                <div className="half-circle-1"></div>
                <div className="half-circle-2"></div>
              </div>

              {/* contact form  */}
              <div className="col-span-6 lg:col-span-7">
                <div
                  id="contract"
                  className="max-w-screen-xl mx-auto px-5 lg:px-0"
                >
                  <div>
                    <form
                      onSubmit={handlefrom}
                      ref={form}
                      className="card-body space-y-5 contactForm"
                    >
                      <div className="flex flex-col md:flex-row gap-10">
                        <div
                          className="form-control w-full"
                          style={{ borderBottom: "1px solid gray" }}
                        >
                          <label className="label">
                            <span className="label-text text-gray-500">
                              First Name
                            </span>
                          </label>
                          <input
                            type="text"
                            name="user_first_name"
                            className=" input"
                          />
                        </div>
                        <div
                          className="form-control w-full"
                          style={{ borderBottom: "1px solid gray" }}
                        >
                          <label className="label">
                            <span className="label-text text-gray-500">
                              Last Name
                            </span>
                          </label>
                          <input
                            type="text"
                            name="user_last_name"
                            className=" input "
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-10 ">
                        <div
                          className="form-control w-full"
                          style={{ borderBottom: "1px solid gray" }}
                        >
                          <label className="label">
                            <span className="label-text text-gray-500">
                              Email
                            </span>
                          </label>
                          <input
                            type="email"
                            name="user_email"
                            className="input "
                          />
                        </div>
                        <div
                          className="form-control w-full"
                          style={{ borderBottom: "1px solid gray" }}
                        >
                          <label className="label">
                            <span className="label-text text-gray-500">
                              Phone Number
                            </span>
                          </label>
                          <input
                            type="text"
                            name="user_phone_number"
                            className=" input "
                          />
                        </div>
                      </div>

                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text text-[16px] font-semibold">
                            Select Subject?
                          </span>
                        </label>

                        <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-start">
                          <div className="flex  gap-2">
                            <input
                              type="radio"
                              id="feedback"
                              name="select_subject"
                              value="feedback"
                              className="input-radio"
                            />
                            <label htmlFor="feedback">Feedback</label>
                          </div>

                          <div className="flex  gap-2">
                            <input
                              type="radio"
                              id="question"
                              name="Select_subject"
                              value="question"
                              className="input-radio"
                            />
                            <label htmlFor="question">Question</label>
                          </div>
                          <div className="flex  gap-2">
                            <input
                              type="radio"
                              id="partnership"
                              name="Select_subject"
                              value="partnership"
                              className="input-radio"
                            />
                            <label htmlFor="partnership">Partnership</label>
                          </div>
                          <div className="flex  gap-2">
                            <input
                              type="radio"
                              id="issue"
                              name="Select_subject"
                              value="issue"
                              className="input-radio"
                            />
                            <label htmlFor="issue">Issue</label>
                          </div>
                        </div>
                      </div>

                      <div
                        className="form-control mt-5"
                        style={{ borderBottom: "1px solid gray" }}
                      >
                        <label className="label">
                          <span className="label-text text-gray-500">
                            Message
                          </span>
                        </label>
                        <input
                          type="text"
                          name="user_message"
                          placeholder="Write your message.."
                          className=" input "
                        />
                      </div>

                      <div className="flex justify-end">
                        <div className="form-control mt-2">
                          <button
                            type="submit"
                            className="btn w-48 font-semibold bg-black text-white hover:bg-accentTwo rounded"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
