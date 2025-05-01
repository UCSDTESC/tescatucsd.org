import { EventCard } from "./EventCard";
import { Event } from "./EventsList";

interface Props {
  events: Event[];
}
export default function EventsGrid({ events }: Props) {
  return (
    <>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </>
  );
}
