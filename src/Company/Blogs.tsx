import { useNavigate } from "react-router-dom";
import CandidateNav from "../Candidate/CommonNavbar/CandidateNav";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import BlogCard from "./BlogCard";

interface Blog {
    _id: string,
    title: string,
    category: string,
    details: string,
    email: string,
    img: URL,
    postTime: string,
}
const Blogs = () => {
    const navigate = useNavigate();
    const [companyPostedBlogs, setCompanyPostedBlogs] = useState<any | null>(null);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        if (user?.email) {
            axiosPublic.get(`/get-posted-blogs/${user?.email}`)
                .then(res => {
                    setCompanyPostedBlogs(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [user]);
    const length = companyPostedBlogs?.length;

    const handleDelete = (blogId: string) => {
        axiosPublic
            .delete(`/delete-blog/${blogId}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    toast.success(`Blog post deleted successfully`, {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setCompanyPostedBlogs(
                        companyPostedBlogs?.filter((job: any) => job._id !== blogId),
                    );
                    navigate('/dashboard/blog-posted');
                }
            })
            .catch((err) => {
                console.error("Error deleting job:", err);
                toast.error("An error occurred while deleting the job.");
            });
    };
    const handleBlogPosts = () => {
        navigate('/dashboard/post-a-blog')
    }
    return (
        <div>
            <CandidateNav
                text="Your Posted Blogs"
                btn="Post Blog"
                btn2={length}
                handleClick={() => { handleBlogPosts() }}
                handleClick2={() => { }}
            />
            <div className="grid grid-cols-4 gap-6">
                {companyPostedBlogs?.map((blog: Blog) => (
                    <BlogCard key={blog._id} blog={blog} handleDelete={handleDelete} />
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Blogs;