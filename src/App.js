import React from "react";
import "./App.css";

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
    </>
  );
}

export default App;
