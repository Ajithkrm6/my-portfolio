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
  const resumePath = require("../assets/Ajith-kumar.pdf");
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
    });
  }, [controls]);

  const Section = styled("section")({
    height: "100vh",

    width: "100%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });

  useEffect(() => {
    const resumePath = require("../assets/Ajith-kumar.pdf");
  }, []);

  return (
    <Section id="home">
      <Grid container display="flex">
        <Grid
          item
          md={5}
          sm={12}
          paddingTop={3}
          // display="flex"
          // flexDirection="column"
          // justifyContent="center"
          // alignItems="center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              alt="dp image"
              src={Dp}
              className="homeImg"
              style={{
                height: "90%",
                width: "80%",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </motion.div>
        </Grid>
        <Grid
          item
          md={7}
          sm={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          padding={1}
        >
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item justifyContent="center">
              <TypeWritter
                sx={{
                  fontSize: "28px",
                  fontFamily: "PromptBold",
                  backgroundColor: "#F0A500",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: "900",
                  paddingTop: "15px",
                }}
                speed={50}
                text="Ajithh Kumar"
              />
            </Grid>
            <Grid item>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <TypeAnimation
                  style={{
                    fontSize: "20px",
                    fontFamily: "PromptBold",
                    // background: "linear-gradient(45deg,#1D5B79, #84D2C5)",
                    background: "linear-gradient(180deg,#1D5B79, #84D2C5)",
                    // backgroundColor: "#FFD95A",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontWeight: "bold",
                  }}
                  sequence={[
                    "Software Developer",
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

            <Grid item>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 2 }}
              >
                <Typography
                  textAlign="center"
                  fontFamily="PromptSemiBold"
                  color="#ffffff"
                  fontSize="15px"
                  padding={2}
                >
                  Hello..! I'm Ajith Kumar, a skilled Software Developer with 4+
                  years of experience in software development, primarily
                  specializing in front-end technologies. My expertise includes
                  HTML, CSS, JavaScript, React.js, Redux, Next.js, TypeScript,
                  React Native, and MYSQL. I take pride in delivering innovative
                  solutions and exceptional digital experiences. Explore my
                  portfolio to see my work, and let's create exceptional digital
                  experiences together!
                </Typography>
              </motion.div>
            </Grid>

            <Grid item>
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
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
