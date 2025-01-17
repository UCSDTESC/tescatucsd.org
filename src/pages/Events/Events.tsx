import "./events.css";
import eventsPageImage from "/AllPages/events-page-image.png";
const Events = () => {
  const upcomingEventLogos = ["/event-logos/decaf-event-wi25.jpg"];
  const upcomingEventLinks = ["https://tescucsd.org/eotg"];
  const pastEventLogos = [
    "/event-logos/eotg-event-wi25.jpg",
    "/event-logos/decaf-event-fa24.jpg",
    "/event-logos/eotg-event-fa24.jpg",
    "/event-logos/decaf-event-fa23.svg",
    "/event-logos/sd-hacks-event-wi21.png",
    "/event-logos/decaf-event-wi21.svg",
    "/event-logos/eotg-event-wi21.svg",
    "/event-logos/baking-event-fa20.png",
    "/event-logos/matcha-event-fa20.svg",
    "/event-logos/destress-event-fa20.svg",
    "/event-logos/eotg-event-fa20.svg"
  ];
  const pastEventLinks = [
    "https://tescucsd.org/decaf-fa24",
    "https://tescucsd.org/eotg-fa24",
    "https://decafucsd.com",
    "https://www.eotgucsd.com",
    "https://decafucsd.com",
    "https://www.eotgucsd.com",
    "https://decafucsd.com",
    "https://www.eotgucsd.com",
    "https://decafucsd.com",
    "https://www.eotgucsd.com"
  ];
  return (
    <>
      <img className="header-image" src={eventsPageImage} alt=""></img>
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
