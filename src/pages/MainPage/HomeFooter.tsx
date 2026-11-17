import { Link } from "react-router-dom";
import Icon from "./Icon";
import SectionLink from "./SectionLink";

// brand logos (filled shapes, unlike the line icons in Icon.tsx)
const DISCORD_PATH =
  "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z";
const X_PATH = "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z";

const BrandIcon = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
);

/** The blue footer of the homepage. */
export default function HomeFooter() {
  return (
    <footer className="foot on-dark" id="footer">
      <div className="foot-top">
        <div className="foot-cta">
          <h2>Connect with TESC</h2>
          <ul className="social">
            <li>
              <Link to="/discord" aria-label="TESC on Discord">
                <BrandIcon path={DISCORD_PATH} />
              </Link>
            </li>
            <li>
              <a href="https://www.instagram.com/tesc.at.ucsd" aria-label="TESC on Instagram">
                <Icon name="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/tescatucsd" aria-label="TESC on LinkedIn">
                <Icon name="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://x.com/UCSDTESC/" aria-label="TESC on X">
                <BrandIcon path={X_PATH} />
              </a>
            </li>
          </ul>
        </div>
        <div className="cols">
          <div>
            <h3>Explore</h3>
            <ul>
              <li>
                <SectionLink to="#events">Events</SectionLink>
              </li>
              <li>
                <SectionLink to="#orgs">Organizations</SectionLink>
              </li>
              <li>
                <SectionLink to="#funding">Funding</SectionLink>
              </li>
              <li>
                <Link to="/accomplishments">Accomplishments</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Council</h3>
            <ul>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/about-us">Board members</Link>
              </li>
              <li>
                <SectionLink to="#sponsors">Sponsors</SectionLink>
              </li>
            </ul>
          </div>
          <div className="col-contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:contact@tescatucsd.org">contact@tescatucsd.org</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* the non-discrimination policy from the old homepage, word for word */}
      <p className="policy">
        In accordance with applicable Federal and State law and University policy, TESC does not discriminate, or grant preferences, on the basis
        of race, color, national origin, religion, sex, gender identity, citizenship, disability, and/or other protected categories. All enrolled
        students are encouraged to participate in TESC events and activities.
      </p>
      <div className="legal">
        <small>© {new Date().getFullYear()} Triton Engineering Student Council at UC San Diego</small>
        <SectionLink className="top-link" to="#top">
          Back to top <Icon name="up" />
        </SectionLink>
      </div>
    </footer>
  );
}
