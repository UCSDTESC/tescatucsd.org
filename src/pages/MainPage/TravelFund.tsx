import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";

// the same application form the Funding page links to
const APPLY_URL = "https://forms.gle/g6GC2MjhuTgNiB9k7";

const STEPS = [
  {
    title: "Submit an application",
    short: "Google Form + travel certification link",
    stamp: "Submitted",
    detail:
      "Complete the Google Form linked on the funding page. Include a public Google Drive link to your completed Student Certification for Business Travel form.",
  },
  {
    title: "Application review",
    short: "Rolling, three to four weeks",
    stamp: "Reviewed",
    detail:
      "TESC reviews applications on a rolling basis, which takes three to four weeks. Leave at least four weeks before your travel. If you do not receive an email within three weeks, follow up with the board by email.",
  },
  {
    title: "Acceptance notification",
    short: "Email with the Post-Travel Form",
    stamp: "Accepted",
    detail: "Approved applicants receive an email with a link to the Post-Travel Form.",
  },
  {
    title: "Post-travel reimbursement",
    short: "Receipts within two weeks of travel",
    stamp: "Sent",
    detail:
      "Submit the Post-Travel Form within two weeks of travel, with itemized receipts and proof of payment for every expense. TESC does not process requests received after this deadline, and the award is forfeited.",
  },
];

/** The blue "Student Travel Fund" section. Desktop shows a boarding pass; phones show the steps as a list. */
export default function TravelFund() {
  // boarding pass: how many steps are stamped so far (one more than the steps = the final "Reimbursed" stamp)
  const [stamped, setStamped] = useState(0);
  // phone list: which step is open (-1 = none)
  const [openStep, setOpenStep] = useState(0);
  const passRef = useRef<HTMLDivElement>(null);

  /* stamps land one by one as the pass scrolls up the screen */
  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      setStamped(STEPS.length + 1);
      return;
    }
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: passRef.current,
        start: "top 80%",
        end: "bottom 45%",
        onUpdate: (self) => setStamped(Math.floor(self.progress * (STEPS.length + 1.01))),
      });
    });
    return () => ctx.revert();
  }, []);

  // opening a step changes the page height, so the scroll animations below must re-measure
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [openStep]);

  return (
    <section className="fund on-dark" id="funding" aria-labelledby="fund-h">
      <div className="fund-copy">
        <h2 className="h2" id="fund-h">
          Student Travel Fund
        </h2>
        <p className="lede">
          The Student Travel Fund supports Jacobs School of Engineering undergraduates who attend conferences and competitions. It covers travel
          expenses such as transportation and hotel costs, as well as conference or registration fees. This year, TESC manages the application
          process and reviews applications.
        </p>
        <div className="btns">
          <a className="btn btn--white" href={APPLY_URL}>
            Apply for funding <Icon name="arrow" className="desk-only" />
          </a>
          <Link className="btn btn--line-white" to="/funding">
            Read the guidelines <Icon name="arrow" className="phone-only" />
          </Link>
        </div>
        <p className="note">
          <Icon name="info" />
          <span>
            This is a reimbursement program, so students pay their expenses first and then submit receipts. Typical reimbursements range from $300
            to $500, depending on documented expenses and available funds. TESC does not screen applicants during the summer, so students traveling
            over the summer should apply before the end of the previous academic year.
          </span>
        </p>
      </div>

      <div className={`pass desk-only${stamped > STEPS.length ? " is-done" : ""}`} ref={passRef}>
        <div className="pass-main">
          <div className="pass-head">
            TESC Student Travel Fund<span>Boarding pass</span>
          </div>
          <div className="pass-route">
            UC San Diego
            <Icon name="plane" label="to" />
            Your conference
          </div>
          <ol>
            {STEPS.map((step, i) => (
              <li key={step.title} className={i < stamped ? "is-stamped" : undefined}>
                <span className="pass-n">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.short}</p>
                </div>
                <span className="stamp">{step.stamp}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="pass-stub">
          <small>Final stamp</small>
          <span className="final">Reimbursed</span>
        </div>
      </div>

      <div className="steps phone-only">
        <h3 className="how phone-only">How it works</h3>
        <ol>
          {STEPS.map((step, i) => (
            <li key={step.title} className={`step${i === openStep ? " is-open" : ""}`}>
              <span className="dot">{i + 1}</span>
              <div>
                <h3>
                  <button className="step-btn" aria-expanded={i === openStep} onClick={() => setOpenStep(i === openStep ? -1 : i)}>
                    {step.title}
                    <Icon name="chevronDown" />
                  </button>
                </h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
