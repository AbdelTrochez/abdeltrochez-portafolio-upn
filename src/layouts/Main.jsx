import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div data-theme={"light"} className="relative">
      <NavBar />
      <Outlet />
      <div className="bg-[#03356B] border-t-4 border-[#E94E1A]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
