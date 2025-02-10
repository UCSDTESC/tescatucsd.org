// import "./Main.css";
import decafEventWi25 from "/event-logos/decaf-event-wi25.jpg";
import eotgEventWi25 from "/event-logos/eotg-event-wi25.jpg";
import Divider from "./Divider";
import Slideshow from "./Slideshow";
import HomePageEvents from "./HomePageEvents";
import { Helmet } from "react-helmet";

import Sponsors from "./Sponsors";

const divider_1_text =
  "The Triton Engineering Student Council (TESC) empowers UC San Diego \n engineering students by connecting them with impactful communities, projects,\n and career building opportunities.";
const divider_2_text = ""; //In TESC we believe that best way to improve and provide the best services for the \n student body is by being accepting off all people and expanding our team to a \n wide range of people. Click here if you would like to join us!` ";

const Main = () => {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/event-logos/decaf-event-wi25.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/event-logos/eotg-event-wi25.jpg"
          fetchPriority="high"
        />
      </Helmet>

      <Slideshow />
      <Divider>{divider_1_text}</Divider>
      <HomePageEvents images={[decafEventWi25, eotgEventWi25]} />
      <Divider>{divider_2_text}</Divider>
      <Sponsors />
    </>
  );
};

export default Main;
