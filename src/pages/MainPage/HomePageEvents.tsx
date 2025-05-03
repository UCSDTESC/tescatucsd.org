import { useNavigate } from "react-router-dom";

const events = [
  {
    name: "Headshot Day & Mixer",
    image: "/event-logos/headshot&mixer.jpg",
    description:
      "Need a fresh headshot? 📸 Love a good mixer? We’ve got you covered! TESC is excited to present: Headshots & Mixer Event! Come strike a pose, mingle, and make some memories! Scan the QR code to RSVP!",
    link: "tinyurl.com/headshot-mixer",
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
    link: "tinyurl.com/euv-lithography",
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
