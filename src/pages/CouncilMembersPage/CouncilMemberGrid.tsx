import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon";
import { CouncilMember } from "./council-member-data";
import CouncilMemberCard from "./CouncilMemberCard";

interface Props {
  data: CouncilMember[];
}
export default function CouncilMemberGrid({ data }: Props) {
  const imagePreloader = useImagePreloader(
    data.map((councilMember) => `council-member-logos/${councilMember.Image}`)
  );
  return (
    <>
      {imagePreloader.imagesPreloaded ? (
        data.map((councilMember, index) => (
          <CouncilMemberCard key={index} councilMember={councilMember} />
        ))
      ) : (
        <LoadingIcon />
      )}
    </>
  );
}
