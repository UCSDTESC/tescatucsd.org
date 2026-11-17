// Content for the homepage. Organizations, board members and sponsors are read from
// the same data files the other pages use, so there is one place to update each.
import type { SyntheticEvent } from "react";
import {
  allCouncilMembers,
  bioengineeringOrgs,
  chemicalNanoOrgs,
  structuralOrgs,
  computerOrgs,
  electricalOrgs,
  mechanicalOrgs,
  roboticsOrgs,
  generalMiscOrgs,
} from "../CouncilMembersPage/council-member-data";
import { pvpData, committeeLeadsData } from "../AboutUs/member-info";
import { sponsors } from "./Sponsors-info";
import type { Event } from "../Events/EventsList";

/** The homepage's images live in public/home (small WebP copies made for this page). */
const HOME = "/home";

/** If a WebP copy is missing (for example a newly added org), show the original image instead. */
export const fallbackTo = (src: string) => (e: SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  if (img.dataset.fallback) return;
  img.dataset.fallback = "1";
  img.src = src;
};

const fileBase = (path: string) => path.split("/").pop()!.replace(/\.\w+$/, "");

/* ---------- member organizations ---------- */

export const ORG_CATEGORIES = [
  "All",
  "Bioengineering",
  "Chemical/Nano",
  "Structural",
  "Computer",
  "Electrical",
  "Mechanical",
  "Robotics",
  "Interdisciplinary/General",
];

// the same department lists the Council Members page filters by
const CATEGORY_LISTS: [string, { OrgAcronym: string }[]][] = [
  ["Bioengineering", bioengineeringOrgs],
  ["Chemical/Nano", chemicalNanoOrgs],
  ["Structural", structuralOrgs],
  ["Computer", computerOrgs],
  ["Electrical", electricalOrgs],
  ["Mechanical", mechanicalOrgs],
  ["Robotics", roboticsOrgs],
  ["Interdisciplinary/General", generalMiscOrgs],
];

/** These cards come first, in this order. */
const FEATURED = ["ACM", "IEEE", "SWE", "AIAA", "BMES", "Triton Racing", "Yonder Deep", "RPL", "NSBE", "SHPE", "TSE", "Triton AI"];
/** White logos that need a dark backdrop. */
const DARK_LOGOS = ["Triton Racing"];

const featuredRank = (acronym: string) => {
  const i = FEATURED.indexOf(acronym);
  return i < 0 ? 99 : i;
};

export const ORGS = allCouncilMembers
  .map((o) => ({
    name: o.Name,
    acronym: o.OrgAcronym,
    website: o.Links.find((l) => !l.includes("instagram")),
    instagram: o.Links.find((l) => l.includes("instagram")),
    logo: `${HOME}/logos-clean/${fileBase(o.Image)}.webp`,
    originalLogo: `/council-member-logos/${o.Image}`,
    darkLogo: DARK_LOGOS.includes(o.OrgAcronym),
    categories: CATEGORY_LISTS.filter(([, list]) => list.some((m) => m.OrgAcronym === o.OrgAcronym)).map(([name]) => name),
  }))
  .sort((a, b) => featuredRank(a.acronym) - featuredRank(b.acronym));

export const countInCategory = (category: string) => ORGS.filter((o) => o.categories.includes(category)).length;

/** The six logos stacked under the hero buttons. */
export const STACK_LOGOS = ["ACM", "IEEE", "SWE", "AIAA", "BMES", "TSE"].map((a) => `${HOME}/logos-clean/${a}.webp`);

/* ---------- meet the board ---------- */

// Left to right in the fan of cards; the co-presidents sit in the middle. Each person needs
// a photo at public/home/board/First-Last.webp. Roles are read from the About Us data, and
// anyone no longer listed there is left out.
const BOARD_ORDER = [
  "Julia Nguyen",
  "Eric Aguilar",
  "Jonathan Ty",
  "Aksh Malik",
  "Hieu Nguyen",
  "Nicole Fong",
  "Timothy Bang",
  "Kevin Nava",
  "Elizabeth Dam",
  "Alexis Gonzalez",
];

