import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nodata from "./err/Nodata";
import Loading from "./err/Loading";
import { FaCircleUser } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import GoToTop from "../../../component/GoToTop/GoToTop";
import { Helmet } from "react-helmet-async";

interface BlogData {
  id: number;
  img: string;
  title: string;
  category: string;
  postTime: string;
  details: string;
  readTime: string;
  author: string;
}

const ArticleDetails = () => {
  const { _id } = useParams();

  const [data, setData] = useState<BlogData>();
  const [isLoading, setLoading] = useState(false);
  const [readingTime, setReadingTime] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const axiosPublic = useAxiosPublic();

  const calculateReadingTime = (text: string): string => {
    const wordsPerMinute = 200; // Average reading speed in words per minute
    const words = text.split(/\s+/).length; // Split text by spaces to count words
    const minutes = words / wordsPerMinute; // Calculate reading time in minutes
    const readingTime = Math.ceil(minutes); // Round up to the nearest minute
    return `${readingTime} min read`; // Format the reading time
  };

  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get(`/single-blog/${_id}`)

      .then((res) => {

        setData(res.data);
        setLoading(false);
        const readingTime = calculateReadingTime(res.data.details);
        setReadingTime(readingTime);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      });
  }, [_id]);



  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;

      const body = document.body;
      const html = document.documentElement;

      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const scrollTop =
        "pageYOffset" in window
          ? window.pageYOffset
          : "scrollTop" in document.documentElement
            ? document.documentElement.scrollTop
            : document.body.scrollTop;

      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const capitalizeFirstLetter = (text: string | undefined) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const addLineGapAfter200Words = (text: string) => {
    const words = text.split(" ");
    const wordsWithLineGaps = [];

    for (let index = 0; index < words.length; index++) {
      if (index > 0 && index % 100 === 0) {
        wordsWithLineGaps.push("\n \n");
      }
      wordsWithLineGaps.push(words[index]);
    }

    return wordsWithLineGaps.join(" ");
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="fixed w-full"></div>
          <Helmet>
            <title>{data ? data.title : "Article Details"}</title>
          </Helmet>
          <div
            className="h-[4px] bg-accentTwo backdrop-blur-md fixed"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
          <GoToTop />
          <div className="max-w-screen-2xl mx-auto pb-20 pt-2 px-4 lg:px-20">
            {data ? (
              <div className="lg:flex py-6 gap-8">
                <div className="flex justify-between lg:w-2/5  space-y-5 pb-10 lg:pb-0">
                  <div className="flex flex-col">
                    <img src={data.img} className="w-full" alt="" />
                    <h2 className="text-3xl font-heading font-semibold">
                      {capitalizeFirstLetter(data.title)}
                    </h2>
                    <div>
                      <p className="flex items-center gap-2 text-gray-600 text-lg font-medium">
                        <FaCircleUser className="text-xl" /> {data.author}
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-lg font-normal text-gray-500">
                      <p className="text-accentTwo">{data?.postTime?.split("T")[0]}</p>
                      <p className="text-accentTwo  font-semibold">
                        {readingTime}
                      </p>
                    </div>
                  </div>
                </div>
                {/* article */}
                <div className="lg:w-3/5  ">
                  <p
                    className="text-lg xl:text-xl "
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {capitalizeFirstLetter(
                      addLineGapAfter200Words(data.details)
                    )}
                  </p>
                </div>
              </div>
            ) : (
              <Nodata />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ArticleDetails;
