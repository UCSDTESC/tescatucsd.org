// import "./HomePageEvents.css";
import { Helmet } from "react-helmet";
import {
  upcomingEventLogos,
  upcomingEventLinks,
  upcomingEventDescription,
  pastEventLogos,
  pastEventLinks,
  pastEventDescription
} from "../Events/EventsList.ts";

const HomePageEvents = () => {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          href={upcomingEventLogos[0]}
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href={pastEventLogos[0]}
          as="image"
          fetchPriority="high"
        />
      </Helmet>
      <div className="flex justify-center mb-[10vh]">
        <div className="max-w-[70%] mt-5">
          <h1 className="font-medium [line-height:1.2] text-[2.5vw]">Events</h1>
          <div>
            <h3>
              <a
                href="https://www.tescucsd.org/events"
                className=" underline font-medium text-[1.5vw]"
                title="Events"
              >
                See all events →
              </a>
            </h3>
          </div>

          <div className="grid grid-cols-2 justify-center h-auto ml-auto mr-auto gap-10">
            <div className=" w-full text-center p-5  bg-lightBlue rounded-standard py-10">
              <a href={upcomingEventLinks[0]} className="aspect-square">
                <img
                  src={upcomingEventLogos[0]}
                  className="max-w-[90%] aspect-square object-cover h-auto mb-[2%] mx-auto"
                  alt="Upcoming Event"
                  fetchPriority="high"
                />
              </a>
              <div className="text-center p-5 ">
                <h4 className=" text-[1.3vw] mb-2 font-medium ">
                  Upcoming Event
                </h4>
                <p>{upcomingEventDescription[0]}</p>
              </div>
            </div>

            <div className="w-full text-center p-5  bg-lightPink rounded-standard py-10">
              <a href={pastEventLinks[0]} className="aspect-square">
                <img
                  src={pastEventLogos[0]}
                  className="max-w-[90%] h-auto mb-[2%] mx-auto"
                  alt="Previous Event"
                  fetchPriority="high"
                />
              </a>
              <div className="text-center p-5 ">
                <h4 className=" text-[1.3vw] mb-2 font-medium ">
                  Previous Event
                </h4>
                <p>{pastEventDescription[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageEvents;
