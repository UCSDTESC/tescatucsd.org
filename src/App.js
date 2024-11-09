import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Slideshow from "./pages/MainPage/Slideshow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </Router>
      <Slideshow />
      <Footer />
    </>
  );
}

export default App;
