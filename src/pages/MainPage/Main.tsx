import Divider from "./Divider";
import Slideshow from "./Slideshow";
import HomePageEvents from "./HomePageEvents";
import Policy from "./Policy";

import Sponsors from "./Sponsors";

const divider_1_text =
  "The Triton Engineering Student Council (TESC) empowers UC San Diego \n engineering students by connecting them with impactful communities, projects,\n and career building opportunities.";

const Main = () => {
  return (
    <>
      <Slideshow />
      <Divider>{divider_1_text}</Divider>
      <HomePageEvents />
      <Sponsors />
      <Policy />
    </>
  );
};

export default Main;
