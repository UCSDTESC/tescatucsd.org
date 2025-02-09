// import "./Sponsors.css";

const sponsors = [
  {
    id: 1,
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
  {
    id: 3,
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
  {
    id: 5,
    logo: "/logos/LANL_Logo_Temp.png",
    alt: "LANL",
    website: "https://www.lanl.gov/"
  }
];

const Sponsors = () => {
  const SponsorsSection = (
    <div className="mb-[7rem] flex justify-center">
      <div className="max-w-[70%]">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Sponsors
        </h1>

        <div className="grid gap-[1rem] grid-cols-3 justify-center">
          {sponsors.map((sponsor) => (
            <a href={sponsor.website}>
              <div key={sponsor.id} className="sponsor-item">
                <img
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  className="max-w-full max-h-[60px] object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return SponsorsSection;
};

export default Sponsors;
