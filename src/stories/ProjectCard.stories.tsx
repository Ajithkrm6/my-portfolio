import React from "react";
import { ProjectCard } from "../components/Projectscard";
import giftcard from "../assets/images/Premiumgiftcard.png";

export default {
  title: "components/ProjectCard",
  component: ProjectCard,
  parameters: { status: { type: "beta" } },
};

export const main = (args: any) => {
  return <ProjectCard img={giftcard} {...args} />;
};

main.args = {
  lable: "QuickCam Gift Cards",
  description: "Developed gift cards concept for QuickCam company",
};
