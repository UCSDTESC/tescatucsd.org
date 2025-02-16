import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon";
import { pastEventLinks, pastEventLogos } from "./EventsList";

const pastEvents = pastEventLogos.map((logo, index) => [
  logo,
  pastEventLinks[index],
]);

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
              className="flex w-64 h-64 object-cover rounded-standard cursor-pointer"
              src={logo[0]}
              alt=""
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
