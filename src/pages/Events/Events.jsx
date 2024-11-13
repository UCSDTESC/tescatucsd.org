import React from "react";
import "./events.css";

const Events = () => {
  const upcomingEventLogos = [
    "/event-logos/decaf-event-fa23.svg",
    "/event-logos/decaf-event-fa23.svg",
  ];
  const pastEventLogos = [
    "/event-logos/decaf-event-fa23.svg",
    "/event-logos/sd-hacks-event-wi21.png",
    "/event-logos/decaf-event-wi21.svg",
    "/event-logos/eotg-event-wi21.svg",
    "/event-logos/baking-event-fa20.png",
    "/event-logos/matcha-event-fa20.svg",
    "/event-logos/destress-event-fa20.svg",
    "/event-logos/eotg-event-fa20.svg",
  ];

  return (
    <>
      <div className="container mb-5 mt-4">
        <span className="event-type">Upcoming Events</span>
        <div className="row g-5">
          {upcomingEventLogos.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center"
            >
              <img className="event-logo img-fluid" src={logo} alt=""></img>
            </div>
          ))}
        </div>
      </div>

      <div className="container mb-5 mt-4">
        <span className="event-type">Past Events</span>
        <div className="row g-5">
          {pastEventLogos.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center"
            >
              <img className="event-logo img-fluid" src={logo} alt=""></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
