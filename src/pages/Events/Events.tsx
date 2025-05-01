import { upcomingEvents, pastEvents } from "./EventsList.ts";
import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";
import LoadingIcon from "../MainPage/LoadingIcon";

const EventsGrid = lazy(() => import("./EventsGrid.tsx"));

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

      <div className="m-12 mt-20 flex flex-row justify-between items-center max-w-[80%] mx-auto">
        <div className="sm:max-w-full md:max-w-3/5 ">
          <p className="font-semibold text-[40px] text-[#11426B] leading-10 mb-3">
            Jump into engineering leadership—where ideas come alive and students
            shape what’s next...
          </p>
          <p className="font-semibold text-[22px] mb-3">
            Our events bring together passionate engineers to learn, connect,
            and lead. Whether it's talks by start-ups, interactive workshops, or
            socials, there's always an opportunity to engage, grow, and make an
            impact!
          </p>
        </div>
        <img
          src="AllPages/events-lead.webp"
          alt="lead"
          className="hidden md:block w-80 h-auto"
        ></img>
      </div>

      <div className="mt-4 mx-auto w-[80%]">
        <h1 className="text-[30px] text-[#11426B] font-bold mb-4">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <EventsGrid events={upcomingEvents} />
        </div>
      </div>

      <div className="mt-10 mx-auto w-[80%] mb-10">
        <h1 className="text-[30px] text-[#11426B] font-bold mb-4">
          Past Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <EventsGrid events={pastEvents} />
        </div>
      </div>
    </>
  );
};

export default Events;
