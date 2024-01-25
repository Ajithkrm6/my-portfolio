import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ProjectCard } from "../components/Projectscard";
import giftCards from "../assets/images/Premiumgiftcard.png";

export const ProjectScreen = () => {
  const [project, setProject] = useState({});

  const Section = styled("section")({
    height: "100vh",
    width: "100%",
    overflowY: "auto",
  });

  const projectData = [
    {
      id: 1,
      title: "Gift Cards",
      description:
        "Gift cards are a way to use premimum features in QuickCam app",
      Role: "",
      detailedDescription: "",
    },
    {
      id: 2,
      title: "Zk Poker",
      description: "ZKpoker is a poker game based on Texas Holdem Model.",
      Role: "",
      detailedDescription: "",
    },
    {
      id: 3,
      title: "ExperienceHub-Ai",
      description: "Different ai modles are gruped at single platform where...",
      Role: "",
      detailedDescription: "",
    },
  ];

  return (
    <Section id="projects">
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
      >
        <Typography color="#ffffff" variant="h4">
          Projects
        </Typography>
        <Grid
          paddingTop="30px"
          container
          // flexDirection="row" // Set row layout for larger screens
          justifyContent="center"
          alignItems="center"
          spacing={1} // Adjust the gap between the cards
        >
          {projectData.map((item, index) => (
            <Grid item key={index} xs={12} md={3} sm={3}>
              <ProjectCard
                lable={item.title}
                description={item.description}
                img={giftCards}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
};

{
  /* <Typography color="#ffffff">Projects</Typography>
        {projectData.map((item, index) => (
          <Grid item key={index}>
            <ProjectCard
              md={4}
              sm={3}
              img={giftCards}
              lable={item.title}
              description={item.description}
              link="View More"
              onClick={() => setProject(item)}
            />
          </Grid>
        ))} */
}
