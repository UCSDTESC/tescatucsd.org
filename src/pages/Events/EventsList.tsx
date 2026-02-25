import { useEffect, useState } from "react";
import supabase from "./supabase";

export interface Event {
  id?: string | number;
  name: string;
  date: string;
  location: string;
  tags: string[];
  image: string;
  link: string;
}

export function useSplitEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const StartOfLink =  'https://portal.tescatucsd.org/bulletin/';

  useEffect(() => {
    console.log("useSplitEvents useEffect running");
    const fetchEvents = async () => {
      console.log("Fetching events from Supabase...");
      const { data, error } = await supabase
        .from("events")
        .select("id,name:title,date:start_date,location:location_str,tags,image:poster")
        .eq("deleted", false);
      console.log("Supabase events data:", data);
      
      if (data) {
        const normalized: Event[] = data.map(row => ({
          id: row.id,
          name: row.name,
          date: row.date,
          location: row.location,
          tags: Array.isArray(row.tags) ? row.tags : [],
          image: row.image,
          link: StartOfLink + row.id
        }));

        const sorted = [...normalized].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        const now = new Date();

        setUpcomingEvents(sorted.filter(e => new Date(e.date) >= now));
        setPastEvents(sorted.filter(e => new Date(e.date) < now));
      } else {
        console.error("Supabase error:", error);
      }
    };
    fetchEvents();
  }, []);

  return { upcomingEvents, pastEvents };
}