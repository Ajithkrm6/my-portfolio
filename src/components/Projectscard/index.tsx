import React from "react";
import { Grid, Card, Typography, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface ProjectCardProps {
  img: string;
  lable: string;
  md?: number;
  sm?: number;
  description?: string;
  link?: string;
  onClick?: () => void;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Grid container md={props.md} sm={props.sm} justifyContent="center">
      <Card
        sx={{
          width: "200px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(5px)",
          webkitBackdropFilter: "blur(5px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          paddingBottom={1}
        >
          <Grid item>
            <ChevronLeftIcon sx={{ color: "#ffffff" }} />
          </Grid>
          <Grid item>
            <Typography color="#ffffff">{props.lable}</Typography>
          </Grid>
          <Grid item>
            <ChevronRightIcon sx={{ color: "#ffffff" }} />
          </Grid>
        </Grid>

        <img
          src={props.img}
          style={{
            width: "170px",
            justifyContent: "center",
            alignItems: "center",
          }}
        />

        <Grid container paddingTop={1}>
          <Typography color="#ffffff" textAlign="start">
            Description: {props.description}
          </Typography>
        </Grid>
        <Button>view more</Button>
      </Card>
    </Grid>
  );
};