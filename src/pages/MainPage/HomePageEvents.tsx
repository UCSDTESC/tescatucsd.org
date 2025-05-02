import { lazy, Suspense } from "react";
const HomePageEventCards = lazy(() => {
  return import("./HomePageEventsCards");
});

const HomePageEvents = () => {
  const events = [
    {
      name: "TapEx fundraiser",
      image: "/event-logos/Tapioca.png",
      description:
        "Come out and support TESC by purchasing from Tapioca Express @ Price Center! Show this flyer at the register and 10% of the proceeds will go to TESC.",
      link: "https://tapiocaexpress.com"
    },
    {
      name: "Sandcastle competition",
      image: "/event-logos/SandcastleBonfire.jpg",
      description:
        "Join TESC for a Sand Castle Competition & Bonfire! Open to all Jacobs School of Engineering students, build your best sandcastle, earn points, and celebrate with S'mores by the bonfire. See you there!",
      link: "https://tapiocaexpress.com"
    },
    {
      name: "Talk with Stempad",
      image: "/event-logos/stempad-talk-wi25.webp",
      description:
        "Join us for an engaging talk series featuring Stempad as they share their journey as a startup. Learn how they got started, the challenges of building from the ground up, and how startup life compares to working in big tech or large companies.",
      link: "https://tapiocaexpress.com"
    }
  ];
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
