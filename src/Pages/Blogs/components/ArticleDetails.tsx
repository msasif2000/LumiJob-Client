import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import Nodata from "./err/Nodata";
import Loading from "./err/Loading";
import { FaCircleUser } from "react-icons/fa6";

interface BlogData {
  id: number;
  img: string;
  title: string;
  category: string;
  date: string;
  details: string;
  readTime: string;
  author: string;
}

const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [datas, setData] = useState<BlogData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/blog.json`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      });
  }, [id]);

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

  const numericId = id !== undefined ? parseInt(id, 10) : NaN;

  const item =
    !isNaN(numericId) && datas.hasOwnProperty(numericId)
      ? datas[numericId]
      : null;

  const capitalizeFirstLetter = (text: string) => {
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
          <div className="fixed w-full">
            <Navbar color={""} />
          </div>
          <div
            className="h-[6px] bg-gradient-to-r from-[#98ff98] via-[#fff45c] to-[#ff4739] fixed"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
          <div className="max-w-screen-2xl mx-auto py-20 px-4">
            {item ? (
              <div className="lg:flex py-6">
                <div className="flex flex-col lg:w-1/4 space-y-5 lg:fixed pb-10 lg:pb-0">
                  <img src={item.img} className="w-full" alt="" />
                  <h2 className="text-3xl font-heading font-semibold">
                    {capitalizeFirstLetter(item.title)}
                  </h2>
                  <div>
                    <p className="flex items-center gap-2 text-gray-600 text-lg font-medium">
                      <FaCircleUser /> {item.author}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-lg font-normal text-gray-500">
                    <p>{item.date}</p>
                    <p className="text-accentTwo  font-semibold">
                      {item.readTime} read
                    </p>
                  </div>
                </div>
                {/* article */}
                <div className="lg:w-3/4 lg:ml-[530px] ">
                  <p
                    className="text-lg xl:text-xl "
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {capitalizeFirstLetter(
                      addLineGapAfter200Words(item.details)
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
