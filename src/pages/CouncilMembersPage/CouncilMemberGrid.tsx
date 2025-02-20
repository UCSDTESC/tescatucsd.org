import { councilMemberData } from "./council-member-data";
import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon";

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
          className="flex flex-col justify-center items-center"
        >
          <img
            className="h-64 w-64 object-contain object-center rounded-standard"
            src={`council-member-logos/${councilMember.Image}`}
            alt=""
          ></img>
          <p className="text-center">
            <span className="font-bold">{`${councilMember.Name} ${
              councilMember.Name != councilMember.OrgAcronym &&
              `(${councilMember.OrgAcronym})`
            }`}</span>
            <br />
            {councilMember.Links}
          </p>
        </div>
      ))}
    </>
  );
}
