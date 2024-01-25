import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import backImg from "../../assets/images/john-paul.jpg";

export interface SkillCardProps {
  techImg: string;
  lable: string;
  value?: string;
  md?: number;
  sm?: number;
}

export const SkillCard = (props: SkillCardProps) => {
  return (
    <Grid container md={props.md} sm={props.sm} justifyContent="center">
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          // flex: "0.8",
          height: "25%",
          width: "50%",
          padding: "3%",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(5px)",
          webkitBackdropFilter: "blur(5px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "15px",
        }}
      >
        <img
          src={props.techImg}
          style={{
            width: "70px",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Typography textAlign="center" color="#ffffff" paddingTop={2}>
          {props.lable}
        </Typography>
      </Card>
    </Grid>
  );
};
