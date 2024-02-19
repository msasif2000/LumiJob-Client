import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const colorProps =
    location.pathname === "/insights"
      ? {
          color:
            "bg-gradient-to-r from-[#EEF8F1] from-5% via-[#D0FBD0] via-20% to-[#E7F9F3] to-45% ...",
        }
      : {};
  return (
    <div>
      <Navbar {...colorProps} />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
