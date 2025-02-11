import { Suspense } from "react";
import SponsorsGrid from "./SponsorsGrid";
import LoadingIcon from "./LoadingIcon";
import "./Sponsors.css";

const sponsors = [
  { id: 1, 
    logo: "/logos/L3Harris_2.jpg", 
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
  { id: 6, 
    logo: "/logos/Freeform_Logo.jpg", 
    alt: "Freeform", 
    website: "https://freeform.co/"
  },
  { id: 7, 
    logo: "/logos/Keller_North_America.png", 
    alt: "Keller", 
    website: "https://www.keller-na.com/"
  },
  { id: 8, 
    logo: "/logos/tsmc_logo2.png", 
    alt: "TSMC", 
    website: "https://www.tsmc.com/english"
  },
];

export default function Sponsors() {
  return (
    <div className="mb-[7rem] flex justify-center">
      <div className="w-[70%]">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Sponsors
        </h1>

        <div className="grid gap-[1rem] grid-cols-3 justify-center">
          <Suspense fallback={<LoadingIcon />}>
            <SponsorsGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}