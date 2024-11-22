import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Events from "./pages/Events/Events";

import Slideshow from "./pages/MainPage/Slideshow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CouncilMembers from "./pages/Council members/Components/CouncilMembers";
import Page from "./components/Page";
import HomePageEvents from "./components/HomePageEvents";
import Sponsors from "./pages/MainPage/Sponsors";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Page />}>
            <Route path="/" />
            <Route path="/events" element={<Events />} />
            <Route path="/council-members" element={<CouncilMembers />} />
          </Route>
        </Routes>
      </Router>
      {/* <Slideshow />
      <HomePageEvents />
      <Sponsors />
      <Footer /> */}
      {/* <Events /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
