// import { useNavigate } from "react-router-dom";
import { Event } from "./EventsList";
import useImagePreloader from "../../Hooks/useImagePreload";
interface Props {
  event: Event;
}
export function EventCard({ event }: Props) {
  // const navigate = useNavigate();
  const ImagePreloader = useImagePreloader([event.image]);

  const isContain = event.imageFit === "contain";

  const imagePositionClass =
    event.imagePosition === "top"
      ? "object-top"
      : event.imagePosition === "bottom"
      ? "object-bottom"
      : "object-center"; // default center for cover mode

  return (
    <div
      className="flex flex-col justify-center items-center"
      onClick={() => {
        if (event.link) {
          window.location.href = event.link;
        }
      }}
    >
      <div className="relative min-h-[25rem] w-full bg-white shadow-2xl rounded-standard">
        <div className="mb-0 w-[90%] aspect-[1/1.2] m-6 pb-2 mx-auto relative rounded-[40px] overflow-hidden flex items-center justify-center">
          {ImagePreloader.imagesPreloaded ? (
            <img
              src={event.image}
              alt={event.name}
              className={
                isContain
                  ? // 🔹 CONTAIN MODE: keep full image, inner rounded corners
                    "max-w-full max-h-full rounded-[40px] animate-[animate-in_1s] object-contain"
                  : // 🔹 COVER MODE: full-bleed, crop, position control
                    `w-full h-full rounded-[40px] absolute top-0 left-0 z-1 animate-[animate-in_1s] object-cover ${imagePositionClass}`
              }
            />
          ) : (
            <div className="bg-lightBlue w-full h-full animate-pulse" />
          )}
        </div>
        <div className="p-5 pt-0 pb-5">
          {ImagePreloader.imagesPreloaded ? (
            <>
              <p className="font-bold text-[#003059]">{event.date}</p>
              <div className="py-3">
                <p className="italic">{event.name}</p>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                  <span className="font-semibold text-[#003059]">Where? </span>
                  {event.location == "" ? "N/A" : event.location}
                </p>
              </div>
              <div className="flex flex-row justify-center gap-2 mt-1">
                {event.tags.map((tag) => (
                  <div className="bg-[#A1C7E7] px-2 w-fit font-semibold text-[14px] rounded-[20px]">
                    {tag}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="w-20 bg-lightBlue h-6 animate-pulse rounded-standard"></p>
              <div className="py-3">
                <p className="w-40 bg-lightBlue h-6 animate-pulse rounded-standard my-1"></p>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap flex gap-x-2">
                  <span className="w-50 bg-lightBlue rounded-standard h-6"></span>
                </p>
              </div>
              <div className="flex flex-row justify-center gap-2 mt-1">
                {Array.from({ length: 2 }).map(() => (
                  <div className="bg-[#A1C7E7] h-6 aspect-[3/1] animate-pulse px-2  rounded-[20px]"></div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
