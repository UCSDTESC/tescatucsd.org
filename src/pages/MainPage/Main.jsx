import React from "react";
import "./Main.css";

import Slideshow from "./Slideshow";
import HomePageEvents from "./HomePageEvents";
import Sponsors from "./Sponsors";

const Main = () => {
  return (
    <>
      <Slideshow />
      <HomePageEvents />
      <Sponsors />
    </>
  );
};

export default Main;
