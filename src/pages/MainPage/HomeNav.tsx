import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import SectionLink from "./SectionLink";
import { scroller } from "./motion";

const LINKS = [
  { to: "#events", label: "Events" },
  { to: "#orgs", label: "Organizations" },
  { to: "#funding", label: "Funding" },
  { to: "#mission", label: "About" },
];
// the phone menu has one more link
const MENU_LINKS = [...LINKS, { to: "#sponsors", label: "Sponsors" }];

// which menu link is marked "You are here" while each section is on screen
const OWNER: Record<string, string> = {
  mission: "#mission",
  events: "#events",
  archive: "#events",
  orgs: "#orgs",
  funding: "#funding",
  sponsors: "#sponsors",
  footer: "#sponsors",
};

/** The pinned bar at the top of the homepage, plus the full-screen menu on phones. */
export default function HomeNav() {
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState<string | undefined>();
  const menuBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const mounted = useRef(false);

  function setMenu(open: boolean) {
    setMenuOpen(open);
    // the page behind the menu must not scroll while it is open
    if (open) scroller.lenis?.stop();
    else scroller.lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
  }

  // past the hero, the wordmark and the Discord button fade in
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".tesc-home .hero");
    if (!hero) return;
    const stick = () => setPastHero(window.scrollY > hero.offsetHeight - 120);
    window.addEventListener("scroll", stick, { passive: true });
    stick();
    return () => window.removeEventListener("scroll", stick);
  }, []);

  // the menu marks the section in the middle of the screen
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(OWNER[entry.target.id]);
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    Object.keys(OWNER).forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const hero = document.querySelector(".tesc-home .hero"); // back at the top, nothing is marked
    if (hero) io.observe(hero);
    return () => io.disconnect();
  }, []);

  // keyboard: Escape closes the menu, and focus follows the menu as it opens and closes
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    (menuOpen ? closeBtn : menuBtn).current?.focus();
  }, [menuOpen]);

  // leaving the homepage with the menu open must not leave the next page unable to scroll
  useEffect(() => () => void (document.body.style.overflow = ""), []);

  return (
    <>
      <header className={`nav${pastHero ? " past-hero" : ""}`}>
        <div className="nav-bar">
          <SectionLink className="brand" to="#top" aria-label="TESC home">
            TESC
          </SectionLink>
          <nav aria-label="Primary">
            <ul>
              {LINKS.map((l) => (
                <li key={l.to}>
                  <SectionLink to={l.to}>{l.label}</SectionLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link className="btn btn--blue" to="/discord">
            Join the Discord
          </Link>
          <button
            className="menu-btn"
            ref={menuBtn}
            aria-expanded={menuOpen}
            aria-controls="home-menu"
            onClick={() => setMenu(true)}
          >
            <Icon name="menu" className="ico" />
            Menu
          </button>
        </div>
      </header>

      <div className="sheet" id="home-menu" role="dialog" aria-modal="true" aria-label="Menu" hidden={!menuOpen}>
        <div className="sheet-bar">
          <b>TESC</b>
          <button className="menu-btn" ref={closeBtn} onClick={() => setMenu(false)}>
            <Icon name="close" className="ico" />
            Close
          </button>
        </div>
        <ul>
          {MENU_LINKS.map((l) => (
            <li key={l.to}>
              <SectionLink to={l.to} onNavigate={() => setMenu(false)} aria-current={current === l.to ? "true" : undefined}>
                {l.label}
              </SectionLink>
            </li>
          ))}
        </ul>
        <Link className="btn btn--blue" to="/discord">
          Join the Discord
        </Link>
      </div>
    </>
  );
}
