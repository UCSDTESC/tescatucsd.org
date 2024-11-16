import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageEvents from "./components/HomePageEvents";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </Router>
      {/* <HomePageEvents/> */}
      <Footer />
    </>
  );
}

export default App;
