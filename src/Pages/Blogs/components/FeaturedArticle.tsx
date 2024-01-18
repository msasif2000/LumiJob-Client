import { Key, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

interface BlogData {
  id: number;
  img: string;
  title: string;
  category: string;
  date: string;
  details: string;
  readTime: string;
}

const FeaturedArticle = () => {
  const axiosPublic = useAxiosPublic();
  const [datas, setData] = useState<BlogData[] | null>(null);

  useEffect(() => {
    axiosPublic.get("/blog.json").then((res) => {
      setData(res.data);
    });
  }, []);

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const slicedData = datas && shuffleArray(datas.slice(0, 13));

  const truncateDetails = (details: string, limit: number) => {
    const words = details.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return details;
    }
  };

  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#F2F8F5] from-45% via-[#F5DED9] via-60% to-[#F2F8F5] to-100% ... pb-10">
      <div className="max-w-screen-2xl mx-auto lg:px-4">
        <h1 className="text-3xl px-3 lg:px-0 lg:text-6xl font-bold py-10">
          Featured Articles
        </h1>
        {/* for computer */}
        <div className="hidden xl:block">
          <div className="grid grid-cols-4 gap-5">
            {slicedData &&
              slicedData.map((item: any, idx: Key | null | undefined) => {
                return (
                  <Link
                    to={`/insights/${item.id}`}
                    key={idx}
                    className={`${
                      idx === 0
                        ? "col-span-2 row-span-2"
                        : "col-span-1 row-span-1"
                    }`}
                  >
                    <div>
                      <div className=" p-2 bg-white hover:shadow-xl duration-700">
                        <figure className="relative">
                          {idx === 0 ? (
                            <img
                              src={item.img}
                              className=" w-full h-[490px] p-2 rounded-2xl"
                              alt=""
                            />
                          ) : (
                            <img
                              src={item.img}
                              className="w-96 h-[260px] p-2"
                              alt=""
                            />
                          )}
                          {idx === 0 ? (
                            <p className="bg-green-300 bg-opacity-50 p-1 rounded-sm font-semibold absolute top-[435px] right-5 ">
                              {item.category}
                            </p>
                          ) : (
                            <p className="bg-green-300 bg-opacity-50 p-1 rounded-sm font-semibold absolute top-[205px] right-5 ">
                              {item.category}
                            </p>
                          )}
                        </figure>
                        <div className="flex justify-between font-bold text-gray-400 px-2">
                          <p>{item.date}</p>
                          <p>{item.readTime} read</p>
                        </div>
                        <div
                          className={`${
                            idx === 0
                              ? "h-[234px] bg-white p-2"
                              : "bg-white p-2 space-y-2"
                          }`}
                        >
                          {idx === 0 ? (
                            <h1 className="text-3xl font-semibold">
                              {item.title}
                            </h1>
                          ) : (
                            <h1 className="text-xl font-semibold">
                              {item.title}
                            </h1>
                          )}

                          {idx === 0 ? (
                            <>
                              <p>
                                {truncateDetails(item.details, 80)}{" "}
                                <span className="text-[#4965E1] font-semibold">
                                  {" "}
                                  ...read more
                                </span>
                              </p>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        {/* for mobile */}
        <div className="xl:hidden block">
          <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {slicedData &&
              slicedData.map((item: any, idx: Key | null | undefined) => {
                return (
                  <Link to={`/insights/${item.id}`} key={idx}>
                    <div>
                      <div className=" p-2 bg-white hover:shadow-xl duration-700">
                        <figure className="relative">
                          <img
                            src={item.img}
                            className="w-96 h-[260px] p-2"
                            alt=""
                          />

                          <p className="bg-green-300 bg-opacity-50 p-1 rounded-sm font-semibold absolute top-[205px] right-5 ">
                            {item.category}
                          </p>
                        </figure>
                        <div className="flex justify-between font-bold text-gray-400 px-2">
                          <p>{item.date}</p>
                          <p>{item.readTime} read</p>
                        </div>
                        <div>
                          <h1 className="md:text-lg p-2 font-semibold">
                            {item.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
