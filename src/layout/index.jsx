import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HomeMain from "./HomeMain";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <HomeMain>
        <Outlet />
      </HomeMain>
      <Footer />
    </div>
  );
};

export default MainLayout;
