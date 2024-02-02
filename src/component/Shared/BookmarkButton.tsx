import React from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosDev from "../../hooks/useAxiosDev";
import useBookmark from "../../hooks/useBookmarks";
import Job from "../../Pages/Home/PopularJobs/Job";
import Swal from "sweetalert2";


interface BookmarkButtonProps {
  job: Job;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ job }) => {
  const { _id, sector, picture, location, title, salaryRange, deadline } = job;
  const { user } = useAuth();
  const navigate = useNavigate();
  const pageLocation = useLocation();
  const axiosDev = useAxiosDev();
  const [, refetch] = useBookmark();

  const handleAddToBookmark = () => {
    if (user && user.email) {
      const bookmarkItem = {
        userId: _id,
        email: user.email,
        sector,
        picture,
        location,
        title,
        salaryRange,
        deadline,
      };
      axiosDev
        .post("/bookmarks", bookmarkItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
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
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
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
      title="Add to Bookmark"
      className="bg-white border p-2 border-black rounded-lg hover:text-[#486DD9] hover:border-[#486DD9]"
    >
      <MdBookmarkAdd />
    </button>
  );
};

export default BookmarkButton;
