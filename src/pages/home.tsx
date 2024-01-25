import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Button, Grid, Typography, Card } from "@mui/material";
import { TypeWritter } from "../components/TypeWritter";
import Dp from "../assets/images/groudDp.png";
import { motion, useAnimation } from "framer-motion";
import { styled } from "@mui/system";
import { DownloadButton } from "../components/DownloadButton";
import HtmlImg from "../assets/images/html.png";

export const HomeScreen = () => {
  const [offSetY, setOffSetY] = useState(0);
  const handleOffSet = () => setOffSetY(window.scrollY);

  const backgroundVideo = require("../assets/videos/blackhole.webm");
  const resumePath = require("../assets/AjithKumar.pdf");
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
    });
  }, [controls]);

  const HeroContainer = styled("div")({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  });

  const Video = styled("video")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "auto",
    objectFit: "cover",
  });

  const Section = styled("section")({
    height: "100vh",
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
  });

  const Html = styled("html")({
    scrollSnapType: "y",
    scrollBehavior: "smooth",
  });

  useEffect(() => {
    const resumePath = require("../assets/AjithKumar.pdf");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleOffSet);

    return window.removeEventListener("scroll", handleOffSet);
  }, [offSetY]);

  return (
    <Section id="home">
      <Grid
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} sm={12}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  height: "25%",
                  width: "50%",
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  webkitBackdropFilter: "blur(5px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "15px",
                }}
              >
                <img
                  src={Dp}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Card>
            </motion.div>
          </Grid>
          <Grid item md={6} sm={12}>
            <Grid
              item
              md={12}
              sm={12}
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <TypeWritter
                fontSize={30}
                color="#ffffff"
                speed={60}
                text="Hi I am Ajith Kumar"
              />
            </Grid>
            <Grid item md={12} sm={12} textAlign="center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <TypeWritter
                  fontSize={20}
                  color="#ffffff"
                  speed={60}
                  text="Front End Developer"
                />
              </motion.div>
            </Grid>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <Typography textAlign="center" color="#ffffff">
                As a front-end developer, the primary focus is on crafting
                engaging and user-friendly experiences on the web. This involves
                translating design mockups into responsive and interactive
                interfaces using a combination of HTML, CSS, and JavaScript.
                Attention to detail is paramount, ensuring that the visual
                elements align with the overall design aesthetic and brand
                identity. Front-end developers often collaborate closely with
                UX/UI designers to bring their creative visions to life. Keeping
                up with the latest web technologies and trends is crucial, as it
                empowers developers to build modern and efficient web
                applications that deliver a seamless user experience across
                various devices and browsers.
              </Typography>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
                paddingTop={2}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 2.5 }}
                >
                  <Button
                    sx={{
                      marginRight: "20px",
                      background: "linear-gradient(45deg,#1D5B79, #468B97)",
                    }}
                    variant="contained"
                  >
                    contact me
                  </Button>
                  <DownloadButton path={resumePath}>Download CV</DownloadButton>
                </motion.div>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

//  <Section>
// <Grid
//   display="flex"
//   flexDirection="column"
//   alignItems="center"
//   justifyContent="center"
//   className="homeContainer"
//   style={{ transform: `translateY(${offSetY * 0.5}px)` }}
// >
//   {/* <Grid
//     container
//     display="flex"
//     alignItems="center"
//     justifyContent="center"
//   > */}
//   <Grid
//     bgcolor="red"
//     item
//     display="flex"
//     justifyContent="center"
//     alignItems="center"
//     flexDirection="row"
//     md={6}
//     padding={2}
//   >
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5, delay: 0.5 }}
//     >

//       <Card
//         sx={{
//           height: "25%",
//           width: "50%",
//           background: "rgba(255, 255, 255, 0.2)",
//           backdropFilter: "blur(5px)",
//           webkitBackdropFilter: "blur(5px)",
//           boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//           border: "1px solid rgba(255, 255, 255, 0.3)",
//           borderRadius: "15px",
//         }}
//       >
//         <img
//           src={Dp}
//           style={{
//             width: "100%",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         />
//       </Card>
//     </motion.div>
//   </Grid>
//   <Grid
//     bgcolor="yellow"
//     item
//     md={6}
//     display="flex"
//     alignItems="center"
//     justifyContent="center"
//     pt={3}
//   >
//     <Grid container display="flex" flexDirection="column">
//       <Grid
//         item
//         md={12}
//         sm={12}
//         alignItems="center"
//         justifyContent="center"
//         textAlign="center"
//       >
//         <TypeWritter
//           fontSize={30}
//           color="#ffffff"
//           speed={60}
//           text="Ajith kumar"
//         />
//       </Grid>
//       <Grid item md={12} sm={12} textAlign="center">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//         >
//           <TypeWritter
//             fontSize={20}
//             color="#ffffff"
//             speed={60}
//             text="Front End Developer"
//           />
//         </motion.div>
//       </Grid>
//       <Grid item md={12} sm={12} p={2}>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 2 }}
//         >
//           <Typography textAlign="center" color="#ffffff">
//             As a front-end developer, the primary focus is on crafting
//             engaging and user-friendly experiences on the web. This
//             involves translating design mockups into responsive and
//             interactive interfaces using a combination of HTML, CSS, and
//             JavaScript. Attention to detail is paramount, ensuring that
//             the visual elements align with the overall design aesthetic
//             and brand identity. Front-end developers often collaborate
//             closely with UX/UI designers to bring their creative visions
//             to life. Keeping up with the latest web technologies and
//             trends is crucial, as it empowers developers to build modern
//             and efficient web applications that deliver a seamless user
//             experience across various devices and browsers.
//           </Typography>
//         </motion.div>
//       </Grid>
//       <Grid
//         item
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5, delay: 2.5 }}
//         >
//           <Button>contact me</Button>
//           <DownloadButton path={resumePath}>Download CV</DownloadButton>
//         </motion.div>
//       </Grid>
//     </Grid>
//   </Grid>
// </Grid>
// </Grid>
// </Section>
