import { useNavigate } from "react-router-dom";
import CandidateNav from "../Candidate/CommonNavbar/CandidateNav";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import BlogCard from "./BlogCard";

const Blogs = () => {
    const navigate = useNavigate();
    const [companyPostedBlogs, setCompanyPostedBlogs] = useState();
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        if(user?.email) {
            axiosPublic.get(`get-posted-blogs/${user.email}`)
            .then(res => {
                setCompanyPostedBlogs(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [user]);

    const handleBlogPosts = () =>{
        navigate('/dashboard/post-a-blog')
      }
    return (
        <div>
      <CandidateNav
        text="Your Posted Jobs"
        btn="Post Jobs"
        btn2={length}
        handleClick={() => {handleBlogPosts()}}
        handleClick2={() => {}}
      />
      <div className="grid grid-cols-4 gap-6">
        {companyPostedBlogs?.map((job: Job) => (
          <BlogCard key={job._id} job={job} handleDelete={handleDelete} />
        ))}
      </div>
      <ToastContainer/>
    </div>
    );
};

export default Blogs;