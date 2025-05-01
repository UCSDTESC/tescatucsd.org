import { useNavigate } from "react-router-dom";
import { Event } from "./EventsList";
import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon";
interface Props {
  event: Event;
}
export function EventCard({ event }: Props) {
  const navigate = useNavigate();
  const ImagePreloader = useImagePreloader([event.image]);
  return (
    <>
      {ImagePreloader.imagesPreloaded ? (
        <div
          className="flex flex-col justify-center items-center"
          onClick={() => {
            if (event.link) {
              navigate(event.link);
            }
          }}
        >
          <div className="relative min-h-[25rem] w-full bg-white shadow-2xl rounded-standard">
            {/* <img
              className=" w-full aspect-[1/1.1] p-5 pb-2 mx-auto object-cover rounded-[40px]"
              src={event.image}
              alt={event.name}
            /> */}
            <div className=" w-[90%] aspect-[1/1.1] m-6 pb-2 mx-auto object-cover rounded-[40px] relative">
              <img
                className=" w-full aspect-[1/1.1] object-cover rounded-[40px] absolute top-0 left-0"
                src={event.image}
                alt={event.name}
              />
              <div className="bg-lightBlue w-full h-full rounded-[40px] "></div>
            </div>
            <div className="p-5 pt-0 pb-5">
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
            </div>
          </div>
        </div>
      ) : (
        <LoadingIcon />
      )}
    </>
  );
}
