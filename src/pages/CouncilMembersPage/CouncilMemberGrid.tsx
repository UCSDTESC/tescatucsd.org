import React from "react";
import { councilMemberData } from "./council-member-data";
import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon";

export default function CouncilMemberGrid() {
  const imagePreloader = useImagePreloader(
    councilMemberData.map(
      (councilMember) => `/council-member-logos/${councilMember.Image}`
    )
  );
  return (
    <>
      {imagePreloader?.imagesPreloaded ? (
        councilMemberData.map(
          (member: {
            Name: string;
            OrgAcronym: string;
            Links: string[];
            Image: string;
          }) => (
            <div
              key={member.OrgAcronym}
              className="flex flex-col justify-center items-center"
            >
              <img
                className="h-80 w-64 object-cover rounded-standard"
                src={member.Image}
                alt=""
              ></img>
              <p className="text-center">
                <span className="font-bold">{`${member.Name} ${
                  member.Name != member.OrgAcronym && `(${member.OrgAcronym})`
                }`}</span>
                <br />
                {member.Links}
              </p>
            </div>
          )
        )
      ) : (
        <LoadingIcon />
      )}
    </>
  );
}
