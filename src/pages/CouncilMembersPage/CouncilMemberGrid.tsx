import { councilMemberData } from "./council-member-data";
import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon";
import { TbWorldWww } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

export default function CouncilMemberGrid() {
  //   const imagePreloader = useImagePreloader(
  //     councilMemberData.map(
  //       (councilMember) => `council-member-logos/${councilMember.Image}`
  //     )
  //   );
  return (
    <>
      {councilMemberData.map((councilMember) => (
        <div
          key={councilMember.OrgAcronym}
          className="flex flex-col justify-center items-center rounded-standard gap-3"
        >
          <img
            className="h-52 w-52 object-contain object-center rounded-standard  shadow-xl"
            src={`council-member-logos/${councilMember.Image}`}
            alt=""
          ></img>
          <p className="text-center font-bold">
            {councilMember.Name}{" "}
            {councilMember.Name != councilMember.OrgAcronym && (
              <span className="font-normal">{`(${councilMember.OrgAcronym})`}</span>
            )}
          </p>
          <div className="flex flex-row gap-3">
            <a href={councilMember.Links[0]}>
              <TbWorldWww size={22} />
            </a>
            <a href={`https://www.instagram.com/${councilMember.Links[1]}`}>
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
