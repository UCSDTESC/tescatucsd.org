import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";
import type { HomeEvent } from "./home-data";

// The portal stores dates in UTC; TESC events happen in San Diego.
const dateParts = (options: Intl.DateTimeFormatOptions) => {
  const formatter = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", ...options });
  return (date: string) => {
    const parsed = new Date(date);
    return Number.isNaN(parsed.getTime()) ? "" : formatter.format(parsed);
  };
};
const monthOf = dateParts({ month: "short" });
const dayOf = dateParts({ day: "numeric" });
const fullDate = dateParts({ month: "long", day: "numeric", year: "numeric" });

/** "Recent events": upcoming TESC events first, then the most recent past ones, read live from the portal. */
export default function HomeEvents({ events, loading }: { events: HomeEvent[]; loading: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  const shown = events.slice(0, 4);
  const isUpcoming = (e: HomeEvent) => e.upcoming;
  const [first, ...rest] = shown;
  const count = shown.length;

  /* tickets rise in one after another, once the events have arrived */
  useLayoutEffect(() => {
    if (loading || count === 0) return;
    ScrollTrigger.refresh();
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ticket", { y: 50, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: ".tickets", start: "top 85%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, [loading, count]);

  return (
    <section className="events" id="events" aria-labelledby="events-h" ref={sectionRef}>
      <div className="sec-head">
        <div>
          <h2 className="h2" id="events-h">
            Recent events
          </h2>
          <p className="sub" style={{ marginTop: 12 }}>
            Upcoming TESC events first, then the most recent past ones.
          </p>
        </div>
      </div>

      {loading ? (
        // blank tickets hold the space while the events load
        <div className="tickets desk-only" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <div className="ticket is-loading" key={i}>
              <div className="ticket-img" />
              <div className="ticket-info" />
              <div className="ticket-stub" />
            </div>
          ))}
        </div>
      ) : count === 0 ? (
        <div className="none">
          <p>No TESC events are listed right now.</p>
          <Link className="btn btn--line-blue" to="/events">
            Open the events page
          </Link>
        </div>
      ) : (
        <>
          {/* desktop: each event is a ticket */}
          <div className="tickets desk-only">
            {shown.map((event) => (
              <article className={`ticket${isUpcoming(event) ? " ticket--next" : ""}`} key={event.id}>
                <div className="ticket-img">{event.image && <img src={event.image} alt={`${event.name} poster`} loading="lazy" />}</div>
                <div className="ticket-info">
                  {isUpcoming(event) && <span className="stamp">Upcoming</span>}
                  <h3>{event.name}</h3>
                  {event.location && <p>{event.location}</p>}
                  <a className="btn btn--blue" href={event.link}>
                    View on the portal
                  </a>
                </div>
                <div className="ticket-stub">
                  <small>{monthOf(event.date)}</small>
                  <b>{dayOf(event.date)}</b>
                </div>
              </article>
            ))}
          </div>

          {/* phone: one large card, then a short list */}
          <div className="phone-only">
            <article className="feat">
              {first.image && <img src={first.image} alt={`${first.name} poster`} loading="lazy" />}
              <div className="feat-info">
                {isUpcoming(first) && <span className="stamp" style={{ alignSelf: "flex-start" }}>Upcoming</span>}
                <h3>{first.name}</h3>
                <p className="meta">
                  <Icon name="calendar" />
                  {fullDate(first.date)}
                </p>
                {first.location && (
                  <p className="meta">
                    <Icon name="pin" />
                    {first.location}
                  </p>
                )}
                <a className="btn btn--blue" href={first.link}>
                  View on the portal
                </a>
              </div>
            </article>
            {rest.length > 0 && (
              <>
                <h3 className="ev-sub">{rest.some(isUpcoming) ? "More events" : "Earlier events"}</h3>
                <ul className="ev-list">
                  {rest.map((event) => (
                    <li key={event.id}>
                      <a href={event.link}>
                        {event.image && <img src={event.image} alt="" loading="lazy" />}
                        <span>
                          <b>{event.name}</b>
                          <small>{fullDate(event.date)}</small>
                        </span>
                        <Icon name="chevronRight" />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
}
