 //export const upcomingEventLogos = [""];
//export const upcomingEventLinks = [""];
// export const upcomingEventDescription = [""];

// export const pastEventLogos = [
//   "/event-logos/Engineering_Prom_1.jpg",
//   "/event-logos/asml.jpg",
//   "/event-logos/field_day_2.png",
//   "/event-logos/Tapioca.png",
//   "/event-logos/SandcastleBonfire.jpg",
//   "/event-logos/stempad-talk-wi25.webp",
//   "/event-logos/decaf-event-wi25.png",
//   "/event-logos/eotg-event-wi25.jpg",
//   "/event-logos/decaf-event-fa24.jpg",
//   "/event-logos/eotg-event-fa24.jpg",
//   "/event-logos/decaf-event-fa23.svg",
//   "/event-logos/sd-hacks-event-wi21.png",
//   "/event-logos/decaf-event-wi21.svg",
//   "/event-logos/eotg-event-wi21.svg",
//   "/event-logos/baking-event-fa20.png",
//   "/event-logos/matcha-event-fa20.svg",
//   "/event-logos/destress-event-fa20.svg",
//   "/event-logos/eotg-event-fa20.svg",
// ];

// export const pastEventLinks = [
//   "https://www.zeffy.com/en-US/ticketing/2025-aerospace-prom",
//   "https://docs.google.com/forms/d/e/1FAIpQLScuAw4QWprCEHYHNvPYP8WyVq-MAL1og0M48x2bXnw2Swm59A/viewform",
//   "https://tinyurl.com/sp25-tesc-olympics",
//   "https://tapiocaexpress.com/",
//   "https://docs.google.com/forms/d/e/1FAIpQLSfYP_vwKSgp0AF6B310_VyWz5hGEI3Hg6UfZetKdhE_THPiNA/viewform",
//   "http://tinyurl.com/stempad-rsvp",
//   "https://decafucsd.com",
//   "https://tescatucsd.org/eotg",
//   "https://decafucsd.com",
//   "https://www.eotgucsd.com",
//   "https://decafucsd.com",
//   "https://www.eotgucsd.com",
//   "https://decafucsd.com",
//   "https://www.eotgucsd.com",
//   "https://decafucsd.com",
//   "https://www.eotgucsd.com",
//   "https://decafucsd.com",
//   "https://www.eotgucsd.com",
// ];

// export const pastEventDescription = [
//   "Get ready to dress to impress because Premiere Night: An Engineer’s Formal is officially happening — and tickets are now available! Two tickets maximum per form. Non-UCSD students are allowed as +1s. Volunteer & Save! Want to help out and get a $5 discount on your ticket? Volunteer for just one hour during the event to receive a promo code. We’re looking for awesome volunteers to help with the event. Please fill out this Volunteer Interest Form: https://forms.gle/CqZNPyqPNyejQMEZ8. For any questions, reach out to Anika Agarwal at ana012@ucsd.edu!✨ Whether you come solo, with friends, or finally ask out that engineering crush — don’t miss your chance to walk the red carpet and enjoy a Hollywood-inspired night with your fellow engineers! Note: Our ticketing website, Zeffy, has an optional donation to their site at checkout that can be set to $0 by clicking on 'Other.' The final amount at your checkout should be exactly $15 (1 ticket) or $30 (2 tickets) unless you opt into donating to Zeffy. We can’t wait to see you there! – The Premiere Night: An Engineer’s Formal Team",
//   "Join us for an exciting tech talk about the EUV Lithography process hosted by ASML at the Qualcomm Conference Center - JSOE 1st Floor on Fri., April 25, 2025, from 10:00 AM to 12:00 PM. In addition to the technical discussion, ASML will also share valuable information about their upcoming internship and co-op opportunities—a great chance for students interested in cutting-edge semiconductor technology so please be sure to bring your resumes (soft copy)!",
//   "Hello participants! Ready to put your skills to the test and show if you can take on the competition? Sign up now for the TESC Olympics event, starting on April 19th from 10am to 2pm on the Matthews Quad. We'll have a variety of activities for all to enjoy, so please RSVP to indicate which activities you will participate in. Winners of the games will be awarded trophies as well! We'll be providing snacks and lunch, so if you have any dietary restrictions, please list them below. Hope to see you there! And may the odds be in your favor....",
//   "Come out and support the Triton Engineering Student Council (TESC) by purchasing from Tapioca Express! Show this flyer at the register and 10% of the proceeds will go to TESC.",
//   "Come out and support the Triton Engineering Student Council (TESC) by purchasing from Tapioca Express! Show this flyer at the register and 10% of the proceeds will go to TESC.",
//   "Triton Engineering Student Council is inviting you to participate in our Sand Castle Competition and join us for a warm and cozy bonfire with some smores' on March 2nd, 2025! We are opening this event to all students within the Jacobs School of Engineering community! For this Sand Castle Competition, the best sand castles will be given points. We will be mostly judging you on your team spirit, quality of the sand castle, and engineering aspects when building it! Afterwards, we will be celebrating the winners with some smore's and a bonfire!!",
//   "On Friday, February 7th, from 1:00-3:00 PM, TESC will be hosting a talk with Stempad at the QCC in Jacob's Hall. Stempad is a digital scientific note editor startup and they will be talking about how to build a startup and the difference between a startup and a large company.",
//   "DECaF 2025, a student-run career fair organized by the Triton Engineering Student Council, aims to connect talented engineering students with leading recruiters like you. With an annual attendance of 1,000+ students from various engineering majors, this event presents a unique opportunity to meet and engage with potential future employees. Participating companies will have direct access to a diverse pool of motivated and skilled students and a comprehensive resume database.",
// ];

