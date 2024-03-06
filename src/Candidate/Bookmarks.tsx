import React from "react";
import { Link } from "react-router-dom";
import { MdDateRange, MdDelete } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { PiMoney } from "react-icons/pi";
import useBookmark from "../hooks/useBookmarks";
import Swal from "sweetalert2";
// import useAxiosPublic from "../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import GoToTop from "../component/GoToTop/GoToTop";
import NoData from "../component/NoData/NoData";
import useAxiosSecure from "../hooks/useAxiosSecure";


interface Bookmark {
  _id: string;
  userId: string;
  title: string;
  picture: string;
  location: string;
  salaryRange: {
    min: number;
    max: number;
  };
  post_time: string;
  deadline: string;
}

const Bookmarks: React.FC = () => {
  const [bookmarks, refetch] = useBookmark();
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/bookmarks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const length = bookmarks.length;

  const handleNoData = () => {
  };

  if (length === 0) {
    return (
      <div className="min-h-screen">
        <NoData text="Bookmarked Jobs is Empty" btn="" noDataClick={handleNoData} />
      </div>
    )
  }
  const formatDeadlineDate = (deadline: any) => {
    const formattedDate = new Date(deadline).toLocaleDateString("en-GB");
    return formattedDate;
  };

  return (
    <div>
      <Helmet>
        <title>Bookmarks | Dashboard</title>
      </Helmet>
      <GoToTop />

      <div>
        <h3 className="md:text-3xl font-bold mb-12 mt-3">
          Bookmarked jobs <span className="text-accent">{length}</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mx-auto">
        {bookmarks.map((bookmark: Bookmark) => (
          <div className="my-2 " key={bookmark._id}>
            <div className="group grid grid-cols-12 space-x-8 overflow-hidden rounded-lg h-full border hover:border-accent py-5 text-gray-700 bg-white">
              {/* <div className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                
              </div> */}
              <div className="col-span-11 flex flex-col  text-left px-4">
                <p>
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="group relative h-16 w-16 overflow-hidden rounded-lg mb-2">
                        <img
                          src={bookmark.picture}
                          alt="logo"
                          className="w-full text-gray-700"
                        />
                      </div>
                      <div className="flex gap-2 items-center justify-between">
                        <button
                          onClick={() => handleDelete(bookmark._id)}
                          className=""
                        >
                          <MdDelete className="text-red-600 hover:text-accent" />
                        </button>
                        <Link className="" to={`/details/${bookmark.userId}`}>
                          <button className="py-1 px-3 border border-gray-300 hover:bg-accent hover:text-white font-semibold text-sm rounded-lg">
                           Details
                          </button>
                        </Link>
                      </div>
                    </div>
                    <h3 className="mb-1 overflow-hidden pr-7 text-xl font-semibold sm:text-xl">
                      {bookmark.title}
                    </h3>
                    {/* <p className="md:hidden text-sm opacity-90">
                      {bookmark.location}
                    </p> */}
                  </div>

                </p>
                <p className="flex text-sm opacity-90">
                  {bookmark.location}
                </p>
                <div className="flex flex-wrap gap-3 items-center mt-5">
                  <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                    <MdDateRange className="mr-1" />{" "}
                    {formatDeadlineDate(bookmark.deadline)}
                  </span>
                  <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                    <IoMdTime className="mr-1" /> Full Time
                  </span>
                  <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                    <PiMoney className="mr-1" /> {bookmark.salaryRange.min} -{" "}
                    {bookmark.salaryRange.max}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
