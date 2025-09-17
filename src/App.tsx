// import "./App.css";
// import PageNoHeader from "./components/PageNoHeader";
// import EOTGLayout from "./pages/EOTGPage/EOTGLayout";
// import EOTGPage from "./pages/EOTGPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CouncilMembers from "./pages/CouncilMembersPage/CouncilMembers";
import Events from "./pages/Events/Events";
import AboutUs from "./pages/AboutUs/AboutUs";
import Funding from "./pages/FundingPage/Funding";
import Page from "./components/Page";
import Main from "./pages/MainPage/Main";
import RedirectComponent from "./components/RedirectComponent";
import ProfiledComponent from "./util/ProfiledComponent";

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
            <Route path="/funding" element={<Funding />} />
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
  // Uncomment the following code to use the Profiler for performance measurement
  //Profiler Below:
  // return (
  //   <>
  //     <Router>
  //       <ProfiledComponent id="Router">
  //         <Routes>
  //           <Route element={
  //             <ProfiledComponent id="Page">
  //               <Page />
  //             </ProfiledComponent>
  //           }>
  //             {/* Routes with the NavBar */}
  //             <Route path="/" element={
  //               <ProfiledComponent id="MainPage">
  //                 <Main />
  //               </ProfiledComponent>
  //             } />
  //             <Route path="/events" element={
  //               <ProfiledComponent id="EventsPage">
  //                 <Events />
  //               </ProfiledComponent>
  //             } />
  //             <Route path="/council-members" element={
  //               <ProfiledComponent id="CouncilMembersPage">
  //                 <CouncilMembers />
  //               </ProfiledComponent>
  //             } />
  //             <Route path="/about-us" element={
  //               <ProfiledComponent id="AboutUsPage">
  //                 <AboutUs />
  //               </ProfiledComponent>
  //             } />
  //           </Route>
  //           {/* <Route element={<PageNoHeader />}> */}
  //           {/* Routes without the NavBar */}
  //           {/* <Route
  //               path="/eotg"
  //               element={
  //                 <EOTGLayout>
  //                   <EOTGPage />
  //                 </EOTGLayout>
  //               }
  //             />
  //           </Route> */}
  //           {/* Redirect /discord to the Discord invite link */}
  //           <Route path="/discord" element={
  //             <ProfiledComponent id="RedirectComponent">
  //               <RedirectComponent />
  //             </ProfiledComponent>
  //           } />
  //         </Routes>
  //       </ProfiledComponent>
  //     </Router>
  //   </>
  // );
}

export default App;