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
        <div className="flex flex-col gap-11">
          <Section data={pvpData} title="President, Vice President" />
          <Section data={committeeLeadsData} title="Committee Leads" />
          <Section data={social} title="Social Committee" />
          <Section data={tech} title="Tech Committee" />
          <Section data={design} title="Design Committee" />
          <Section data={marketing} title="Marketing Committee" />
          <Section data={operations} title="Operations Committee" />
          <Section data={sponsorship} title="Sponsorship Committee" />
          <Section data={prodev} title="ProDev Committee" />
        </div>
      </>
    );
  } else {
    return <LoadingIcon />;
  }
}
