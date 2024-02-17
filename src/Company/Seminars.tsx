import CandidateNav from "../Candidate/CommonNavbar/CandidateNav";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SeminarCard from "./SeminarCard";

interface Seminar {
    _id: string,
    title: string,
    category: string,
    details: string,
    email: string,
    img: URL,
    postTime: string,

}
const Seminars = () => {
    const navigate = useNavigate();
    const [companyPostedSeminars, setCompanyPostedSeminars] = useState<any | null>(null);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        if (user?.email) {
            axiosPublic.get(`/get-posted-Seminars/${user?.email}`)
                .then(res => {
                    setCompanyPostedSeminars(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [user]);
    const length = companyPostedSeminars?.length;
    const handleDelete = (blogId: string) => {
        axiosPublic
            .delete(`/delete-blog/${blogId}`)
            .then((res) => {
                //console.log(res.data);
                if (res.data.acknowledged) {
                    toast.success(`Blog post deleted successfully`, {
                        hideProgressBar: true,
                        autoClose: 2000,
                        position: "top-center",
                    });
                    setCompanyPostedSeminars(
                        companyPostedSeminars?.filter((job: any) => job._id !== blogId),
                    );
                    navigate('/dashboard/blog-posted');
                }
            })
            .catch((err) => {
                console.error("Error deleting job:", err);
                toast.error("An error occurred while deleting the Blog.");
            });
    };
    const handleBlogPosts = () => {
        navigate('/dashboard/post-a-seminar')
    }
    return (
        <div>
            <CandidateNav
                text="Your Posted Seminars"
                btn="Post Blog"
                btn2={length}
                handleClick={() => { handleBlogPosts() }}
                handleClick2={() => { }}
            />
            <div className="grid grid-cols-4 gap-6">
                {companyPostedSeminars?.map((seminar: Seminar) => (
                    <SeminarCard key={seminar._id} seminar={seminar} handleDelete={handleDelete} />
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Seminars;