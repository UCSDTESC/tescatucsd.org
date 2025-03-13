import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";
import LoadingIcon from "../MainPage/LoadingIcon";
const AboutUsContent = lazy(() => import("./AboutUsContent"));
const AboutUs = () => {
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
      <div className="m-12 mt-20 flex flex-row justify-between items-center max-w-[80%] mx-auto">
        <div className="sm:max-w-full md:max-w-3/5 ">
          <p className="font-semibold text-[60px] text-[#11426B] leading-14 mb-3">
            Get to know our <br /> board members
          </p>
          <p className="font-semibold text-[22px] mb-3">
            Meet the leaders behind our organization! Our board members are
            dedicated to fostering community, innovation, and growth. Get to
            know the team working to bring our mission to life!
          </p>
        </div>
        <img
          src="AllPages/bear.png"
          alt="bear"
          className="hidden md:block w-72 h-auto"
        ></img>
      </div>
      <div className="max-w-[80%] mx-auto mb-10">
        <Suspense fallback={<LoadingIcon />}>
          <AboutUsContent />
        </Suspense>
      </div>
    </>
  );
};

export default AboutUs;
