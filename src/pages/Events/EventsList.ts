export const upcomingEventLogos = ["/event-logos/Tapioca.png"];
export const upcomingEventLinks = ["https://tapiocaexpress.com/"];

export const pastEventLogos = [
  "/event-logos/SandcastleBonfire.jpg",
  "/event-logos/stempad-talk-wi25.webp",
  "/event-logos/decaf-event-wi25.png",
  "/event-logos/eotg-event-wi25.jpg",
  "/event-logos/decaf-event-fa24.jpg",
  "/event-logos/eotg-event-fa24.jpg",
  "/event-logos/decaf-event-fa23.svg",
  "/event-logos/sd-hacks-event-wi21.png",
  "/event-logos/decaf-event-wi21.svg",
  "/event-logos/eotg-event-wi21.svg",
  "/event-logos/baking-event-fa20.png",
  "/event-logos/matcha-event-fa20.svg",
  "/event-logos/destress-event-fa20.svg",
  "/event-logos/eotg-event-fa20.svg"
];

export const pastEventLinks = [
  "https://docs.google.com/forms/d/e/1FAIpQLSfYP_vwKSgp0AF6B310_VyWz5hGEI3Hg6UfZetKdhE_THPiNA/viewform",
  "http://tinyurl.com/stempad-rsvp",
  "https://decafucsd.com",
  "https://tescucsd.org/eotg",
  "https://decafucsd.com",
  "https://www.eotgucsd.com",
  "https://decafucsd.com",
  "https://www.eotgucsd.com",
  "https://decafucsd.com",
  "https://www.eotgucsd.com",
  "https://decafucsd.com",
  "https://www.eotgucsd.com",
  "https://decafucsd.com",
  "https://www.eotgucsd.com"
];

export const upcomingEventDescription = [
  "Come out and support the Triton Engineering Student Council (TESC) by purchasing from Tapioca Express! Show this flyer at the register and 10% of the proceeds will go to TESC."
];

export const pastEventDescription = [
  "Triton Engineering Student Council is inviting you to participate in our Sand Castle Competition and join us for a warm and cozy bonfire with some smores' on March 2nd, 2025! We are opening this event to all students within the Jacobs School of Engineering community! For this Sand Castle Competition, the best sand castles will be given points. We will be mostly judging you on your team spirit, quality of the sand castle, and engineering aspects when building it! Afterwards, we will be celebrating the winners with some smore's and a bonfire!!", 
  "On Friday, February 7th, from 1:00-3:00 PM, TESC will be hosting a talk with Stempad at the QCC in Jacob's Hall. Stempad is a digital scientific note editor startup and they will be talking about how to build a startup and the difference between a startup and a large company.",
  "DECaF 2025, a student-run career fair organized by the Triton Engineering Student Council, aims to connect talented engineering students with leading recruiters like you. With an annual attendance of 1,000+ students from various engineering majors, this event presents a unique opportunity to meet and engage with potential future employees. Participating companies will have direct access to a diverse pool of motivated and skilled students and a comprehensive resume database."
];

export interface Event{
  name: string;
  date: string;
  location: string;
  tags: string[];
  image: string;
  link: string;
};
export const upcomingEvents: Event[] = [
  {name: "Tapoca Express Fundraiser", date: "March 6th, 2025", location: "Tapioca Express, Price Center", tags: ["Fundraiser", "Finance"], image: "/event-logos/Tapioca.png", link: "https://tapiocaexpress.com/"},
]
export const previousEvents: Event[] = [
  {
    name: "Sandcastle Competition",
    date: "March 2nd, 2025",
    location: "La Jolla Shores",
    tags: ["Social"],
    image: "/event-logos/SandcastleBonfire.jpg",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfYP_vwKSgp0AF6B310_VyWz5hGEI3Hg6UfZetKdhE_THPiNA/viewform",
  },
  {
    name: "Talk with Stempad",
    date: "February 7th, 2025",
    location: "Qualcomm Room, JSOE",
    tags: ["Career"],
    image: "/event-logos/stempad-talk-wi25.webp",
    link: "http://tinyurl.com/stempad-rsvp",
  },
  {
    name: "DECaF",
    date: "January 21st, 2025",
    location: "Qualcomm Room, JSOE",
    tags: ["Career"],
    image: "/event-logos/decaf-event-wi25.png",
    link: "https://decafucsd.com",
  },
  {
    name: "Engineers on the Green",
    date: "January 7th, 2025",
    location: "Warren Mall",
    tags: [],
    image: "/event-logos/eotg-event-wi25.jpg",
    link: "https://tescucsd.org/eotg",
  },
  {
    name: "DECaF",
    date: "October 9th, 2024",
    location: "Qualcomm Room, JSOE",
    tags: ["Career"],
    image: "/event-logos/decaf-event-fa24.jpg",
    link: "https://decafucsd.com",
  },
  {
    name: "Engineers on the Green",
    date: "October 1st, 2024",
    location: "Warren Mall",
    tags: [],
    image: "/event-logos/eotg-event-fa24.jpg",
    link: "https://tescucsd.org/eotg",
  },
  {
    name: "DECaF",
    date: "November 6th, 2023",
    location: "",
    tags: ["Career"],
    image: "/event-logos/decaf-event-fa23.svg",
    link: "https://decafucsd.com",
  },
  {
    name: "SD Hacks",
    date: "February 19th-21st, 2021",
    location: "",
    tags: ["Hackathon"],
    image: "/event-logos/sd-hacks-event-wi21.png",
    link: "",
  },
  {
    name: "DECaF",
    date: "January 19th-21st, 2021",
    location: "",
    tags: ["Career"],
    image: "/event-logos/decaf-event-wi21.svg",
    link: "https://decafucsd.com",
  },
  {
    name: "Engineers on the Green",
    date: "January 11th-12th, 2021",
    location: "Warren Mall",
    tags: [],
    image: "/event-logos/eotg-event-wi21.svg",
    link: "https://tescucsd.org/eotg",
  },
  {
    name: "Baking Event",
    date: "December 4th, 2020",
    location: "",
    tags: ["Social"],
    image: "/event-logos/baking-event-fa20.png",
    link: "",
  },
  {
    name: "Matcha",
    date: "November 16th-20th, 2020",
    location: "",
    tags: [],
    image: "/event-logos/matcha-event-fa20.svg",
    link: "",
  },
  {
    name: "Destress with TESC",
    date: "November 11th, 2020",
    location: "",
    tags: ["Social"],
    image: "/event-logos/destress-event-fa20.svg",
    link: "",
  },
  {
    name: "Engineers on the Green",
    date: "October 5th-9th, 2020",
    location: "Warren Mall",
    tags: [],
    image: "/event-logos/eotg-event-fa20.svg",
    link: "https://tescucsd.org/eotg",
  },
]