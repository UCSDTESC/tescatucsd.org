import {
  upcomingEventLogos,
  upcomingEventLinks,
} from "./EventsList.ts";

import eventsPageImage from "/AllPages/events-page-image.png";
import Divider from "../MainPage/Divider";
import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";
import LoadingIcon from "../MainPage/LoadingIcon";

const PastEventsGrid = lazy(() => import("./PastEventsGrid"));

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
      />
      <Divider>
        <p>
          At TESC, we believe events are the best way to grow and <br /> enhance
          the engineering student body
        </p>
      </Divider>

      <div className="mt-4 mx-auto w-[70%]">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {upcomingEventLogos.map((logo, index) => (
            <div key={index} className="">
              <img
                className="h-full w-full object-cover rounded-lg overflow-hidden cursor-pointer"
                src={logo}
                alt=""
                onClick={() => {
                  window.location.href = upcomingEventLinks[index];
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 mx-auto w-[70%]">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Past Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Suspense fallback={<LoadingIcon />}>
            <PastEventsGrid />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Events;
