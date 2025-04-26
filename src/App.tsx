// import "./App.css";
// import PageNoHeader from "./components/PageNoHeader";
// import EOTGLayout from "./pages/EOTGPage/EOTGLayout";
// import EOTGPage from "./pages/EOTGPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CouncilMembers from "./pages/CouncilMembersPage/CouncilMembers";
import Events from "./pages/Events/Events";
import AboutUs from "./pages/AboutUs/AboutUs";
import Page from "./components/Page";
import Main from "./pages/MainPage/Main";
import RedirectComponent from "./components/RedirectComponent";
import ProfiledComponent from "./util/ProfiledComponent";

function App() {
  return (
    <>
      <Router>
        <ProfiledComponent id="Router">
          <Routes>
            <Route element={
              <ProfiledComponent id="Page">
                <Page />
              </ProfiledComponent>
            }>
              {/* Routes with the NavBar */}
              <Route path="/" element={
                <ProfiledComponent id="MainPage">
                  <Main />
                </ProfiledComponent>
              } />
              <Route path="/events" element={
                <ProfiledComponent id="EventsPage">
                  <Events />
                </ProfiledComponent>
              } />
              <Route path="/council-members" element={
                <ProfiledComponent id="CouncilMembersPage">
                  <CouncilMembers />
                </ProfiledComponent>
              } />
              <Route path="/about-us" element={
                <ProfiledComponent id="AboutUsPage">
                  <AboutUs />
                </ProfiledComponent>
              } />
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
            <Route path="/discord" element={
              <ProfiledComponent id="RedirectComponent">
                <RedirectComponent />
              </ProfiledComponent>
            } />
          </Routes>
        </ProfiledComponent>
      </Router>
    </>
  );
}

export default App;