import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Button, Grid, Typography, Card } from "@mui/material";
import { TypeWritter } from "../components/TypeWritter";
import Dp from "../assets/images/Dp-main 1test 1main_dp.png";
import { motion, useAnimation } from "framer-motion";
import { styled } from "@mui/system";
import { DownloadButton } from "../components/DownloadButton";
import HtmlImg from "../assets/images/html.png";
import { HashLink as Link } from "react-router-hash-link";
import toast from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";

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

  // const HeroContainer = styled("div")({
  //   position: "relative",
  //   display: "flex",
  //   flexDirection: "column",
  //   height: "100vh",
  //   width: "100%",
  // });

  // const Video = styled("video")({
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "auto",
  //   objectFit: "cover",
  // });

  const Section = styled("section")({
    height: "100vh",
    width: "100%",
    overflowY: "auto",
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

  const handletriger = () => {
    toast.success("success", { duration: 3000 });
  };

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
          <Grid item md={5} sm={12} height="100%">
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
              <img
                src={Dp}
                className="homeImg"
                style={{
                  height: "90%",
                  width: "85%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </motion.div>
          </Grid>
          <Grid item md={7} sm={12}>
            <Grid
              item
              md={12}
              sm={12}
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <TypeWritter
                sx={{
                  fontSize: "30px",
                  // background: "linear-gradient(45deg,#1D5B79, #84D2C5)",
                  backgroundColor: "#F0A500",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: "bold",
                  paddingTop: "15px",
                }}
                speed={50}
                text="Ajith kumar"
              />
            </Grid>
            <Grid item md={12} sm={12} textAlign="center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {/* <TypeWritter
                  // fontSize={20}
                  // color="#ffffff"
                  sx={{
                    fontSize: "20px",
                    background: "linear-gradient(45deg,#1D5B79, #84D2C5)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontWeight: "bold",
                  }}
                  speed={60}
                  text="Front End Developer"
                /> */}
                <TypeAnimation
                  style={{
                    fontSize: "20px",
                    // background: "linear-gradient(45deg,#1D5B79, #84D2C5)",
                    background: "linear-gradient(180deg,#1D5B79, #84D2C5)",
                    // backgroundColor: "#FFD95A",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontWeight: "bold",
                  }}
                  sequence={[
                    "Front End Developer",
                    1000,
                    "FreeLancer",
                    1000,
                    "",
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
            </Grid>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
            >
              <Typography textAlign="center" color="#ffffff" padding={2}>
                Hello! I'm Ajith Kumar, a passionate Front End Developer with
                1.7 years of hands-on experience in crafting engaging and
                responsive web applications. My expertise spans a range of
                front-end technologies, including HTML, CSS, JavaScript,
                React.js, Redux, Next.js, TypeScript, React Native, and SQL. I
                had the privilege of contributing my skills to Flying Fox Labs
                as a Software Developer. Explore the projects in my portfolio to
                witness firsthand the innovative solutions I've brought to life.
                Let's build exceptional digital experiences together!
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
                  transition={{ duration: 2.5, delay: 2.8 }}
                >
                  <Link to="#contact">
                    <Button
                      // onClick={() => handletriger()}

                      sx={{
                        marginRight: "20px",
                        backgroundColor: "#F0A500",
                        borderRadius: "8px",

                        "&:hover": {
                          backgroundColor: "#F0A500", // Set to 'inherit' or any other desired value
                        },
                      }}
                      variant="contained"
                    >
                      <Typography color="#000000" fontWeight="600">
                        Contact Me
                      </Typography>
                    </Button>
                  </Link>
                  <DownloadButton
                    sx={{
                      background: "linear-gradient(180deg,#1D5B79, #468B97)",
                      borderRadius: "8px",
                    }}
                    textSx={{ color: "#000000", fontWeight: "600" }}
                    path={resumePath}
                  >
                    Resume
                  </DownloadButton>
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
