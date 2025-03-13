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
          navigate(event.link);
        }
      }}
    >
      <div className="relative min-w-xs w-max bg-white shadow-2xl rounded-standard">
        <img
          className="h-auto max-h-72 w-full p-3 mx-auto object-cover rounded-standard"
          src={event.image}
          alt={event.name}
        />
        <div className="p-3 pt-0 pb-5">
          <p className="font-bold text-[#003059]">{event.date}</p>
          <div className="py-3">
            <p className="italic">{event.name}</p>
            <p>
              <span className="font-semibold text-[#003059]">Where? </span>
              {event.location}
            </p>
          </div>
          <div className="flex flex-row justify-center gap-2 mt-2">
            {event.tags.map((tag) => (
              <div className="bg-[#A1C7E7] px-2 w-fit font-semibold text-[14px] rounded-standard">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
