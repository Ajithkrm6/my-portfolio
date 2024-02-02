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

          height: "100px",
          width: "200px",
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
          alt="technology image"
          style={{
            width: "70px",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Typography
          textAlign="center"
          sx={{
            background: "linear-gradient(180deg,#1D5B79, #468B97)",
            WebkitBackgroundClip: "text",
            color: "#ffffff",
            fontFamily: "PromptSemiBold",
            fontWeight: "bold",
          }}
          paddingTop={2}
        >
          {props.lable}
        </Typography>
      </Card>
    </Grid>
  );
};

// import React from "react";
// import { Grid, Card, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// export interface SkillCardProps {
//   techImg: string;
//   lable: string;
//   value?: string;
//   md?: number;
//   sm?: number;
// }

// export const SkillCard = (props: SkillCardProps) => {
//   return (
//     <Grid container md={props.md} sm={props.sm} justifyContent="center">
//       <Card
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           margin: "10px",
//           height: "20%",
//           width: "45%",
//           padding: "3%",
//           background: "rgba(255, 255, 255, 0.2)",
//           backdropFilter: "blur(5px)",
//           webkitBackdropFilter: "blur(5px)",
//           boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//           border: "1px solid rgba(255, 255, 255, 0.3)",
//           borderRadius: "15px",
//           // position: "relative", // Set the position to relative
//           // overflow: "hidden", // Clip the glowing effect
//         }}
//       >
//         <img
//           src={props.techImg}
//           style={{
//             width: "70px",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         />
//         <Typography
//           textAlign="center"
//           sx={{
//             background: "linear-gradient(180deg,#1D5B79, #468B97)",
//             WebkitBackgroundClip: "text",
//             color: "#000000",
//             fontWeight: "bold",
//           }}
//           paddingTop={2}
//         >
//           {props.lable}
//         </Typography>

//         {/* Bulb-like highlight effect */}
//         {/* <motion.div

//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "100px",
//             height: "100px",
//             borderRadius: "50%",
//             background:
//               "radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 100%)",
//             boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)",
//             animation: "glow 2s infinite",
//           }}
//         ></motion.div> */}
//       </Card>
//     </Grid>
//   );
// };
