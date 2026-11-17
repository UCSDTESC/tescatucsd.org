import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { gsap, Draggable, prefersReducedMotion } from "./motion";
import { ARCHIVE } from "./home-data";

/** The dark "Event archive" corkboard. Desktop: drag the posters around. Phone: swipe through them. */
export default function Archive() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0); // which poster the phone's dots point at

  useLayoutEffect(() => {
    const rail = railRef.current!;
    const posters = Array.from(rail.querySelectorAll<HTMLElement>(".poster"));
    const reduce = prefersReducedMotion();
    let top = 10; // the poster you grab comes to the front
    const mm = gsap.matchMedia();
    mm.add("(min-width: 761px)", () => {
      const drags = Draggable.create(posters, {
        bounds: rail,
        zIndexBoost: false,
        onPress() {
          this.target.style.zIndex = String(++top);
          this.target.classList.add("is-dragging");
          gsap.to(this.target, { scale: 1.04, duration: 0.2 });
        },
        onRelease() {
          this.target.classList.remove("is-dragging");
          gsap.to(this.target, { scale: 1, duration: 0.3, ease: "back.out(2)" });
        },
      });
      if (!reduce)
        gsap.from(posters, { y: -40, autoAlpha: 0, duration: 0.7, ease: "back.out(1.6)", stagger: 0.07, scrollTrigger: { trigger: rail, start: "top 75%" } });
      return () => {
        drags.forEach((d) => d.kill());
        gsap.set(posters, { clearProps: "transform,zIndex" });
      };
    });

    const onScroll = () => {
      if (posters.length < 2) return;
      const step = posters[1].offsetLeft - posters[0].offsetLeft;
      if (step > 0) setActive(Math.round(rail.scrollLeft / step));
    };
    rail.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      rail.removeEventListener("scroll", onScroll);
      mm.revert();
    };
  }, []);

  return (
    <section className="archive on-dark" id="archive" aria-labelledby="archive-h">
      <div className="sec-head">
        <div>
          <h2 className="h2" id="archive-h">
            Event archive
          </h2>
          <p className="sub" style={{ marginTop: 12 }}>
            Posters from past TESC events.
            <span className="desk-only">
              {" "}
              <b>Drag them around.</b>
            </span>
          </p>
        </div>
        <Link className="btn btn--line-white desk-only" to="/events">
          View all events
        </Link>
      </div>
      <div className="rail" ref={railRef}>
        {ARCHIVE.map((p) => (
          <figure className="poster" key={p.src} style={{ "--x": p.x, "--y": p.y, "--r": p.r, ...(p.w ? { "--w": p.w } : {}) } as CSSProperties}>
            {p.when && <time>{p.when}</time>}
            <img src={p.src} alt={p.alt} loading="lazy" draggable={false} />
            <h3>{p.title}</h3>
          </figure>
        ))}
      </div>
      <div className="pager phone-only">
        <span className="dots" aria-hidden="true">
          {ARCHIVE.map((p, i) => (
            <i key={p.src} className={i === active ? "on" : undefined} />
          ))}
        </span>
        <Link to="/events">
          View all events <Icon name="arrow" />
        </Link>
      </div>
    </section>
  );
}
