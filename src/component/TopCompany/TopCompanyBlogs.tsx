import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

interface BlogData {
  _id: number;
  img: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  details: string;
}

interface Props {
  email: string;
}

const TopCompanyBlogs: React.FC<Props> = ({ email }) => {
  const axiosPublic = useAxiosPublic();
  const [datas, setData] = useState<BlogData[] | null>(null);

  useEffect(() => {
    axiosPublic.get(`/get-posted-blogs/${email}`).then((res) => {
      setData(res.data);
    });
  }, []);

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
      <div className="max-w-screen-2xl mx-auto ">
        <div className="grid gap-6 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
          {datas &&
            datas.map((item: BlogData) => (
              <Link to={`/insights/${item._id}`} key={item._id}>
                <div className="p-4 bg-white hover:shadow-md duration-300 rounded-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <p className="bg-green-300 text-gray-200 bg-opacity-50 p-1 rounded-sm font-semibold absolute top-4 right-4">
                    {item.category}
                  </p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <p>{item.date}</p>
                    <p>{item.readTime} read</p>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600">
                    {truncateDetails(item.details, 20)}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompanyBlogs;
