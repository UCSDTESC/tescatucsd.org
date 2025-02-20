import React from "react";
import { councilMemberData } from "./council-member-data";
import useImagePreloader from "../../Hooks/useImagePreload";

export default function CouncilMemberGrid() {
  const imagePreloader = useImagePreloader(
    councilMemberData.map(
      (councilMember) => `council-member-logos/${councilMember.OrgAcronym}`
    )
  );
  return <div>CouncilMemberGrid</div>;
}
