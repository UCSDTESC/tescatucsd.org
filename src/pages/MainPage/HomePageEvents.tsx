import "./HomePageEvents.css";
import decafEventWi25 from "/event-logos/decaf-event-wi25.jpg"
import eotgEventWi25 from "/event-logos/eotg-event-wi25.jpg"
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
          <img
            src={decafEventWi25}
            className="img-home-page-events"
            alt="Upcoming Event"
          />
          <div className="text-center">
            <h4>Upcoming Event</h4>
            <p>A description of the upcoming event.</p>
          </div>
        </div>

        <div className="col center-block text-center rounded-5 position-relative p-5">
          <img
            src={eotgEventWi25}
            className="img-home-page-events"
            alt="Previous Event"
          />
          <div className="text-center">
            <h4>Previous Event</h4>
            <p>A description of the previous event.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageEvents;
