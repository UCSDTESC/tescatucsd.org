// import "./App.css";
// import PageNoHeader from "./components/PageNoHeader";
// import EOTGLayout from "./pages/EOTGPage/EOTGLayout";
// import EOTGPage from "./pages/EOTGPage";

import { lazy } from "react";
const Events = lazy(() => import("./pages/Events/Events"));

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const CouncilMembers = lazy(
  () => import("./pages/CouncilMembersPage/CouncilMembers")
);
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
import Page from "./components/Page";
import Main from "./pages/MainPage/Main";
import RedirectComponent from "./components/RedirectComponent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Page />}>
            {/* Routes with the NavBar */}
            <Route path="/" element={<Main />} />
            <Route path="/events" element={<Events />} />
            <Route path="/council-members" element={<CouncilMembers />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>

          {/* <Route element={<PageNoHeader />}> */}
          {/* Routes without the NavBar */}
          {/* <Route
              path="/eotg"
              element={
                <EOTGLayout>
                  <EOTGPage />
                </EOTGLayout>
              }
            />
          </Route> */}

          {/* Redirect /discord to the Discord invite link */}
          <Route path="/discord" element={<RedirectComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
