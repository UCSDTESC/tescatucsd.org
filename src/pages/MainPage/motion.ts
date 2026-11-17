// Shared animation setup for the homepage: GSAP (animations) and Lenis (smooth scrolling).
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, Flip, Draggable);

export { gsap, ScrollTrigger, Flip, Draggable };

/** True when the visitor's device is set to "reduce motion". Most animations are skipped then. */
export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** The smooth-scroll object while the homepage is open. It is null when reduced motion is on. */
export const scroller: { lenis: Lenis | null } = { lenis: null };

/** Scrolls to a section such as "#events", stopping just below the pinned nav bar. */
export function scrollToHash(hash: string) {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;
  const offset = window.matchMedia("(max-width: 900px)").matches ? -84 : -76;
  if (scroller.lenis) scroller.lenis.scrollTo(target, { offset });
  else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY + offset });
}

/** Re-renders the component when a CSS media query starts or stops matching. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}
