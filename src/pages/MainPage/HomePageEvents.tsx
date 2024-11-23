import "./HomePageEvents.css";

const HomePageEvents = () => {
  const EventsSection = (
    <div class="container">
      <h1>Events</h1>

      <div>
        <h3>
          {" "}
          <a href="https://google.com" title="Events">
            {" "}
            See all events →{" "}
          </a>{" "}
        </h3>
      </div>

      <div class="row justify-content-center">
        <div class="col-xs-6 col-md-4 center-block text-center">
          <img
            src="upcoming-event.jpg"
            class="img-home-page-events"
            alt="Upcoming Event"
          />
          <h4>Upcoming Event</h4>
          <p>A description of the upcoming event.</p>
        </div>

        <div class="col-xs-6 col-md-4 center-block text-center">
          <img
            src="previous-event.jpg"
            class="img-home-page-events"
            alt="Previous Event"
          />
          <h4>Previous Event</h4>
          <p>A description of the previous event.</p>
        </div>
      </div>
    </div>
  );

  return EventsSection;
};

export default HomePageEvents;
