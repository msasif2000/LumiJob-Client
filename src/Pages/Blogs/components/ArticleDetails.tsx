import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Nodata from "./err/Nodata";
import axios from "axios";
import Loading from "./err/Loading";

const ArticleDetails = () => {
  const { id } = useParams();
  const [datas, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/blog.json`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      });
  }, [id]);

  const item = datas.hasOwnProperty(id) ? datas[id] : null;

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
          <div className="max-w-screen-2xl mx-auto py-20 lg:px-3">
            {item ? (
              <div className="lg:flex">
                <div className="flex flex-col lg:w-1/4 space-y-5 lg:fixed pb-10 lg:pb-0 px-3 lg:px-0">
                  <img src={item.img} className="w-full" alt="" />
                  <h2 className="text-3xl font-bold">
                    {capitalizeFirstLetter(item.title)}
                  </h2>
                  <div className="flex justify-between text-lg font-bold text-gray-500">
                    <p>{item.date}</p>
                    <p>{item.readTime} read</p>
                  </div>
                </div>
                {/* article */}
                <div className="lg:w-3/4 lg:ml-[530px] px-3 lg:px-0">
                  <p className="text-2xl" style={{ whiteSpace: "pre-line" }}>
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
