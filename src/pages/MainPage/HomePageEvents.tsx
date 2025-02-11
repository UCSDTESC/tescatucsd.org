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
            <p>{upcomingEventDescription[0]}</p>
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
            <p>{pastEventDescription[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageEvents;
