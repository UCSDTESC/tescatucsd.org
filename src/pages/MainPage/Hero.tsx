import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import SectionLink from "./SectionLink";
import { gsap, ScrollTrigger, prefersReducedMotion, scroller } from "./motion";
import { PHOTOS, POSTERS, STACK_LOGOS, type HomeEvent } from "./home-data";

const ACRONYM = [
  ["T", "Triton"],
  ["E", "Engineering"],
  ["S", "Student"],
  ["C", "Council"],
];

// the intro cuts quickly through these, ending on the first hero photo
const INTRO_SEQUENCE = [
  POSTERS[0], PHOTOS[3], POSTERS[3], PHOTOS[1], POSTERS[5], POSTERS[1], PHOTOS[2], POSTERS[8],
  POSTERS[4], PHOTOS[3], POSTERS[10], POSTERS[2], PHOTOS[1], POSTERS[7], POSTERS[11], PHOTOS[0],
];
const INTRO_SHAPES = [[300, 375], [260, 260], [340, 255], [240, 320], [300, 300], [360, 240]];
const INTRO_SEEN_KEY = "tesc-intro-seen";

let introPlayed = false; // also stops a replay when you leave the homepage and come back

// The intro plays once per visitor, and only when motion is welcome.
// Add ?intro to the URL to see it again.
function shouldPlayIntro() {
  if (introPlayed || prefersReducedMotion()) return false;
  if (/[?&]intro\b/.test(window.location.search)) return true;
  try {
    return localStorage.getItem(INTRO_SEEN_KEY) !== "1";
  } catch {
    return true; // browser storage is blocked
  }
}

type Poster = { src: string; alt: string; href?: string };

/**
 * One of the two small poster cards on the hero photo. Every 9 seconds it flips over to the next
 * poster. A poster with a link opens that event's page on the portal when clicked.
 */
function PosterCard({ posters, side, depth, active, delay }: { posters: Poster[]; side: "a" | "b"; depth: string; active: boolean; delay: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const count = posters.length;
  const listKey = posters.map((p) => p.src).join("|");
  const current = posters[index % Math.max(count, 1)];
  const next = posters[(index + 1) % Math.max(count, 1)];

  // a new list of posters (the live events arrived) starts again from the first one
  useEffect(() => setIndex(0), [listKey]);

  useEffect(() => {
    if (!active || count < 2) return;
    const card = cardRef.current!;
    let interval: number | undefined;
    let flip: gsap.core.Timeline | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        flip = gsap
          .timeline()
          .to(card, { rotationY: 90, duration: 0.28, ease: "power2.in" })
          .add(() => setIndex((i) => (i + 1) % count))
          .to(card, { rotationY: 0, duration: 0.45, ease: "back.out(1.6)" });
      }, 9000);
    }, delay);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
      flip?.kill();
      gsap.set(card, { rotationY: 0 });
    };
  }, [active, count, delay, listKey]);

  // download the next poster ahead of time, so the flip never lands on an empty card
  useEffect(() => {
    if (active && next && next !== current) new Image().src = next.src;
  }, [active, next, current]);

  const image = current && <img key={current.src} className="is-on" src={current.src} alt={current.alt} decoding="async" />;
  return (
    <figure className={`mposter mposter--${side}`} data-depth={depth} ref={cardRef}>
      {current?.href ? (
        <a href={current.href} title={`${current.alt}: view on the portal`}>
          {image}
        </a>
      ) : (
        image
      )}
    </figure>
  );
}

