import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";
import { BOARD } from "./home-data";

// Wraps each word in its own <span>, so the words can fill in one at a time while you scroll.
const words = (text: string) =>
  text.split(/(\s+)/).map((part, i) =>
    !part || /^\s+$/.test(part) ? (
      part
    ) : (
      <span className="w" key={i}>
        {part}
      </span>
    ),
  );

// the co-presidents in the middle sit on top of the hand of cards
const MIDDLE = (BOARD.length - 1) / 2;
const stackOrder = (i: number) => 10 - Math.round(Math.abs(i - MIDDLE) * 2);

// where each card sits: open = fanned wide on hover, rest = a tight hand
function pose(i: number, open: boolean) {
  const t = BOARD.length > 1 ? i / (BOARD.length - 1) - 0.5 : 0;
  // on phones the hand narrows with the screen so the outer cards never spill past the edge
  const spread =
    window.innerWidth <= 900 ? (open ? 100 : 82) * Math.min(1, window.innerWidth / 390) : open ? 205 : 170;
  return { x: t * spread * 2, y: t * t * (open ? 70 : 50), rotation: t * (open ? 36 : 26) };
}

/** The mission statement, and the "Meet the board" panel with its fan of portrait cards. */
export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hover, setHover] = useState(false);
  const [caption, setCaption] = useState("");

  useLayoutEffect(() => {
    const section = sectionRef.current!;
    const statement = section.querySelector<HTMLElement>(".statement")!;
    const board = section.querySelector<HTMLElement>(".board")!;
    const fan = section.querySelector<HTMLElement>(".fan")!;
    const cards = Array.from(section.querySelectorAll<HTMLElement>(".fan-card"));
    const faces = cards.map((c) => c.querySelector<HTMLElement>(".fan-face")!);
    const reduce = prefersReducedMotion();
    const listeners = new AbortController();

    const ctx = gsap.context(() => {
      const place = (open: boolean, duration: number) =>
        cards.forEach((c, i) =>
          reduce ? gsap.set(c, pose(i, open)) : gsap.to(c, { ...pose(i, open), duration, ease: "expo.out", overwrite: "auto" }),
        );
      place(false, 0);
      window.addEventListener("resize", () => place(false, 0), { signal: listeners.signal });
      if (reduce) return;

      /* words fill in as you read; each emphasis draws in right after its own words fill */
      const wordEls = Array.from(statement.querySelectorAll(".w"));
      const fill = gsap.timeline({ scrollTrigger: { trigger: statement, start: "top 80%", end: "bottom 40%", scrub: true } });
      wordEls.forEach((w, i) => fill.to(w, { opacity: 1, duration: 1, ease: "none" }, i * 0.5));
      statement.querySelectorAll("em, mark").forEach((el) => {
        const last = Array.from(el.querySelectorAll(".w")).pop()!;
        const at = wordEls.indexOf(last) * 0.5 + 0.6;
        fill.to(
          el,
          el.tagName === "EM" ? { "--ul": "100%", duration: 2.4, ease: "power2.out" } : { "--hl": "100%", duration: 2, ease: "power2.out" },
          at,
        );
      });

      /* the hand is dealt from a single stack the first time it scrolls into view */
      gsap.set(cards, { x: 0, y: 60, rotation: 0, autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: board,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(cards, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.04, ease: "power2.out" });
          cards.forEach((c, i) => gsap.to(c, { ...pose(i, false), duration: 1.2, delay: 0.35 + i * 0.03, ease: "expo.out" }));
        },
      });

      /*
       * Hovering the panel fans the cards open. The card nearest the pointer is "picked": it jumps to the
       * front at once and its face lifts, and the card picked before it drops back at the same moment.
       * The order changes in one step (never animated), so a card cannot slice through its neighbors.
       * Only the face moves, so the card's place in the hand stays under the pointer and cannot flicker.
       */
      let picked = -1;
      const pick = (i: number) => {
        if (i === picked) return;
        if (picked >= 0) {
          gsap.set(cards[picked], { zIndex: stackOrder(picked) });
          gsap.to(faces[picked], { y: 0, scale: 1, duration: 0.45, ease: "expo.out", overwrite: "auto" });
        }
        picked = i;
        if (i >= 0) {
          gsap.set(cards[i], { zIndex: 20 });
          gsap.to(faces[i], { y: -34, scale: 1.08, duration: 0.45, ease: "expo.out", overwrite: "auto" });
        }
        setCaption(i >= 0 ? `${BOARD[i].name}, ${BOARD[i].role}` : "");
      };
      // how far each card's middle sits from the middle of the open hand (the cards tilt around a point below them)
      const middleOf = (i: number) => {
        const p = pose(i, true);
        return p.x + cards[i].offsetHeight * 0.9 * Math.sin((p.rotation * Math.PI) / 180);
      };
      fan.addEventListener(
        "pointermove",
        (e) => {
          if (!(e.target as Element).closest(".fan-card")) return pick(-1);
          const box = fan.getBoundingClientRect();
          const x = e.clientX - (box.left + box.width / 2);
          let nearest = 0;
          cards.forEach((_, i) => {
            if (Math.abs(x - middleOf(i)) < Math.abs(x - middleOf(nearest))) nearest = i;
          });
          pick(nearest);
        },
        { signal: listeners.signal },
      );
      fan.addEventListener("pointerleave", () => pick(-1), { signal: listeners.signal });
      board.addEventListener(
        "pointerenter",
        () => {
          setHover(true);
          place(true, 0.9);
        },
        { signal: listeners.signal },
      );
      board.addEventListener(
        "pointerleave",
        () => {
          setHover(false);
          pick(-1);
          place(false, 0.9);
        },
        { signal: listeners.signal },
      );
    }, section);

    return () => {
      listeners.abort();
      ctx.revert();
    };
  }, []);

  return (
    <section className="mission" id="mission" aria-label="Mission" ref={sectionRef}>
      <p className="statement">
        {words("The Triton Engineering Student Council (TESC) empowers ")}
        <em>{words("UC San Diego engineering students")}</em>
        {words(" by connecting them with impactful ")}
        <mark>{words("communities")}</mark>
        {words(", ")}
        <mark>{words("projects")}</mark>
        {words(", and ")}
        <mark>{words("career building opportunities")}</mark>
        {words(".")}
      </p>
      <Link className={`board${hover ? " is-hover" : ""}`} to="/about-us">
        <div className="fan" aria-hidden="true">
          {BOARD.map((member, i) => (
            <div className="fan-card" key={member.name} style={{ zIndex: stackOrder(i) }}>
              <div className="fan-face">
                <img src={member.photo} alt="" loading="lazy" />
              </div>
            </div>
          ))}
          <div className="fan-cap">{caption}</div>
        </div>
        <div className="board-copy">
          <div>
            <h2>Meet the board</h2>
            <p>The co-presidents, vice presidents, and committee leads who run TESC.</p>
          </div>
          <div className="board-arrow" aria-hidden="true">
            <Icon name="arrow" />
          </div>
        </div>
      </Link>
    </section>
  );
}
