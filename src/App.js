import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CouncilMembers from "./pages/Council members/CouncilMembers";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/council-members" element={<CouncilMembers />}></Route>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
