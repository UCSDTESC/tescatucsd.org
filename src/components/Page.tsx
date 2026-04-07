import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
