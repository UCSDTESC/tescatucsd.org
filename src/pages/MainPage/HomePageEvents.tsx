import { Suspense } from "react";
import HomePageEventCards from "./HomePageEventsCards";

const events = [
  {
    name: "Engineers on the Green", 
    image: "/event-logos/Fall-2025-EOTG.png", 
    description: "Join us at Engineers on the Green, the annual engineering club fair where you can explore exciting projects, meet fellow innovators, and find your place in our vibrant engineering community. Discover clubs, get involved, and kickstart your journey into hands-on engineering!",
    link: "https://www.eotgatucsd.com "
  },
  {
    name: "Intro Night", 
    image: "/event-logos/TESC_Intro_Night.png", 
    description: "Come join us at our general body meeting to learn about our future plans!",
    link: ""
  },
  {
    name: "Engineer's Formal Prom",
    image: "/event-logos/Engineering_Prom_1.jpg",
    description:
      "Get ready to dress to impress because Premiere Night: An Engineer’s Formal is officially happening — and tickets are now available! ✨ Don’t miss your chance to walk the red carpet and enjoy a Hollywood-inspired night!",
    link: "https://www.zeffy.com/en-US/ticketing/2025-aerospace-prom",
  }
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
                href="https://www.tescucsd.org/events"
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
