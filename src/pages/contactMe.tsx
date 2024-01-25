import React from "react";
import {
  Grid,
  OutlinedInput,
  TextField,
  Typography,
  Link,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import cartoon from "../assets/images/cartoonWB.png";
import instagram from "../assets/images/5296765_camera_instagram_instagram logo_icon.png";
import gitLab from "../assets/images/gitlab-logo-200.png";
import gitHub from "../assets/images/pngimg.com - github_PNG85.png";
import linkedIN from "../assets/images/linkedin-logo-png-2026.png";

export const ContactScreen = () => {
  const Section = styled("section")({
    height: "100%",
    width: "100%",
  });
  return (
    <Section id="contact">
      <Typography textAlign="start" variant="h4" color="#ffffff">
        Contact
      </Typography>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid
          width="70%"
          id="contact"
          container
          height="70%"
          display="flex"
          justifyContent="center"
          className="glassomorphic"
          borderRadius="30px"
        >
          <Grid md={12}>
            <Typography
              sx={{
                background: "linear-gradient(45deg,#1D5B79, #84D2C5)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
                fontSize: "25px",
                textDecoration: "underline",
              }}
              textAlign="center"
            >
              Lets Connect
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <img src={cartoon} style={{ width: "100%" }} />
          </Grid>
          <Grid item md={6}>
            <Grid
              container
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
              spacing={2}
            >
              <Grid
                item
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid>
                  <Typography textAlign="start" color="#ffffff">
                    Name
                  </Typography>
                  <OutlinedInput
                    sx={{
                      borderStyle: "solid",
                      borderWidth: "0.5px",
                      borderColor: "#ffffff",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid>
                  <Typography textAlign="start" color="#ffffff">
                    Subject
                  </Typography>
                  <OutlinedInput
                    sx={{
                      borderStyle: "solid",
                      borderWidth: "0.5px",
                      borderColor: "#ffffff",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid>
                  <Typography textAlign="start" color="#ffffff">
                    Message
                  </Typography>
                  <TextField
                    sx={{
                      borderStyle: "solid",
                      borderWidth: "0.5px",
                      borderColor: "#ffffff",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                justifyContent="center"
                alignContent="center"
                textAlign="center"
              >
                <Button
                  sx={{
                    background: "linear-gradient(45deg,#1D5B79, #468B97)",
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>

              <Grid
                item
                padding={1}
                display="flex"
                flexDirection="row"
                width="100%"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid container justifyContent="center" flexWrap="wrap">
                  <Link href="https://www.instagram.com/ajithkrm6/">
                    <img
                      src={instagram}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </Link>

                  <Link href="https://gitlab.com/Ajithkrm6">
                    <img
                      src={gitLab}
                      style={{ height: "40px", width: "80px" }}
                    />
                  </Link>

                  <Link href="https://github.com/Ajithkrm6">
                    <img
                      src={gitHub}
                      style={{ height: "40px", width: "40px" }}
                    />
                  </Link>
                  <Link
                    sx={{ paddingLeft: "8px" }}
                    href="https://www.linkedin.com/in/ajith-kumar-gandikota/"
                  >
                    <img
                      src={linkedIN}
                      style={{
                        height: "30px",
                        width: "30px",
                        // paddingLeft: "5px",
                      }}
                    />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

// <Grid container width="60%" justifyContent="center">
//   {/* <Grid container width="70%" bgcolor="green" justifyContent="center"> */}
//   <Grid
//     item
//     md={6}
//     display="flex"
//     flexDirection="row"
//     justifyContent="center"
//     alignItems="center"
//   >
//     <img src={cartoon} style={{ width: "70%" }} />
//   </Grid>
//   <Grid item md={6} bgcolor="red">
//     <Grid
//       container
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       height="100%"
//       spacing={1}
//     >
//       <Grid
//         bgcolor="yellow"
//         item
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//         spacing={2}
//       >
//         <OutlinedInput />
//         <OutlinedInput />
//         <TextField />
//       </Grid>
//     </Grid>
//   </Grid>
// </Grid>;
