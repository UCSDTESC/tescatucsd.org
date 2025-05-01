import Divider from "./Divider";
import LoadingIcon from "./LoadingIcon";
import Slideshow from "./Slideshow";
import { lazy, Suspense } from "react";
const HomePageEvents = lazy(() => import("./HomePageEvents"));
const Policy = lazy(() => import("./Policy"));
const Sponsors = lazy(() => import("./Sponsors"));

const divider_1_text =
  "The Triton Engineering Student Council (TESC) empowers UC San Diego \n engineering students by connecting them with impactful communities, projects,\n and career building opportunities.";

const Main = () => {
  return (
    <>
      <Slideshow />
      <Divider>{divider_1_text}</Divider>
      <Suspense fallback={<LoadingIcon />}>
        <HomePageEvents />
        <Sponsors />
        <Policy />
      </Suspense>
    </>
  );
};

export default Main;
