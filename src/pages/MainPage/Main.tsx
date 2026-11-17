// The homepage. It has its own nav bar and footer (HomeNav, HomeFooter), so its route in
// App.tsx sits outside the shared Page layout that the other pages use.
import { useLayoutEffect, useRef } from "react";
import "./home.css";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";
import SmoothScroll from "./SmoothScroll";
import HomeNav from "./HomeNav";
import Hero from "./Hero";
import Mission from "./Mission";
import HomeEvents from "./HomeEvents";
import Archive from "./Archive";
import Orgs from "./Orgs";
import TravelFund from "./TravelFund";
import HomeSponsors from "./HomeSponsors";
import HomeFooter from "./HomeFooter";
import { orderEvents } from "./home-data";
import { useSplitEvents } from "../Events/EventsList";

const Main = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  // live TESC events from the portal: the hero posters and the "Recent events" section both use them
  const { upcomingEvents, pastEvents, loading } = useSplitEvents();
  const events = orderEvents(upcomingEvents, pastEvents);

  useLayoutEffect(() => {
    // images change the page height as they load, so the scroll animations must re-measure
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    /* each section's heading rises in as it scrolls into view */
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>(".sec-head").forEach((head) =>
        gsap.from(head.children, { y: 30, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: head, start: "top 85%" } }),
      );
    }, rootRef);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <div className="tesc-home" ref={rootRef}>
      {/* SmoothScroll must stay first: the sections below use the smooth scrolling it sets up */}
      <SmoothScroll />
      <HomeNav />
      <main id="top">
        <Hero events={events} loading={loading} />
        <Mission />
        <HomeEvents events={events} loading={loading} />
        <Archive />
        <Orgs />
        <TravelFund />
        <HomeSponsors />
      </main>
      <HomeFooter />
    </div>
  );
};

export default Main;
