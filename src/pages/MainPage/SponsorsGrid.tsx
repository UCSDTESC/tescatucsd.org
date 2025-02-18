import "./Sponsors.css";
import { sponsors } from "./Sponsors-info";

import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "./LoadingIcon";
// const sponsors = [
//   {
//     id: 1,
//     logo: "/logos/L3Harris_Logo.png",
//     alt: "L3Harris",
//     website: "https://www.l3harris.com/"
//   },
//   {
//     id: 2,
//     logo: "/logos/Dynovas Matrix Logo (Final).jpg",
//     alt: "Dynovas",
//     website: "https://www.dynovas.com/"
//   },
//   {
//     id: 3,
//     logo: "/logos/LLNLlogoBLACK.jpg",
//     alt: "LLNL",
//     website: "https://www.llnl.gov/"
//   },
//   {
//     id: 4,
//     logo: "/logos/Viasat_2018_Gradient_Web (1).jpg",
//     alt: "Viasat",
//     website: "https://www.viasat.com/"
//   },
//   {
//     id: 5,
//     logo: "/logos/LANL_Logo_Temp.png",
//     alt: "LANL",
//     website: "https://www.lanl.gov/"
//   }
// ];

export default function SponsorsGrid() {
  const imgsLoaded = useImagePreloader(sponsors.map((sponsor) => sponsor.logo));
  return (
    <>
      {imgsLoaded.imagesPreloaded ? (
        sponsors.map(
          (sponsor: {
            website: string;
            id: number;
            logo: string;
            alt: string;
          }) => (
            <a href={sponsor.website}>
              <div
                key={sponsor.id}
                className="sponsor-item h-[100px] overflow-clip"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  className="w-5/8 object-fit "
                />
              </div>
            </a>
          )
        )
      ) : (
        <LoadingIcon />
      )}
    </>
  );
}
