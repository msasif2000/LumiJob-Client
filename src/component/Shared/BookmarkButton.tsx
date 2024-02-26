import React, { useState, useEffect } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useBookmark from "../../hooks/useBookmarks";
import Job from "../../Pages/Home/PopularJobs/Job";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

interface BookmarkButtonProps {
  job: Job;
}
interface Bookmark {
  _id: string;
  userId: string;
 
}



const BookmarkButton: React.FC<BookmarkButtonProps> = ({ job }) => {
  const { _id, sectorType, picture, location, title, salaryRange, deadline } = job;
  const { user } = useAuth();
  const navigate = useNavigate();
  const pageLocation = useLocation();
  const [bookmarks, refetch] = useBookmark(); // Get all bookmarks of the user
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Check if the job is already bookmarked by the user
    const isBookmarked = bookmarks.some((bookmark : Bookmark) => bookmark.userId === _id);
    setIsBookmarked(isBookmarked);
  }, [bookmarks, _id]);

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false); // State to track if the job is bookmarked

  const handleAddToBookmark = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (user && user.email) {
      const bookmarkItem = {
        userId: _id,
        email: user.email,
        sectorType,
        picture,
        location,
        title,
        salaryRange,
        deadline,
      };
      if (!isBookmarked) {
        // If the job is not bookmarked, add it to bookmarks
        axiosPublic
          .post("/bookmarks", bookmarkItem)
          .then((res) => {
            // console.log(res.data);
            if (res.data.insertedId) {
              setIsBookmarked(true);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Added to bookmark",
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error adding bookmark:", error);
            Swal.fire({
              icon: "error",
              title: "Try again later",
              text: "Something went wrong!",
            });
          });
      } else {
        // If the job is already bookmarked, removing it from bookmarks
        const bookmarkIdToRemove = bookmarks.find((bookmark : Bookmark) => bookmark.userId === _id)?._id;
        axiosPublic
          .delete(`/bookmarks/${bookmarkIdToRemove}`)
          .then((res) => {
            //console.log(res.data);
            if (res.data.deletedCount === 1) {
              setIsBookmarked(false);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Removed from bookmarks",
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error removing bookmark:", error);
            Swal.fire({
              icon: "error",
              title: "Try again later",
              text: "Something went wrong!",
            });
          });
      }
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the bookmark?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate('/login', { state: { from: pageLocation } })
        }
      });
    }
  }

  return (
    <button
      onClick={handleAddToBookmark}
      title={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
      className={` border p-2 border-black rounded-lg hover:text-accent hover:border-accent ${isBookmarked ? "bg-blue-300" : ""}`}
    >
      <MdBookmarkAdd />
    </button>
  );
};

export default BookmarkButton;
