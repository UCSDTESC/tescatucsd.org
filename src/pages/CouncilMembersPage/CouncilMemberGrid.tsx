import { councilMemberData } from "./council-member-data";
import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon";
import { TbWorldWww } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

export default function CouncilMemberGrid() {
  const imagePreloader = useImagePreloader(
    councilMemberData.map(
      (councilMember) => `council-member-logos/${councilMember.Image}`
    )
  );
  return (
    <>
      {imagePreloader.imagesPreloaded ? (
        councilMemberData.map((councilMember, index) => (
          <div
            key={index}
            className="w-72 h-88 bg-white shadow-2xl rounded-standard p-3 mx-4"
          >
            <div
              key={index}
              className="max-h-[14rem] h-[14rem] overflow-hidden"
            >
              <img
                className="w-full h-full object-fill rounded-standard"
                src={`council-member-logos/${councilMember.Image}`}
                alt={councilMember.Name}
              />
            </div>
            <div key={councilMember.OrgAcronym} className="p-2 flex flex-col">
              <p className="text-center font-semibold">{councilMember.Name}</p>
              <div className="flex flex-row justify-center items-center gap-3">
                <a href={councilMember.Links[0]}>
                  <TbWorldWww size={22} />
                </a>
                <a href={`https://www.instagram.com/${councilMember.Links[1]}`}>
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <LoadingIcon />
      )}
    </>
  );
}
