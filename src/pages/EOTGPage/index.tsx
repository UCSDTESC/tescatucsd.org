import { Component } from "react";

import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Orgs from "./components/Orgs.tsx";
import Faq from "./components/Faq.tsx";
//import Footer from "./components/Footer.tsx";

import "./js/sortElements.ts";
import "./js/company-table.ts";

class EOTGPage extends Component {
  componentDidMount() {
    document.title = "EOTG | UCSD TESC";
  }

  render() {
    return (
      <>
        <Hero />
        <About />
        <Orgs />
        <Faq />
        {/* <Footer /> */}
      </>
    );
  }
}

export default EOTGPage;
