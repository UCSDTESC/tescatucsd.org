import React from "react";

const HomePageEvents = () => {
  const EventsSection = (
    <div>
      <h1>Events</h1> 

      <div>
      <h2> <a href = "google.com" title = "Events!"> See all events! → </a> </h2>


      </div>
      

      <div class="column">
        <img src="upcomingEvent.jpg" alt="Upcoming Event"/>
        <h3>Upcoming Event</h3>
        <p>A description of the upcoming event.</p>
      </div>

      <div class="column">
      <img src="previousEvent.jpg" alt="Previous Event"/>
        <h3>Previous Event</h3>
        <p>A description of the previous event.</p>
      </div>

    </div>

  );

  return EventsSection;
};

export default HomePageEvents;