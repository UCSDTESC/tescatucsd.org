// import "./events.css";
import eventsPageImage from "/AllPages/events-page-image.png";
import Divider from "../MainPage/Divider";
import decaf_event_wi25 from "/event-logos/decaf-event-wi25.jpg";
import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";
import LoadingIcon from "../MainPage/LoadingIcon";
const PastEventsGrid = lazy(() => import("./PastEventsGrid"));
const upcomingEvents = [[decaf_event_wi25, "https://tescucsd.org/eotg"]];
const Events = () => {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/AllPages/events-page-image.png"
          fetchPriority="high"
        />
      </Helmet>

      <img
        className="w-full h-[50vh] object-cover"
        src={eventsPageImage}
        alt=""
        fetchPriority="high"
      ></img>
      <Divider>
        <p>
          At TESC, we believe events are the best way to grow and <br /> enhance
          the engineering student body
        </p>
      </Divider>

      <div className=" mt-4 mx-auto w-[70%]">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-4 gap-5">
          {upcomingEvents.map((data, index) => (
            <div key={index} className="">
              <div className="">
                <img
                  className="h-full w-full object-cover rounded-standard overflow-clip"
                  src={data[0]}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = data[1];
                  }}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-4 mx-auto w-[70%]">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Past Events
        </h1>

        <div className="grid grid-cols-4 t gap-5">
          <Suspense fallback={<LoadingIcon />}>
            <PastEventsGrid />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Events;
