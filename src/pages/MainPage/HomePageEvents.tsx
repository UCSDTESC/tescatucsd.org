import useImagePreloader from "../../Hooks/useImagePreload";

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
    image: "/event-logos/stempad-talk-wi25.png",
    description:
      "Join us for an engaging talk series featuring Stempad as they share their journey as a startup. Learn how they got started, the challenges of building from the ground up, and how startup life compares to working in big tech or large companies.",
    link: "https://tapiocaexpress.com"
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
              <HomePageEventCards {...{ event, index }} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

interface event {
  link: string;
  image: string;
  name: string;
  description: string;
}

function HomePageEventCards({ event, index }: { event: event; index: number }) {
  const imagePreloader = useImagePreloader([event.image]);
  return (
    <>
      {imagePreloader.imagesPreloaded ? (
        <a
          className={`${
            index === 2 && "block lg:hidden xl:block"
          } flex-col justify-center items-center`}
          href={event.link}
        >
          <div className="relative h-fit w-full bg-white shadow-2xl rounded-[20px]">
            <img
              className="aspect-[1/1.1] w-full p-6 pb-3 mx-auto object-cover rounded-[40px] animate-[animate-in_1s]"
              src={event.image}
              alt={event.name}
            />
            <div className="w-full h-[12rem] overflow-hidden px-7">
              <p className="line-clamp-6 xl:text-[clamp(12px,0.9vw,20px)] md:text-[clamp(10px,2vw,16px)] text-[16px]">
                {event.description}
              </p>
            </div>
          </div>
        </a>
      ) : (
        <a
          className={`${
            index === 2 && "block lg:hidden xl:block"
          } flex-col justify-center items-center`}
          href={event.link}
        >
          <div className="relative h-fit w-full bg-white shadow-2xl rounded-[20px]">
            <div className="aspect-[1/1.1] w-full p-6 pb-3 mx-auto">
              <div className="bg-lightBlue animate-pulse w-full h-full rounded-[40px]"></div>
            </div>
            <div className="w-full h-[12rem] overflow-hidden px-7">
              <span className="line-clamp-6 flex flex-col gap-2 px-2">
                <p className="w-full xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
                <p className="w-full xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
                <p className="w-full xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
                <p className="w-full xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
                <p className="w-[80%] xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
              </span>
            </div>
          </div>
        </a>
      )}
    </>
  );
}

export default HomePageEvents;
