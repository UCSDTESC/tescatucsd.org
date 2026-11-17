import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./motion";
import { SPONSORS, fallbackTo } from "./home-data";

/** The sponsor logo grid. The list of sponsors comes from Sponsors-info.tsx. */
export default function HomeSponsors() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".logos li", { y: 24, opacity: 0, duration: 0.8, ease: "expo.out", stagger: 0.04, scrollTrigger: { trigger: ".logos", start: "top 85%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sponsors" id="sponsors" aria-labelledby="sp-h" ref={sectionRef}>
      <div className="sec-head">
        <div>
          <h2 className="h2" id="sp-h">
            Sponsors
          </h2>
          <p className="sub" style={{ marginTop: 14 }}>
            10+ companies support TESC events and programs.
          </p>
        </div>
        <a className="btn btn--line-dark" href="mailto:contact@tescatucsd.org">
          Contact TESC
        </a>
      </div>
      <ul className="logos">
        {SPONSORS.map((s) => (
          <li key={s.name}>
            <a href={s.website} aria-label={`${s.name} website`}>
              <img src={s.logo} alt={s.name} loading="lazy" onError={fallbackTo(s.originalLogo)} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
