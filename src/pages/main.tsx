import React from "react";

import { Grid, Divider } from "@mui/material";
import { Header } from "../components/Header";
import { HomeScreen } from "./home";
import { SkillScreen } from "./skills";
import { ProjectScreen } from "./projects";
import { ContactScreen } from "./contactMe";

export const MainScreen = () => {
  return (
    <Grid className="mainContainer">
      <Header
        sx={{
          color: "#F0A500",
          fontFamily: "PromptSemiBold",
          fontWeight: "900",
          fontSize: "20px",
        }}
      >
        Ajith Kumar
      </Header>
      <HomeScreen />
      <SkillScreen />
      <ProjectScreen />
      <ContactScreen />
    </Grid>
  );
};
