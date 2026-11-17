import { useLayoutEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { gsap, ScrollTrigger, Flip, prefersReducedMotion, useMediaQuery } from "./motion";
import { ORGS, ORG_CATEGORIES, countInCategory, fallbackTo } from "./home-data";

/** "Member organizations": a searchable grid of every org, with department filter chips. */
export default function Orgs() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const isPhone = useMediaQuery("(max-width: 760px)");
  const gridRef = useRef<HTMLDivElement>(null);
  const before = useRef<Flip.FlipState | null>(null); // where the cards were, just before a filter change
  const sliding = useRef<gsap.core.Timeline | null>(null);

  const term = query.trim().toLowerCase();
  // until you filter, search or press "Browse all", only the first few are listed
  const limited = category === "All" && !term && !showAll;
  const max = isPhone ? 5 : 12;
  let shown = 0;
  const visible = ORGS.map((o) => {
    const ok =
      (category === "All" || o.categories.includes(category)) &&
      (!term || `${o.acronym} ${o.name}`.toLowerCase().includes(term)) &&
      (!limited || shown < max);
    if (ok) shown++;
    return ok;
  });

  // Call this just before changing a filter: it notes each card's position, so the cards can slide to their new places.
  const remember = () => {
    if (prefersReducedMotion() || !gridRef.current) return;
    before.current = Flip.getState(gridRef.current.querySelectorAll(".org"));
  };

  // after a filter change: cards that no longer match fade out, and the matches slide into place
  useLayoutEffect(() => {
    const state = before.current;
    before.current = null;
    if (state) {
      sliding.current?.kill();
      sliding.current = Flip.from(state, {
        duration: 0.7,
        ease: "power3.inOut",
        stagger: 0.012,
        absolute: true,
        nested: true,
        onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 0.5, delay: 0.3, ease: "power2.out" }),
        onLeave: (els) => gsap.to(els, { autoAlpha: 0, scale: 0.85, duration: 0.3, ease: "power2.in" }),
      });
    }
    ScrollTrigger.refresh();
  }, [category, term, showAll, isPhone]);

  /* the first time the grid scrolls into view, the cards flip down like a departures board, rippling diagonally */
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const grid = gridRef.current!;
    const ctx = gsap.context(() => {
      const cards = grid.querySelectorAll(".org:not([hidden])");
      gsap.set(cards, { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: grid,
        start: "top 82%",
        once: true,
        onEnter: () =>
          gsap.fromTo(
            cards,
            { rotationX: -88, autoAlpha: 0, transformOrigin: "50% 0%", transformPerspective: 1000 },
            { rotationX: 0, autoAlpha: 1, duration: 1.1, ease: "expo.out", overwrite: true, clearProps: "transform", stagger: { grid: "auto", from: "start", amount: 0.55 } },
          ),
      });
    }, grid);
    return () => {
      sliding.current?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <section className="orgs" id="orgs" aria-labelledby="orgs-h">
      <div className="sec-head">
        <div>
          <h2 className="h2" id="orgs-h">
            Member organizations
          </h2>
          <p className="sub" style={{ marginTop: 14 }}>
            The council includes 50+ engineering student organizations. Filter by department or search by name.
          </p>
        </div>
        <label className="search">
          <Icon name="search" />
          <input
            type="search"
            placeholder="Search organizations"
            aria-label="Search organizations"
            value={query}
            onChange={(e) => {
              remember();
              setQuery(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="chips" role="group" aria-label="Filter by department">
        {ORG_CATEGORIES.map((c) => (
          <button
            className="chip"
            key={c}
            aria-pressed={c === category}
            onClick={() => {
              remember();
              setCategory(c);
            }}
          >
            {c}
            {c !== "All" && <span>{countInCategory(c)}</span>}
          </button>
        ))}
      </div>
      <div className="org-grid" aria-live="polite" ref={gridRef}>
        {ORGS.map((o, i) => (
          <article className="org" key={o.acronym} hidden={!visible[i]}>
            <div className={`logo${o.darkLogo ? " logo--dark" : ""}`}>
              <img src={o.logo} alt={`${o.acronym} logo`} loading="lazy" onError={fallbackTo(o.originalLogo)} />
            </div>
            <div>
              <h3>{o.acronym}</h3>
              <p>{o.name}</p>
            </div>
            <div className="links">
              {o.website && (
                <a href={o.website} aria-label={`${o.acronym} website`}>
                  <Icon name="globe" />
                </a>
              )}
              {o.instagram && (
                <a href={o.instagram} aria-label={`${o.acronym} Instagram`}>
                  <Icon name="instagram" />
                </a>
              )}
            </div>
          </article>
        ))}
        <p className="empty" hidden={shown > 0}>
          No organizations match "{query}".
        </p>
      </div>
      <button
        className="btn btn--blue browse"
        hidden={!limited}
        onClick={() => {
          remember();
          setShowAll(true);
        }}
      >
        Browse all organizations <Icon name="arrow" />
      </button>
    </section>
  );
}
