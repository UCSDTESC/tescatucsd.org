import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon";

const pastEvents = [
  ["/event-logos/eotg-event-wi25.jpg"],
  ["/event-logos/decaf-event-fa24.jpg", "https://tescucsd.org/decaf-fa24"],
  ["/event-logos/eotg-event-fa24.jpg", "https://tescucsd.org/eotg-fa24"],
  ["/event-logos/decaf-event-fa23.svg", "https://decafucsd.com"],
  ["/event-logos/sd-hacks-event-wi21.png"],
  ["/event-logos/decaf-event-wi21.svg", "https://decafucsd.com"],
  ["/event-logos/eotg-event-wi21.svg", "https://www.eotgucsd.com"],
  ["/event-logos/baking-event-fa20.png"],
  ["/event-logos/matcha-event-fa20.svg"],
  ["/event-logos/destress-event-fa20.svg"],
  ["/event-logos/eotg-event-fa20.svg", "https://www.eotgucsd.com"]
];
export default function PastEventsGrid() {
  const ImagePreloader = useImagePreloader(pastEvents.map((item) => item[0]));
  return (
    <>
      {ImagePreloader.imagesPreloaded ? (
        pastEvents.map((logo, index) => (
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
        ))
      ) : (
        <LoadingIcon />
      )}
    </>
  );
}
