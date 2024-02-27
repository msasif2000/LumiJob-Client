import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const colorProps =
    location.pathname === "/insights"
      ? {
          color:
            "bg-gradient-to-r from-[#F2F8F5] from-35% via-[#F5DED9] via-60% to-[#F2F8F5] to-100% ...",
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
