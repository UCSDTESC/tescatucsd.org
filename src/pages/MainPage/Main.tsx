// import "./Main.css";
import Divider from "./Divider";
import Slideshow from "./Slideshow";
import HomePageEvents from "./HomePageEvents";
import Sponsors from "./Sponsors";
const divider_1_text =
  "The Triton Engineering Student Council (TESC) empowers UC San Diego \n engineering students by connecting them with impactful communities, projects,\n and career building opportunities.";
const divider_2_text = ""; //In TESC we believe that best way to improve and provide the best services for the \n student body is by being accepting off all people and expanding our team to a \n wide range of people. Click here if you would like to join us!` ";
const Main = () => {
  return (
    <>
      <Slideshow />
      <Divider text={divider_1_text} />
      <HomePageEvents />
      <Divider text={divider_2_text} />
      <Sponsors />
    </>
  );
};

export default Main;
