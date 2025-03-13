import { useState } from "react";
import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon.tsx";
import {
  pvpData,
  committeeLeadsData,
  social,
  tech,
  design,
  marketing,
  operations,
  sponsorship,
  prodev,
} from "./member-info.tsx";
import { Section } from "./Section.tsx";

export default function AboutUsContent() {
  const membersData = [
    pvpData,
    committeeLeadsData,
    social,
    tech,
    design,
    marketing,
    operations,
    sponsorship,
    prodev,
  ];

  const imagePreloader = useImagePreloader(
    membersData.map((category) => category.map((member) => member[3])).flat()
  );

  if (imagePreloader?.imagesPreloaded) {
    return (
      <>
        <Section data={pvpData} title="President, Vice President" />
      </>
    );
  } else {
    return <LoadingIcon />;
  }
}
