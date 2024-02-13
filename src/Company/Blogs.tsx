import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div>
            <Link to="/dashboard/post-a-blog"><button>Post Blog</button></Link>
        </div>
    );
};

export default Blogs;