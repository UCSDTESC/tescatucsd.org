import "./Sponsors.css";

const sponsors = [
  { id: 1, 
    logo: "/logos/L3Harris_Logo.png", 
    alt: "L3Harris", 
    website: "https://www.l3harris.com/" 

  },
  {
    id: 2,
    logo: "/logos/Dynovas Matrix Logo (Final).jpg",
    alt: "Dynovas", 
    website: "https://www.dynovas.com/" 
  },
  { id: 3, 
    logo: "/logos/LLNLlogoBLACK.jpg", 
    alt: "LLNL", 
    website: "https://www.llnl.gov/" 
  },
  {
    id: 4,
    logo: "/logos/Viasat_2018_Gradient_Web (1).jpg",
    alt: "Viasat", 
    website: "https://www.viasat.com/" 
  },
  { id: 5, 
    logo: "/logos/LANL_Logo_Temp.png", 
    alt: "LANL", 
    website: "https://www.lanl.gov/"
  },
];

const Sponsors = () => {
  const SponsorsSection = (
    <div className="container spacer">
      <h1>Sponsors</h1>

      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <a href={sponsor.website}>
            <div key={sponsor.id} className="sponsor-item">
              <img src={sponsor.logo} alt={sponsor.alt} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return SponsorsSection;
};

export default Sponsors;
