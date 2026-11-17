import { useLayoutEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger, prefersReducedMotion, scroller } from "./motion";

/**
 * Turns on smooth scrolling while the homepage is open, and turns it off when you leave.
 * It must be the first thing inside the homepage, so the sections after it can use it.
 * It draws nothing.
 */
export default function SmoothScroll() {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    scroller.lenis = lenis;
    return () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33); // GSAP's default
      lenis.destroy();
      scroller.lenis = null;
    };
  }, []);
  return null;
}
