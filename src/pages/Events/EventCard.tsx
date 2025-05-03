import { useNavigate } from "react-router-dom";
import { Event } from "./EventsList";
interface Props {
  event: Event;
}
export function EventCard({ event }: Props) {
  const navigate = useNavigate();
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
        <img
          className="h-64 w-full p-5 pb-2 mx-auto object-cover rounded-[40px]"
          src={event.image}
          alt={event.name}
        />
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
  );
}
