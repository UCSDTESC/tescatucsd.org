// import "./HomePageEvents.css";
import decafEventWi25 from "/event-logos/decaf-event-wi25.jpg";
import eotgEventWi25 from "/event-logos/eotg-event-wi25.jpg";
const HomePageEvents = () => {
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
              src={decafEventWi25}
              className="max-w-[90%] h-auto mb-[2%] mx-auto"
              alt="Upcoming Event"
            />
            <div className="text-center">
              <h4>Upcoming Event</h4>
              <p>A description of the upcoming event.</p>
            </div>
          </div>

          <div className="w-[100%] text-center p-5 aspect-square bg-lightPink rounded-standard">
            <img
              src={eotgEventWi25}
              className="max-w-[90%] h-auto2 mx-auto"
              alt="Previous Event"
            />
            <div className="text-center">
              <h4>Previous Event</h4>
              <p>A description of the previous event.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageEvents;
