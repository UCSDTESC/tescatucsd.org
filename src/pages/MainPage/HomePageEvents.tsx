import { Suspense } from "react";
import HomePageEventCards from "./HomePageEventsCards";

const events = [
  {
    name: "Headshot Day & Mixer",
    image: "/event-logos/headshot&mixer.jpg",
    description:
      "Need a fresh headshot? 📸 Love a good mixer? We’ve got you covered! TESC is excited to present: Headshots & Mixer Event! Come strike a pose, mingle, and make some memories! Scan the QR code to RSVP!",
    link: "https://tinyurl.com/headshot-mixer",
  },
  {
    name: "Engineer's Formal Prom",
    image: "/event-logos/Engineering_Prom_1.jpg",
    description:
      "Get ready to dress to impress because Premiere Night: An Engineer’s Formal is officially happening — and tickets are now available! ✨ Don’t miss your chance to walk the red carpet and enjoy a Hollywood-inspired night!",
    link: "https://www.zeffy.com/en-US/ticketing/2025-aerospace-prom",
  },
  {
    name: "ASML Tech Talk",
    image: "/event-logos/asml-tech-talk.png",
    description:
      "Want to get the inside scoop on cutting-edge semiconductor innovations? TESC is bringing you an exciting Tech Talk with Dr. Andrew LaForge, Head of EUV Source Functions at ASML!",
    link: "https://tinyurl.com/euv-lithography",
  },
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
