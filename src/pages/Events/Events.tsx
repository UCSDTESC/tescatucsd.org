// import "./events.css";
import eventsPageImage from "/AllPages/events-page-image.png";
import Divider from "../MainPage/Divider";
import upcomingEvents from "./UpcomingEvents";
import pastEvents from "./PastEvents";
const Events = () => {
  return (
    <>
      <img
        className="w-full h-[50vh] object-cover"
        src={eventsPageImage}
        alt=""
      ></img>
      <Divider>
        <p>
          At TESC, we believe events are the best way to grow and <br /> enhance
          the engineering student body
        </p>
      </Divider>

      <div className=" mt-4 mx-auto w-[70%]">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-4 gap-5">
          {upcomingEvents.map((data, index) => (
            <div key={index} className="">
              <div className="">
                <img
                  className="h-full w-full object-cover rounded-standard overflow-clip"
                  src={data[0]}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = data[1];
                  }}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-4 mx-auto w-[70%]">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Past Events
        </h1>
        <div className="grid grid-cols-4 t gap-5">
          {pastEvents.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center mb-4 flex-nowrap"
            >
              <img
                className="flex min-h-full min-w-full object-cover rounded-standard"
                src={logo[0]}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (logo[1]) {
                    window.location.href = logo[1];
                  }
                }}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
