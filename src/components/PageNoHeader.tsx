import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const PageNoHeader = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default PageNoHeader;