/** The top of the homepage: the big TESC letters, the buttons, and the photo montage. */
export default function Hero({ events, loading }: { events: HomeEvent[]; loading: boolean }) {
  const [intro, setIntro] = useState(shouldPlayIntro);
  const [cycling, setCycling] = useState(false); // the poster cards start flipping once the hero has appeared

  // The poster cards show the six newest TESC events from the portal, and each one links to its event page.
  // They stay blank while the events load. With fewer than two event posters, they show the old posters instead.
  const live = events.filter((e) => e.image).slice(0, 6);
  const liveKey = live.map((e) => e.id).join(",");
  const posters = useMemo<Poster[]>(
    () =>
      loading
        ? []
        : live.length >= 2
          ? live.map((e) => ({ src: e.image, alt: `${e.name} poster`, href: e.link }))
          : POSTERS.map((src) => ({ src, alt: "TESC event poster" })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, liveKey],
  );
  const postersA = useMemo(() => posters.filter((_, i) => i % 2 === 0), [posters]);
  const postersB = useMemo(() => posters.filter((_, i) => i % 2 === 1), [posters]);
  const playIntro = useRef(intro).current;
  const heroRef = useRef<HTMLElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current!;
    const root = hero.closest<HTMLElement>(".tesc-home")!;
    const reduce = prefersReducedMotion();
    const listeners = new AbortController();
    const timers: number[] = [];
    const running: gsap.core.Animation[] = []; // animations started later, outside the context below
    let cancelled = false;

    const frame = hero.querySelector<HTMLElement>(".mframe")!;
    const montage = hero.querySelector<HTMLElement>(".montage")!;
    const [posterA, posterB] = Array.from(hero.querySelectorAll<HTMLElement>(".mposter"));

    /* the big photo keeps crossfading to the next one */
    const cycle = (el: HTMLElement, every: number, swap: (go: () => void, next: HTMLImageElement) => void) => {
      const imgs = Array.from(el.querySelectorAll("img"));
      let i = 0;
      return () => {
        timers.push(
          window.setInterval(() => {
            const next = (i + 1) % imgs.length;
            swap(() => {
              imgs[i].classList.remove("is-on");
              imgs[next].classList.add("is-on");
              i = next;
            }, imgs[next]);
          }, every),
        );
      };
    };
    // slow crossfade with a barely-there drift, so the photo never jumps
    const startMontage = cycle(frame, 7000, (go, img) => {
      const prev = frame.querySelector("img.is-on");
      if (!reduce) gsap.set(prev, { opacity: 1, zIndex: 1 }); // hold the old photo while the new one fades over it
      go();
      if (reduce) return;
      gsap.set(img, { zIndex: 2 });
      gsap.fromTo(img, { opacity: 0, scale: 1.03 }, { opacity: 1, duration: 1.8, ease: "sine.inOut" });
      gsap.to(img, { scale: 1, duration: 8, ease: "none" });
      gsap.to(prev, { opacity: 0, duration: 1.8, delay: 0.3, ease: "sine.inOut", clearProps: "zIndex" });
    });
    const startCycles = () => {
      startMontage();
      setCycling(true); // the two poster cards (PosterCard above) start flipping
    };

    const ctx = gsap.context(() => {
      if (reduce) {
        startCycles();
        return;
      }

      /* the frame and posters follow the pointer by depth, and the whole collage tilts */
      gsap.set([montage, posterA, posterB], { transformPerspective: 1200 });
      const layers = Array.from(montage.querySelectorAll<HTMLElement>("[data-depth]")).map((el) => ({
        d: Number(el.dataset.depth),
        x: gsap.quickTo(el, "x", { duration: 1.1, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 1.1, ease: "power3.out" }),
      }));
      const rx = gsap.quickTo(montage, "rotationX", { duration: 1.2, ease: "power3.out" });
      const ry = gsap.quickTo(montage, "rotationY", { duration: 1.2, ease: "power3.out" });
      hero.addEventListener(
        "pointermove",
        (e) => {
          const r = montage.getBoundingClientRect();
          const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
          const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
          layers.forEach((l) => {
            l.x(nx * l.d * 6);
            l.y(ny * l.d * 4);
          });
          ry(nx * 1.2);
          rx(-ny * 0.8);
        },
        { signal: listeners.signal },
      );
      hero.addEventListener(
        "pointerleave",
        () => {
          layers.forEach((l) => {
            l.x(0);
            l.y(0);
          });
          rx(0);
          ry(0);
        },
        { signal: listeners.signal },
      );

      /* on scroll the posters drift ahead of the photo (desktop only; on phones the hero is stacked and they would cover the copy) */
      gsap.matchMedia().add("(min-width: 901px)", () => {
        gsap
          .timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } })
          .to(frame, { yPercent: 6, ease: "none" }, 0)
          .to(posterA, { yPercent: -40, ease: "none" }, 0)
          .to(posterB, { yPercent: -70, ease: "none" }, 0)
          .to(".acro", { yPercent: -12, ease: "none" }, 0);
      });

      /* magnetic buttons */
      hero.querySelectorAll<HTMLElement>(".magnet").forEach((b) => {
        const mx = gsap.quickTo(b, "x", { duration: 0.5, ease: "power3.out" });
        const my = gsap.quickTo(b, "y", { duration: 0.5, ease: "power3.out" });
        b.addEventListener(
          "pointermove",
          (e) => {
            const r = b.getBoundingClientRect();
            mx((e.clientX - r.left - r.width / 2) * 0.25);
            my((e.clientY - r.top - r.height / 2) * 0.35);
          },
          { signal: listeners.signal },
        );
        b.addEventListener(
          "pointerleave",
          () => {
            mx(0);
            my(0);
          },
          { signal: listeners.signal },
        );
      });

      /* hero reveal, played as the intro hands off */
      const heroIn = gsap
        .timeline({ paused: true, defaults: { ease: "expo.out" } })
        .from(".letter", { yPercent: 105, duration: 1.2, stagger: 0.08 })
        .from(".word", { opacity: 0, y: 8, duration: 0.8, stagger: 0.06 }, "-=.9")
        .from(".hero .reveal", { y: 20, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=1")
        .from([posterA, posterB], { scale: 0.4, autoAlpha: 0, duration: 1, stagger: 0.12, ease: "back.out(1.5)" }, "<.1")
        .fromTo(".nav", { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, clearProps: "opacity,visibility" }, "-=1");
      const go = () => {
        heroIn.play();
        startCycles();
      };

      if (!playIntro) {
        go();
        return;
      }

      /* intro: rapid cuts through TESC photos and posters, then the window grows into the hero frame */
      const loader = loaderRef.current!;
      const win = loader.querySelector<HTMLElement>(".intro-win")!;
      const bar = loader.querySelector<HTMLElement>(".intro-bar b")!;
      const imgs = Array.from(win.querySelectorAll("img"));
      history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
      scroller.lenis?.stop();
      document.body.style.overflow = "hidden";

      const finish = () => {
        introPlayed = true;
        setIntro(false);
        history.scrollRestoration = "auto";
        document.body.style.overflow = "";
        scroller.lenis?.start();
        ScrollTrigger.refresh();
        try {
          localStorage.setItem(INTRO_SEEN_KEY, "1");
        } catch {
          /* not saved: the intro plays again next visit */
        }
      };
      const rand = (a: number, b: number) => a + Math.random() * (b - a);
      // wait for the images, but never longer than 1.8 seconds
      const ready = Promise.race([
        Promise.all(imgs.map((im) => im.decode().catch(() => {}))),
        new Promise((resolve) => timers.push(window.setTimeout(resolve, 1800))),
      ]);
      ready.then(() => {
        if (cancelled) return;
        const last = imgs.length - 1;
        const cuts = gsap.timeline();
        running.push(cuts);
        imgs.forEach((im, k) =>
          cuts.call(
            () => {
              imgs.forEach((o) => o.classList.toggle("is-on", o === im));
              const [w, h] = k === last ? [300, 375] : INTRO_SHAPES[k % INTRO_SHAPES.length];
              gsap.set(win, {
                width: w,
                height: h,
                x: k === last ? 0 : rand(-24, 24),
                y: k === last ? 0 : rand(-18, 18),
                rotation: k === last ? 0 : rand(-3, 3),
              });
              gsap.set(bar, { scaleX: (k + 1) / imgs.length });
            },
            undefined,
            k * 0.1,
          ),
        );
        cuts.call(
          () => {
            const r = frame.getBoundingClientRect();
            running.push(
              gsap
                .timeline({ onComplete: finish })
                .to(win, { left: r.left + r.width / 2, top: r.top + r.height / 2, width: r.width, height: r.height, borderRadius: 0, duration: 1.15, ease: "expo.inOut" })
                .to(loader.querySelectorAll(".intro-mark, .intro-bar"), { autoAlpha: 0, duration: 0.4 }, 0)
                .to(loader, { backgroundColor: "rgba(12,49,82,0)", duration: 0.7, ease: "power2.inOut" }, 0.45)
                .call(go, undefined, 0.7),
            );
          },
          undefined,
          imgs.length * 0.1 + 0.3,
        );
      });
    }, root);

    return () => {
      cancelled = true;
      listeners.abort();
      timers.forEach((t) => window.clearTimeout(t)); // also stops the intervals
      running.forEach((a) => a.kill());
      ctx.revert();
      document.body.style.overflow = "";
      history.scrollRestoration = "auto";
    };
  }, [playIntro]);

  return (
    <>
      {intro && (
        <div className="loader" aria-hidden="true" ref={loaderRef}>
          <div className="intro-win">
            {INTRO_SEQUENCE.map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
          <span className="intro-mark">TESC</span>
          <i className="intro-bar">
            <b />
          </i>
        </div>
      )}

      <section className="hero" aria-label="Introduction" ref={heroRef}>
        <div className="hero-copy">
          <h1 className="acro" aria-label="TESC, Triton Engineering Student Council">
            {ACRONYM.map(([letter, word]) => (
              <span className="acro-col" aria-hidden="true" key={letter}>
                <span className="mask">
                  <span className="letter">{letter}</span>
                </span>
                <span className="word">{word}</span>
              </span>
            ))}
          </h1>
          <p className="intro reveal">The council includes 50+ engineering student organizations at UC San Diego.</p>
          <div className="btns reveal">
            <Link className="btn btn--blue magnet" to="/discord">
              Join the Discord <Icon name="arrow" className="desk-only" />
            </Link>
            <SectionLink className="btn btn--line-blue magnet" to="#events">
              Explore events <Icon name="down" className="phone-only" />
            </SectionLink>
          </div>
          <SectionLink className="org-stack reveal" to="#orgs">
            <span className="faces" aria-hidden="true">
              {STACK_LOGOS.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </span>
            <span>See all member organizations</span>
          </SectionLink>
        </div>
        <div className="montage">
          <div className="mframe" data-depth=".35">
            {PHOTOS.map((src, i) => (
              <img key={src} src={src} alt="TESC students at a council event" decoding="async" className={i === 0 ? "is-on" : undefined} />
            ))}
          </div>
          <PosterCard posters={postersA} side="a" depth="1.4" active={cycling} delay={0} />
          <PosterCard posters={postersB} side="b" depth="1.9" active={cycling} delay={4500} />
        </div>
      </section>
    </>
  );
}
