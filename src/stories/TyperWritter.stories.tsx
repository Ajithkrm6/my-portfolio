import React from "react";
import { TypeWritter } from "../components/TypeWritter";

export default {
  title: "components/TypeWritter",
  component: TypeWritter,
  parameters: { status: { type: "Beta" } },
};

export const main = (args: any) => {
  return <TypeWritter {...args} />;
};
main.args = {
  speed: 50,
  text: "I am a Front End developer",
};
