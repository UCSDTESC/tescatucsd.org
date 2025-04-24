import { useNavigate } from "react-router-dom";

const events = [
  {
    name: "TapEx fundraiser",
    image: "/event-logos/Tapioca.png",
    description:
      "Come out and support TESC by purchasing from Tapioca Express @ Price Center! Show this flyer at the register and 10% of the proceeds will go to TESC.",
    link: "https://tapiocaexpress.com",
  },
  {
    name: "Sandcastle competition",
    image: "/event-logos/SandcastleBonfire.jpg",
    description:
      "Join TESC for a Sand Castle Competition & Bonfire! Open to all Jacobs School of Engineering students, build your best sandcastle, earn points, and celebrate with S'mores by the bonfire. See you there!",
    link: "https://tapiocaexpress.com",
  },
  {
    name: "Talk with Stempad",
    image: "/event-logos/stempad-talk-wi25.png",
    description:
      "Join us for an engaging talk series featuring Stempad as they share their journey as a startup. Learn how they got started, the challenges of building from the ground up, and how startup life compares to working in big tech or large companies.",
    link: "https://tapiocaexpress.com",
  },
];

const HomePageEvents = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center mb-[10vh]">
        <div className="max-w-[70%] mt-5">
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

          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-center h-auto ml-auto mr-auto gap-10">
            {events.map((event, index) => (
              <div
                className={`${
                  index === 2 && "block md:hidden lg:block"
                } flex-col justify-center items-center`}
                onClick={() => {
                  if (event.link) {
                    navigate(event.link);
                  }
                }}
              >
                <div className="relative h-[27rem] max-w-80 w-full bg-white shadow-2xl rounded-[20px]">
                  <img
                    className="h-72 w-full p-6 pb-3 mx-auto object-cover rounded-[40px]"
                    src={event.image}
                    alt={event.name}
                  />
                  <div className="w-full h-full overflow-hidden px-7">
                    <p className="line-clamp-6 text-[14px]">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageEvents;
