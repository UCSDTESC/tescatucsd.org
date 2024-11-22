import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Events from "./pages/Events/Events";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CouncilMembers from "./pages/Council members/Components/CouncilMembers";
import Page from "./components/Page";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Page />}>
            <Route path="/" />
            <Route path="/council-members" element={<CouncilMembers />} />
          </Route>
        </Routes>
      </Router>
      {/* <Events /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
