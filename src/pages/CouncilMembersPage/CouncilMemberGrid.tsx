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
          className="flex flex-col justify-center items-center rounded-standard"
        >
          <img
            className="h-52 w-52 object-contain object-center rounded-standard  shadow-2xl"
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
