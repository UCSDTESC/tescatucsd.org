// import "./about-us.css";
import { Helmet } from "react-helmet";
import eventsPageImage from "/AllPages/events-page-image.png";
import Divider from "../MainPage/Divider";
import { lazy, Suspense } from "react";
import LoadingIcon from "../MainPage/LoadingIcon";
// import AboutUsContent from "./AboutUsContent";
const AboutUsContent = lazy(() => import("./AboutUsContent"));
const AboutUs = () => {
  //[name, role/committee, major, image]
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/AllPages/events-page-image.png"
          fetchPriority="high"
        />
      </Helmet>
      <img
        className="w-full h-[50vh] object-cover"
        src={eventsPageImage}
        alt=""
        fetchPriority="high"
      ></img>
      <Divider>
        The Triton Engineering Student Council (TESC), empowers UC San Diego's
        <br /> engineering students by connecting them to impactful communities,
        <br /> projects, and career-building opportunities
      </Divider>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 gap-5 mx-auto w-[80%]">
        <Suspense fallback={<LoadingIcon />}>
          <AboutUsContent />
        </Suspense>
      </div>
    </>
  );
};

export default AboutUs;
