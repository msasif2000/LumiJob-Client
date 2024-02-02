import React from "react";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { PiMoney } from "react-icons/pi";
import useBookmark from "../hooks/useBookmarks";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";

interface Bookmark {
    _id: string;
    title: string;
    picture: string;
    location: string;
    salaryRange: {
        min: number;
        max: number;
    };
    post_time: string;
}

const Bookmarks: React.FC = () => {
    const [bookmarks, refetch] = useBookmark();
    const axiosPublic = useAxiosPublic()

    const handleDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/bookmarks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h1 className=" text-3xl font-bold mt-8 mb-12 text-center">My Bookmarks</h1>

            <div className="md:w-2/3 mx-auto">
                {bookmarks.map((bookmark: Bookmark) => (
                    <div className="my-2" key={bookmark._id}>
                        <div className="group grid grid-cols-12 space-x-8 overflow-hidden rounded-lg border hover:border-[#486DD9] py-5 text-gray-700 bg-white">
                            <div className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                                <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                                    <img src={bookmark.picture} alt="logo" className="w-full text-gray-700" />
                                </div>
                            </div>
                            <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                                <p className="flex justify-between flex-wrap sm:flex-nowrap">
                                    <div>
                                    <h3 className="mb-1 overflow-hidden pr-7 text-xl font-semibold sm:text-xl">{bookmark.title}</h3>
                                    <p className="md:hidden text-sm opacity-90">{bookmark.location}</p>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between">
                                        <button onClick={() => handleDelete(bookmark._id)} className="">
                                            <FaTrashAlt className="text-red-600 hover:text-[#486DD9]"></FaTrashAlt>
                                        </button>
                                        <Link className="" to={`/details/${bookmark._id}`}>
                                            <button className="py-1 px-3 border border-gray-300 hover:bg-[#486DD9] hover:text-white font-semibold text-sm rounded-lg">
                                                Quick Apply
                                            </button>
                                        </Link>
                                    </div>
                                </p>
                                <p className="hidden md:flex text-sm opacity-90">{bookmark.location}</p>
                                <div className="hidden md:flex flex-wrap gap-3 items-center mt-5">
                                    <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                                        <MdDateRange className="mr-1" /> {bookmark.post_time}
                                    </span>
                                    <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                                        <IoMdTime className="mr-1" /> Full Time
                                    </span>
                                    <span className="bg-[#E0E0E0] py-1 px-3 rounded flex items-center text-sm">
                                        <PiMoney className="mr-1" /> {bookmark.salaryRange.min} - {bookmark.salaryRange.max}
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
