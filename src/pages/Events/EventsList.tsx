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
  orgs: string;
}

export function useSplitEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const StartOfLink = "https://portal.tescatucsd.org/bulletin/";

  useEffect(() => {
    console.log("useSplitEvents useEffect running");
    const fetchEvents = async () => {
      console.log("Fetching events from Supabase...");
      const { data, error } = await supabase
        .from("events")
        .select(
          "id,name:title,date:start_date,location:location_str,tags,image:poster, orgs!inner(name)",
        )
        .eq("deleted", false);
      console.log("Supabase events data:", data);

      if (data) {
        console.log(data);
        const normalized: Event[] = data.map((row) => ({
          id: row.id,
          name: row.name,
          date: row.date,
          location: row.location,
          tags: Array.isArray(row.tags) ? row.tags : [],
          image: row.image,
          link: StartOfLink + row.id,
          orgs: Array.isArray(row.orgs)
            ? row.orgs.map((o) => o.name).join(", ")
            : (row.orgs as { name: string })?.name ?? "",
        }));

        const sorted = [...normalized].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        const now = new Date();

        setUpcomingEvents(sorted.filter((e) => new Date(e.date) >= now));
        setPastEvents(sorted.filter((e) => new Date(e.date) < now));
      } else {
        console.error("Supabase error:", error);
      }
    };
    fetchEvents();
  }, []);

  return {
    upcomingEvents: upcomingEvents.filter((e) => e.orgs == "TESC"),
    pastEvents: pastEvents.filter((e) => e.orgs == "TESC"),
  };
}