export const BOARD = BOARD_ORDER.flatMap((name) => {
  const member = [...pvpData, ...committeeLeadsData].find((m) => m[0] === name);
  return member ? [{ name, role: member[1], photo: `${HOME}/board/${name.replace(/ /g, "-")}.webp` }] : [];
});

/* ---------- events ---------- */

export type HomeEvent = Event & { upcoming: boolean };

/** The order the homepage shows events in: upcoming ones soonest first, then past ones newest first. */
export function orderEvents(upcoming: Event[], past: Event[]): HomeEvent[] {
  const time = (e: Event) => new Date(e.date).getTime();
  return [
    ...[...upcoming].sort((a, b) => time(a) - time(b)).map((e) => ({ ...e, upcoming: true })),
    ...past.map((e) => ({ ...e, upcoming: false })),
  ];
}

/* ---------- hero montage ---------- */

export const PHOTOS = ["photo-slideshow_5", "photo-slideshow_1", "photo-events-page-image", "photo-slideshow_7"].map(
  (n) => `${HOME}/montage/${n}.webp`,
);

// Old posters. The hero shows these only if the portal has fewer than two events with a poster;
// the intro animation also flashes through them.
export const POSTERS = [
  "TESC_Intro_Night",
  "BoardGameNightPostWLogos",
  "field_day_2",
  "Engineering_Prom_1",
  "SandcastleBonfire",
  "headshotamixer",
  "Sunset__Smores_Bonfire",
  "eotg-event-fa24",
  "Tapioca",
  "decaf-event-fa24",
  "tapex_fundraiser",
  "stempad-talk-wi25",
].map((n) => `${HOME}/montage/poster-${n}.webp`);

/* ---------- event archive (the corkboard) ---------- */

// x, y: where the poster is pinned on the board. r: its tilt. w: an optional custom width.
export const ARCHIVE = [
  { x: "1%", y: "14%", r: "-4deg", when: "Fall 2025", title: "Engineers on the Green", src: `${HOME}/poster-Fall-2025-EOTG.webp`, alt: "Engineers on the Green Fall 2025 poster" },
  { x: "17%", y: "2%", r: "3deg", when: "Fall 2025", title: "DECaF Career Fair", src: `${HOME}/poster-DECaF_FA25.webp`, alt: "DECaF Fall 2025 poster" },
  { x: "37%", y: "16%", r: "2deg", w: "clamp(190px,17.5vw,262px)", when: "Winter 2026", title: "Engineers on the Green", src: `${HOME}/poster-eotg-winter2026.webp`, alt: "Engineers on the Green Winter 2026 poster" },
  { x: "21%", y: "52%", r: "-3deg", when: "Winter 2026", title: "DECaF Career Fair", src: `${HOME}/poster-decaf-event-wi26.webp`, alt: "DECaF Winter 2026 poster" },
  { x: "58%", y: "3%", r: "-5deg", when: "Spring 2025", title: "ASML Tech Talk", src: `${HOME}/poster-asml-tech-talk.webp`, alt: "ASML tech talk poster" },
  { x: "61%", y: "52%", r: "4deg", title: "Engineer's Formal", src: `${HOME}/montage/poster-Engineering_Prom_1.webp`, alt: "Engineer's Formal poster" },
  { x: "79%", y: "17%", r: "5deg", title: "Board Game Night", src: `${HOME}/montage/poster-BoardGameNightPostWLogos.webp`, alt: "Board Game Night poster" },
] as { x: string; y: string; r: string; w?: string; when?: string; title: string; src: string; alt: string }[];

/* ---------- sponsors ---------- */

export const SPONSORS = sponsors.map((s) => ({
  name: s.alt,
  website: s.website,
  logo: `${HOME}/sponsors/sp-${fileBase(s.logo)}.webp`,
  originalLogo: s.logo,
}));
