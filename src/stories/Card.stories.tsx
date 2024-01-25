import React from "react";
import { SkillCard } from "../components/Card";
import htmlImg from "../assets/images/html.png";

export default {
  title: "components/skillCard",
  component: SkillCard,
  parameters: { status: { type: "beta" } },
};

export const HtmlMain = (args: any) => {
  return <SkillCard techImg={htmlImg} {...args} />;
};

HtmlMain.args = {
  lable: "HTML",
  md: 4,
  sm: 6,
};
