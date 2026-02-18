// import { useNavigate } from "react-router-dom";
import { Event } from "./EventsList";
import useImagePreloader from "../../Hooks/useImagePreload";
interface Props {
  event: Event;
}
export function EventCard({ event }: Props) {
  // const navigate = useNavigate();
  const ImagePreloader = useImagePreloader([event.image]);
  /** Short month names for DateParser. */
  const MONTH_NAMES = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  /** Parses and displays date/time as stored (no timezone conversion). Expects YYYY-MM-DDTHH:mm or similar. Used in: DataTable getCellValue, event display. */
  const DateParser = (date: string) => {
    if (!date || date === "N/A") return date;
    const match = date.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?/);
    if (!match) return date;
    const [, year, month, day, hour, min, sec] = match;
    const monthNum = parseInt(month, 10) - 1;
    const hourNum = parseInt(hour, 10);
    const ampm = hourNum >= 12 ? "PM" : "AM";
    const hour12 = hourNum % 12 || 12;
    const timeStr = sec
      ? `${hour12}:${min}:${sec} ${ampm}`
      : `${hour12}:${min} ${ampm}`;
    return `${MONTH_NAMES[monthNum]} ${parseInt(day, 10)}, ${year}, ${timeStr}`;
  };

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
        <div className="mb-0 w-[90%] aspect-[1/1.2] m-6 pb-2 mx-auto object-contain rounded-[40px] relative">
          {ImagePreloader.imagesPreloaded && (
            <img
              className=" w-full h-full object-cover rounded-[40px] absolute top-0 left-0 z-1 animate-[animate-in_1s]"
              src={event.image}
              alt={event.name}
            />
          )}
          <div className="bg-lightBlue w-full h-full rounded-[40px] animate-pulse"></div>
        </div>
        <div className="p-5 pt-0 pb-5">
          {ImagePreloader.imagesPreloaded ? (
            <>
              <p className="font-bold text-[#003059]">{DateParser(event.date)}</p>
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
