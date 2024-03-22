import { Key, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import InsidesLoading from "../../../component/err & loading/InsidesLoading";

interface BlogData {
  id: number;
  img: string;
  title: string;
  category: string;
  postTime: string;
  details: string;
  readTime: string;
}

const FeaturedArticle = () => {
  const axiosPublic = useAxiosPublic();
  const [datas, setData] = useState<BlogData[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosPublic.get("/blogs").then((res) => {
      setData(res.data);
      setLoading(false);
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
    <div className="min-h-screen pb-10">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-20">
        <h1 className="text-3xl lg:text-6xl font-heading font-semibold pb-8">
          Featured  <span className="text-accentTwo">Articles</span> 
        </h1>
        {/* for computer */}
        <div className="hidden xl:block">
          {loading ? <InsidesLoading /> :
            <div className="grid grid-cols-4 gap-4">
              {slicedData &&
                slicedData.map((item: any, idx: Key | null | undefined) => {
                  return (
                    <Link
                      to={`/insights/${item._id}`}
                      key={idx}
                      className={`${idx === 0
                        ? "col-span-2 row-span-2 h-full rounded-xl bg-white shadow-xl"
                        : "col-span-1 row-span-1 h-full rounded-xl bg-white shadow-xl"
                        }`}
                    >
                      <div className="">
                        <div className="duration-700 h-full">
                          <figure className="relative">
                            {idx === 0 ? (
                              <img
                                src={item.img}
                                className=" w-full h-[490px] p-2 rounded-xl"
                                alt=""
                              />
                            ) : (
                              <img
                                src={item.img}
                                className="w-96 h-[260px] p-2 rounded-xl"
                                alt=""
                              />
                            )}
                            {idx === 0 ? (
                              <p className="bg-[#AC6DF8] text-gray-200 bg-opacity-50 p-1 rounded-sm font-semibold absolute top-[435px] right-5 ">
                                {item.category}
                              </p>
                            ) : (
                              <p className="bg-[#AC6DF8] text-gray-200 bg-opacity-50 p-1 rounded-sm font-semibold absolute top-[205px] right-5 ">
                                {item.category}
                              </p>
                            )}
                          </figure>
                          <div className="flex justify-between font-normal text-gray-400 px-2">
                            <p>{item?.postTime?.split("T")[0]}</p>
                            <p>{item?.readTime} read</p>
                          </div>
                          <div
                            className={`${idx === 0
                              ? "p-2"
                              : "p-2 space-y-2"
                              }`}
                          >
                            {idx === 0 ? (
                              <h1 className="text-3xl font-heading font-semibold mb-3">
                                {item.title}
                              </h1>
                            ) : (
                              <h1 className="text-xl font-heading font-semibold">
                                {item.title}
                              </h1>
                            )}

                            {idx === 0 ? (
                              <>
                                <p className="text-md md:text-lg">
                                  {truncateDetails(item.details, 75)}
                                  <span className="text-[#4965E1] font-bold">
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

          }
        </div>
        {/* for mobile */}
        <div className="xl:hidden block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {slicedData &&
              slicedData.map((item: any, idx: Key | null | undefined) => {
                return (
                  <Link to={`/insights/${item._id}`} key={idx}>
                    <div className=" h-full bg-white shadow-xl">
                      <div className=" duration-700">
                        <figure className="relative">
                          <img
                            src={item.img}
                            className="w-96 h-[260px] py-2 px-1 md:px-2 mx-auto"
                            alt=""
                          />

                          <p className="bg-green-300 text-gray-200 bg-opacity-50 p-1 rounded-sm font-semibold absolute top-[205px] right-5 ">
                            {item.category}
                          </p>
                        </figure>
                        <div className="flex justify-between font-normal text-gray-400 px-2">
                          <p>{item?.postTime?.split("T")[0]}</p>
                          <p>{item?.readTime} read</p>
                        </div>
                        <div>
                          <h1 className=" text-xl p-2 font-heading font-semibold">
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
