import "./events.css";
import {
  upcomingEventLogos,
  upcomingEventLinks,
  pastEventLogos,
  pastEventLinks
} from "./EventsList.ts";

const Events = () => {
  return (
    <>
      <img className="header-image" src="events-page-image.png" alt=""></img>
      <div className="divider d-flex justify-content-center align-items-center text-light">
        <p className="text-center">
          At TESC, we believe events are the best way to grow and <br /> enhance
          the engineering student body
        </p>
      </div>
      <div className="container mt-4">
        <span className="event-type">Upcoming Events</span>
        <div className="row mt-4">
          {upcomingEventLogos.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center mb-4"
            >
              <div className="container event-logo-container">
                <img
                  className="event-logo object-fit-cover rounded-5"
                  src={logo}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = upcomingEventLinks[index];
                  }}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <span className="event-type">Past Events</span>
        <div className="row mt-4">
          {pastEventLogos.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center mb-4"
            >
              <div className="container event-logo-container">
                <img
                  className="event-logo object-fit-cover rounded-5"
                  src={logo}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = pastEventLinks[index];
                  }}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
