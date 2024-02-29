import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import FooterTwo from "../component/Footer/FooterTwo";
// import Footer from "../component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      {/* <Footer /> */}
      <FooterTwo />
    </div>
  );
};

export default Main;
