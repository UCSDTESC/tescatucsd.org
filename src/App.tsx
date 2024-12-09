import "./App.css";
import Events from "./pages/Events/Events";
import Main from "./pages/MainPage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CouncilMembers from "./pages/CouncilMembersPage/CouncilMembers";
import AboutUs from "./pages/AboutUs/AboutUs";
import Page from "./components/Page";
import EOTGLayout from "./pages/EOTGPage/EOTGLayout";
import { lazy } from "react";

const EOTGPage = lazy(() => import("./pages/EOTGPage/index.tsx"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Page />}>
            <Route path="/" element={<Main />} />
            <Route path="/events" element={<Events />} />
            <Route path="/council-members" element={<CouncilMembers />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/eotg"
              element={
                <EOTGLayout>
                  <EOTGPage />
                </EOTGLayout>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
