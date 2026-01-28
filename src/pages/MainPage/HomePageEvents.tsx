import { Suspense } from "react";
import HomePageEventCards from "./HomePageEventsCards";
import { upcomingEvents, pastEvents } from "../Events/EventsList.ts";

const events = [
  ...upcomingEvents.slice(0, 3),
  ...pastEvents.slice(0, Math.max(0, 3 - upcomingEvents.length))
];

const HomePageEvents = () => {
  return (
    <>
      <div className="flex justify-center mb-[10vh]">
        <div className="w-[70%] mt-5">
          <h1 className="text-[30px] text-[#003059] font-bold">Events</h1>
          <div className="mb-7">
            <h3>
              <a
                href="https://www.tescatucsd.org/events"
                className="underline font-light text-[#000000]"
                title="Events"
              >
                See all events
              </a>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full justify-center h-auto ml-auto mr-auto gap-10">
            {events.map((event, index) => (
              <Suspense fallback={<></>}>
                <HomePageEventCards {...{ event, index }} key={index} />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePageEvents;
