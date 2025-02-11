<<<<<<< HEAD
// import "./HomePageEvents.css";

const HomePageEvents = ({ images }: { images: string[] }) => {
  return (
    <div className="flex justify-center mb-[10vh]">
      <div className="max-w-[70%] mt-5">
        <h1 className="font-medium [line-height:1.2] text-[2vw]">Events</h1>
        <div>
          <h3>
            <a
              href="https://www.tescucsd.org/events"
              className="[text-decoration: none]"
              title="Events"
            >
              See all events →
            </a>
          </h3>
        </div>

        <div className="grid grid-cols-2 justify-center h-auto ml-auto mr-auto gap-5">
          <div className=" w-[100%] text-center p-5 aspect-square bg-lightBlue rounded-standard">
            <img
              src={images[0]}
              className="max-w-[90%] h-auto mb-[2%] mx-auto"
              alt="Upcoming Event"
              fetchPriority="high"
            />
            <div className="text-center">
              <h4>Upcoming Event</h4>
              <p>A description of the upcoming event.</p>
            </div>
          </div>

          <div className="w-[100%] text-center p-5 aspect-square bg-lightPink rounded-xl">
            <img
              src={images[1]}
              className="max-w-[90%] h-auto2 mx-auto"
              alt="Previous Event"
              fetchPriority="high"
            />
            <div className="text-center">
              <h4>Previous Event</h4>
              <p>A description of the previous event.</p>
            </div>
=======
import "./HomePageEvents.css";
import {
  upcomingEventLogos,
  upcomingEventLinks,
  upcomingEventDescription,
  pastEventLogos,
  pastEventLinks,
  pastEventDescription,
} from "../Events/EventsList.ts";

const HomePageEvents = () => {
  return (
    <div className="container mt-5">
      <h1>Events</h1>

      <div>
        <h3>
          <u>
            <a href="https://www.tescucsd.org/events" title="Events">
              See all events →
            </a>
          </u>
        </h3>
      </div>

      <div className="row justify-content-center h-auto gap-5">
        <div className="col center-block text-center rounded-5 position-relative p-5">
          <a href={upcomingEventLinks[0]}>
            <img
              src={upcomingEventLogos[0]}
              className="img-home-page-events"
              alt="Upcoming Event Image"
            />
          </a>
          <div className="text-center">
            <h4>Upcoming Event</h4>
            <p>{upcomingEventDescription}</p>
          </div>
        </div>

        <div className="col center-block text-center rounded-5 position-relative p-5">
          <a href={pastEventLinks[0]}>
            <img
              src={pastEventLogos[0]}
              className="img-home-page-events"
              alt="Previous Event Image"
            />
          </a>
          <div className="text-center">
            <h4>Previous Event</h4>
            <p>{pastEventDescription}</p>
>>>>>>> 638f2fb6301f03e74b619ffb571a1f070bd235b3
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageEvents;
