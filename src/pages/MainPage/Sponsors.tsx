import "./Sponsors.css";

const sponsors = [
  { id: 1, logo: "/logos/L3Harris_Logo.png", alt: "L3Harris" },
  {
    id: 2,
    logo: "/logos/Dynovas Matrix Logo (Final).jpg",
    alt: "Dynovas",
  },
  { id: 3, logo: "/logos/LLNLlogoBLACK.jpg", alt: "LLNL" },
  {
    id: 4,
    logo: "/logos/Viasat_2018_Gradient_Web (1).jpg",
    alt: "Viasat",
  },
  { id: 5, logo: "/logos/LANL_Logo_Temp.png", alt: "LANL" },
];

const Sponsors = () => {
  const SponsorsSection = (
    <div class="container">
      <h1>Sponsors</h1>

      <div>
        <h3>
          {" "}
          <a href="https://google.com" title="Sponsors">
            {" "}
            See all sponsors →{" "}
          </a>{" "}
        </h3>
      </div>

      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-item">
            <img src={sponsor.logo} alt={sponsor.alt} />
          </div>
        ))}
      </div>
    </div>
  );

  return SponsorsSection;
};

export default Sponsors;
