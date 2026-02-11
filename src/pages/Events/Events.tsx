import useImagePreloader from "../../Hooks/useImagePreload.tsx";
import { useSplitEvents } from "./EventsList";
import { lazy, Suspense } from "react";

const EventsGrid = lazy(() => import("./EventsGrid.tsx"));

const Events = () => {
  const { upcomingEvents, pastEvents } = useSplitEvents();
  const imagePreloader = useImagePreloader(["AllPages/events-lead.webp"]);
  return (
    <>
      <div className="m-12 mt-20 flex flex-row justify-between items-center max-w-[80%] mx-auto">
        <div className="sm:max-w-full md:max-w-3/5 ">
          <p className="font-semibold text-[40px] text-[#11426B] leading-10 mb-3 text-balance">
            Jump into engineering leadership—where ideas come alive and students shape what’s
            next...
          </p>
          <p className="font-semibold text-[22px] mb-3">
            Our events bring together passionate engineers to learn, connect, and lead. Whether it's
            talks by start-ups, interactive workshops, or socials, there's always an opportunity to
            engage, grow, and make an impact!
          </p>
        </div>
        {imagePreloader.imagesPreloaded && (
          <img
            src="AllPages/events-lead.webp"
            alt="lead"
            className="hidden md:block w-80 h-auto animate-[animate-in_1s]"
          />
        )}
      </div>

      <div className="mt-4 mx-auto w-[80%]">
        <h1 className="text-[30px] text-[#11426B] font-bold mb-4">Upcoming Events</h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          <Suspense>
            <EventsGrid events={upcomingEvents} />
          </Suspense>
        </div>
      </div>

      <div className="mt-10 mx-auto w-[80%] mb-10">
        <h1 className="text-[30px] text-[#11426B] font-bold mb-4">Past Events</h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          <Suspense>
            <EventsGrid events={pastEvents} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Events;
