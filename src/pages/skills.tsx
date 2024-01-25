import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { SkillCard } from "../components/Card";

export const SkillScreen = () => {
  const techSkillsData = [
    { img: require("../assets/images/html.png"), lable: "HTML" },
    { img: require("../assets/images/css.png"), lable: "CSS" },
    { img: require("../assets/images/js.png"), lable: "JavaScript" },
    { img: require("../assets/images/react.png"), lable: "React.JS" },
    { img: require("../assets/images/redux.png"), lable: "Redux" },
    { img: require("../assets/images/next.png"), lable: "Next.JS" },
    { img: require("../assets/images/ReactNative.png"), lable: "ReactNative" },
    { img: require("../assets/images/ts.png"), lable: "TypeScript" },
    { img: require("../assets/images/mysql.png"), lable: "My Sql" },
    { img: require("../assets/images/mui.png"), lable: "MaterialUI" },
  ];

  const Section = styled("section")({
    height: "100vh",
    width: "100%",
    overflowY: "auto",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  });

  return (
    <Section id="skills">
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
      >
        <Typography textAlign="start" variant="h4" color="primary">
          Skills
        </Typography>

        <Grid
          paddingTop="30px"
          container
          // flexDirection="row" // Set row layout for larger screens
          justifyContent="center"
          alignItems="center"
          spacing={1} // Adjust the gap between the cards
        >
          {techSkillsData.map((skill, index) => (
            <Grid item key={index} xs={12} md={3} sm={3}>
              <SkillCard techImg={skill.img} lable={skill.lable} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
};