export interface Event {
  id?: string | number;
  name: string;
  date: string;
  location: string;
  tags: string[];
  image: string;
  link: string;
}

// export const upcomingEvents: Event[] = [
//   {
//     name: "DeCaF Winter 2026",
//     date: "January 20th, 2026",
//     location: "Price Center West Ballroom A",
//     tags: ["Career"],
//     image: "/event-logos/decaf-event-wi26.png",
//     link: "https://decafatucsd.com/",
//   },
// ];
// export const pastEvents: Event[] = [
//   {
//     name: "Tapioca Express Fundraiser",
//     date: "November 21st, 2025",
//     location: "Tapioca Express, Price Center",
//     tags: ["Fundraiser", "Finance"],
//     image: "/event-logos/tapex_fundraiser.jpg",
//     link: "https://tapiocaexpress.com/",
//   },
//   {
//     name: "Board Game Night",
//     date: "November 21st, 2025",
//     location: "Study Rooms, Price Center",
//     tags: ["Social"],
//     image: "/event-logos/BoardGameNightPostWLogos.jpg",
//     link: "",
//   },
//   {
//     name: "Engineers on the Green",
//     date: "January 8th, 2026",
//     location: "Warren Mall",
//     tags: ["Social", "Career"],
//     image: "/event-logos/eotg-winter2026.jpg",
//     link: "https://www.eotgatucsd.com ",
//   },
//   {
//     name: "DECaF Fall 2025",
//     date: "October 14th, 2025",
//     location: "Qualcomm Room, JSOE",
//     tags: ["Career"],
//     image: "/event-logos/DECaF_FA25.jpg",
//     link: "https://decafucsd.com",
//   },
//   {
//     name: "Sunset & S'mores Bonfire Night",
//     date: "October 3rd, 2025",
//     location: "La Jolla Shores",
//     tags: ["Social"],
//     image: "/event-logos/Sunset__Smores_Bonfire.png",
//     link: "",
//   },
//   {
//     name: "Intro Night / GBM",
//     date: "October 1st, 2025",
//     location: "Qualcomm Conference Center",
//     tags: ["Social", "GBM"],
//     image: "/event-logos/TESC_Intro_Night.png",
//     link: "",
//   },
//   {
//     name: "Engineers on the Green",
//     date: "September 30th, 2025",
//     location: "Warren Mall",
//     tags: ["Social", "Career"],
//     image: "/event-logos/Fall-2025-EOTG.png",
//     link: "https://www.eotgatucsd.com ",
//   },
//   {
//     name: "Engineer's Formal Prom",
//     date: "May 18th, 2025",
//     location: "Stage Room",
//     tags: ["Social"],
//     image: "/event-logos/Engineering_Prom_1.jpg",
//     link: "https://www.zeffy.com/en-US/ticketing/2025-aerospace-prom",
//   },
//   {
//     name: "Headshot Day & Mixer",
//     date: "May 5th, 2025",
//     location: "Bear Room, Price Center",
//     tags: ["Social", "Career"],
//     image: "/event-logos/headshot&mixer.jpg",
//     link: "https://tinyurl.com/headshot-mixer",
//   },
//   {
//     name: "ASML Tech Talk",
//     date: "April 25th, 2025",
//     location: "Qualcomm Conference Center - JSOE 1st Floor",
//     tags: ["Career"],
//     image: "/event-logos/asml-tech-talk.png",
//     link: "https://tinyurl.com/euv-lithography",
//   },
//   {
//     name: "TESC Olympics",
//     date: "April 19th, 2025",
//     location: "Matthew's Quad",
//     tags: ["Social"],
//     image: "/event-logos/field_day_2.jpg",
//     link: "https://tinyurl.com/sp25-tesc-olympics",
//   },
//   {
//     name: "Tapioca Express Fundraiser",
//     date: "March 6th, 2025",
//     location: "Tapioca Express, Price Center",
//     tags: ["Fundraiser", "Finance"],
//     image: "/event-logos/Tapioca.png",
//     link: "https://tapiocaexpress.com/",
//   },
//   {
//     name: "Sandcastle Competition",
//     date: "March 2nd, 2025",
//     location: "La Jolla Shores",
//     tags: ["Social"],
//     image: "/event-logos/SandcastleBonfire.jpg",
//     link: "https://docs.google.com/forms/d/e/1FAIpQLSfYP_vwKSgp0AF6B310_VyWz5hGEI3Hg6UfZetKdhE_THPiNA/viewform",
//   },
//   {
//     name: "Talk with Stempad",
//     date: "February 7th, 2025",
//     location: "Qualcomm Room, JSOE",
//     tags: ["Career"],
//     image: "/event-logos/stempad-talk-wi25.webp",
//     link: "http://tinyurl.com/stempad-rsvp",
//   },
//   {
//     name: "DECaF",
//     date: "January 21st, 2025",
//     location: "Qualcomm Room, JSOE",
//     tags: ["Career"],
//     image: "/event-logos/decaf-event-wi25.png",
//     link: "https://decafucsd.com",
//   },
//   {
//     name: "Engineers on the Green",
//     date: "January 7th, 2025",
//     location: "Warren Mall",
//     tags: [],
//     image: "/event-logos/eotg-event-wi25.jpg",
//     link: "https://tescatucsd.org/eotg",
//   },
//   {
//     name: "DECaF",
//     date: "October 9th, 2024",
//     location: "Qualcomm Room, JSOE",
//     tags: ["Career"],
//     image: "/event-logos/decaf-event-fa24.jpg",
//     link: "https://decafucsd.com",
//   },
//   {
//     name: "Engineers on the Green",
//     date: "October 1st, 2024",
//     location: "Warren Mall",
//     tags: [],
//     image: "/event-logos/eotg-event-fa24.jpg",
//     link: "https://tescatucsd.org/eotg",
//   },
//   {
//     name: "DECaF",
//     date: "November 6th, 2023",
//     location: "",
//     tags: ["Career"],
//     image: "/event-logos/decaf-event-fa23.svg",
//     link: "https://decafucsd.com",
//   },
//   {
//     name: "SD Hacks",
//     date: "February 19th-21st, 2021",
//     location: "",
//     tags: ["Hackathon"],
//     image: "/event-logos/sd-hacks-event-wi21.png",
//     link: "",
//   },
//   {
//     name: "DECaF",
//     date: "January 19th-21st, 2021",
//     location: "",
//     tags: ["Career"],
//     image: "/event-logos/decaf-event-wi21.svg",
//     link: "https://decafucsd.com",
//   },
//   {
//     name: "Engineers on the Green",
//     date: "January 11th-12th, 2021",
//     location: "Warren Mall",
//     tags: [],
//     image: "/event-logos/eotg-event-wi21.svg",
//     link: "https://tescatucsd.org/eotg",
//   },
//   {
//     name: "Baking Event",
//     date: "December 4th, 2020",
//     location: "",
//     tags: ["Social"],
//     image: "/event-logos/baking-event-fa20.png",
//     link: "",
//   },
//   {
//     name: "Matcha",
//     date: "November 16th-20th, 2020",
//     location: "",
//     tags: [],
//     image: "/event-logos/matcha-event-fa20.svg",
//     link: "",
//   },
//   {
//     name: "Destress with TESC",
//     date: "November 11th, 2020",
//     location: "",
//     tags: ["Social"],
//     image: "/event-logos/destress-event-fa20.svg",
//     link: "",
//   },
//   {
//     name: "Engineers on the Green",
//     date: "October 5th-9th, 2020",
//     location: "Warren Mall",
//     tags: [],
//     image: "/event-logos/eotg-event-fa20.svg",
//     link: "https://tescatucsd.org/eotg",
//   },
// ];

// Example static events array for export

export interface Event {
  id?: string | number;
  name: string;
  date: string;
  location: string;
  tags: string[];
  image: string;
  link: string;
}

import { useEffect, useState } from "react";
import supabase from "./supabase";

export function useSplitEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

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
        const now = new Date();
        const upcoming = data.filter(event => new Date(event.date) >= now);
        const past = data.filter(event => new Date(event.date) < now);
        console.log("Upcoming events:", upcoming);
        console.log("Past events:", past);
        setUpcomingEvents(upcoming as Event[]);
        setPastEvents(past as Event[]);
      } else {
        console.error("Supabase error:", error);
      }
    };
    fetchEvents();
  }, []);

  return { upcomingEvents, pastEvents };
}