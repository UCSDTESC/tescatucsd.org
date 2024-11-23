import React from "react";
import "./App.css";
import Events from "./pages/Events/Events";
import Main from "./pages/MainPage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CouncilMembers from "./pages/CouncilMembersPage/CouncilMembers";
import Page from "./components/Page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Page />}>
            <Route path="/" element={<Main />} />
            <Route path="/events" element={<Events />} />
            <Route path="/council-members" element={<CouncilMembers />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
