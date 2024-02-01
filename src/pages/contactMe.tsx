import React, { useRef } from "react";
import {
  Grid,
  OutlinedInput,
  TextField,
  Typography,
  Link,
  Button,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
// import { styled } from "@mui/system";
import cartoon from "../assets/images/cartoonWB.png";
import instagram from "../assets/images/5296765_camera_instagram_instagram logo_icon.png";
import gitLab from "../assets/images/gitlab-logo-200.png";
import gitHub from "../assets/images/pngimg.com - github_PNG85.png";
import linkedIN from "../assets/images/linkedin-logo-png-2026.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";
import { styled } from "@mui/system";

export const ContactScreen = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zh9bu2m",
        "template_mp37cf5",
        form.current!,
        "gJID15N1bgTiFOHwM"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          if ((result.status = 200)) {
            form.current!.reset();
            toast.success("message sent successfully", { duration: 3000 });
          }
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  const Section = styled("section")({
    height: "100%",
    width: "100%",
  });

  // const handleSubmit = (values: any) => {
  //   return;
  // };

  // const contactMeSchema = yup.object().shape({
  //   user_name: yup.string().required("Please enter the name"),
  //   user_email: yup.string().required("Please enter email"),
  //   message: yup.string().required("Please enter the message"),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     user_name: "",
  //     user_email: "",
  //     message: "",
  //   },
  //   validationSchema: contactMeSchema,
  //   onSubmit: (values, { resetForm }) => {

  //     console.log(values);
  //     emailjs
  //       .sendForm(
  //         "service_zh9bu2m",
  //         "template_mp37cf5",
  //         form.current!,
  //         "gJID15N1bgTiFOHwM"
  //       )
  //       .then(
  //         (result: any) => {
  //           console.log(result.text);
  //           if ((result.status = 200)) {
  //             resetForm();
  //             toast.success("message sent successfully", { duration: 3000 });
  //           }
  //         },
  //         (error: any) => {
  //           console.log(error.text);
  //         }
  //       );
  //   },
  // });

  // const handleChange = (e:any) => {
  //   console.log('handleChange triggered:', e.target.name, e.target.value);
  //   formik.handleChange(e);
  // };

  // const { errors, touched, handleBlur } = formik;

  const CustomTextField = styled(TextField)({
    borderStyle: "solid",
    borderWidth: "0.5px",
    borderRadius: "10px",
    borderColor: "#ffffff",
    color: "#ffffff",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px", // Set your default border radius
      "&:hover fieldset": {
        borderStyle: "none",
        borderColor: "#ffffff", // Set your hover border color
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        borderStyle: "solid",
        borderColor: "#ffffff", // Set your focused border color
        borderRadius: "10px", // Adjust the border radius when focused
        borderWidth: "0.5px",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "#ffffff", // Set your text color
    },
  });

  const customeInput = styled(OutlinedInput)({});

  return (
    <Section id="contact" data-aos="zoom-in">
      <Grid padding="3%">
        <Typography textAlign="start" variant="h4" color="#FFD95A">
          Contact
        </Typography>
        <Divider color="#7b8794" />
      </Grid>

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
          height="75%"
          display="flex"
          justifyContent="center"
          className="glassomorphic"
          borderRadius="30px"
        >
          <Grid md={12} sm={12} xs={12}>
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
              Let's Connect
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
              <form ref={form} onSubmit={sendEmail}>
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
                      name="user_name"
                      // value={formik.values.user_name}

                      sx={{
                        "&.MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#ffffff",
                            borderRadius: "10px",
                          },
                          "&:hover fieldset": {
                            borderColor: "#ffffff",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                            borderRadius: "10px",
                          },
                        },
                        color: "#ffffff",
                      }}

                      // onBlur={handleBlur}
                      // onChange={handleChange}
                    />
                    {/* {errors.user_name && touched.user_name && (
                      <Typography fontSize="12px" color="red">
                        {errors.user_name}
                      </Typography>
                    )} */}
                  </Grid>
                </Grid>
                <Grid
                  paddingTop={1}
                  item
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid>
                    <Typography textAlign="start" color="#ffffff">
                      Email
                    </Typography>
                    <OutlinedInput
                      name="user_email"
                      sx={{
                        "&.MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#ffffff",
                            borderRadius: "10px",
                          },
                          "&:hover fieldset": {
                            borderColor: "#ffffff",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ffffff",
                            borderRadius: "10px",
                          },
                        },
                        color: "#ffffff",
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  paddingTop={1}
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
                    {/* <TextField
                      name="message"
                      sx={{ 
                         borderStyle: "solid",
                        borderWidth: "0.5px",
                        borderColor: "#ffffff",
                        color: "#ffffff",
                         borderRadius: "10px",
                      }}
                     /> */}
                    <CustomTextField name="message" />
                  </Grid>
                </Grid>
                <Grid
                  paddingTop={2}
                  item
                  justifyContent="center"
                  alignContent="center"
                  textAlign="center"
                >
                  <Button
                    type="submit"
                    sx={{
                      background: "linear-gradient(45deg,#1D5B79, #468B97)",
                      borderRadius: "8px",
                    }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
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
