import { Suspense } from "react";
import HomePageEventCards from "./HomePageEventsCards";

const events = [
  {
    name: "Tapioca Express Fundraiser", 
    image: "/event-logos/tapex_fundraiser.jpg", 
    description: "Join us this Friday at Tapioca Express to help raise funds for TESC, ISPE, BMES, and EWB! This will be a great opportunity to connect with your fellow engineering students, so be sure to pull up!",
    link: "https://tapiocaexpress.com/"
  },
  {
    name: "Board Game Night", 
    image: "/event-logos/BoardGameNightPostWLogos.jpg", 
    description: "Take a break from midterms, get food at Tapex, and have fun playing Codenames, Secret Hitler, Poker, Exploding Kittens, and much more! 🍽️🎲",
    link: ""
  },
  {
    name: "Engineers on the Green", 
    image: "/event-logos/eotg-winter2026.jpg", 
    description: "Join us at Engineers on the Green, the annual engineering club fair where you can explore exciting projects, meet fellow innovators, and find your place in our vibrant engineering community. Discover clubs, get involved, and kickstart your journey into hands-on engineering!",
    link: "https://www.eotgatucsd.com "
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
