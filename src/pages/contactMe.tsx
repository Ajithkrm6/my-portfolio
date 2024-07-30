import React, { useRef, useState } from "react";
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
import { styled } from "@mui/system";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FormTest } from "../components/FormTest";

export const ContactScreen = () => {
  // const form = useRef<HTMLFormElement>(null);
  // const [error, setError] = useState({
  //   user_name: "",
  //   user_email: "",
  //   message: "",
  // });

  // const sendEmail = (e: any) => {
  //   e.preventDefault();

  //   const name = (form.current?.elements as any)["user_name"].value;
  //   const email = (form.current?.elements as any)["user_email"].value;
  //   const message = (form.current?.elements as any)["message"].value;

  //   const newError = {
  //     user_name: name ? "" : "Please enter the name",
  //     user_email: email ? "" : "Please enter the email",
  //     message: message ? "" : "Please enter the message",
  //   };

  //   setError(newError);

  //   if (Object.values(newError).some((error) => error !== "")) {
  //     return;
  //   } else {
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
  //             form.current!.reset();
  //             toast.success("message sent successfully", { duration: 3000 });
  //           }
  //         },
  //         (error: any) => {
  //           console.log(error.text);
  //         }
  //       );
  //   }
  // };

  const formValidation = Yup.object().shape({
    user_name: Yup.string().required("Please enter name"),
    user_email: Yup.string().required("Please enter email"),
    message: Yup.string().required("Please enter message"),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: formValidation,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(
          "service_zh9bu2m",
          "template_mp37cf5",
          document.getElementById("myForm") as HTMLFormElement,
          "gJID15N1bgTiFOHwM"
        )
        .then(
          (result: any) => {
            console.log(result.text);
            if ((result.status = 200)) {
              resetForm();
              toast.success("message sent successfully", { duration: 3000 });
            }
          },
          (error: any) => {
            console.log(error.text);
          }
        );
    },
  });

  const Section = styled("section")({
    height: "100%",
    width: "100%",
  });

  const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffffff",
        borderRadius: "10px",
      },
      "&:hover fieldset": {
        borderColor: "#ffffff",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffffff",
        borderRadius: "10px",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "#ffffff",
    },
  });

  const customeInput = styled(OutlinedInput)({});

  return (
    <Section id="contact" data-aos="zoom-in">
      <Grid padding="3%">
        <Typography
          textAlign="start"
          variant="h4"
          color="#FFD95A"
          fontFamily="PromptSemiBold"
        >
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
          width="90%"
          id="contact"
          container
          height="85%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="glassomorphic"
          borderRadius="30px"
          spacing={1}
          sx={{ overflowY: "auto" }}
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
                fontFamily: "PromptBold",
              }}
              textAlign="center"
            >
              Let's Connect
            </Typography>
          </Grid>

          <Grid
            item
            md={6}
            sm={12}
            display="flex"
            // flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <img src={cartoon} alt="contact img" style={{ width: "100%" }} />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={1}
          >
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <FormTest />
              </Grid>

              <Grid item paddingTop={2}>
                <Grid
                  container
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Link href="https://www.instagram.com/ajithkrm6/">
                    <img
                      alt="insta img"
                      src={instagram}
                      style={{ height: "35px", width: "35px" }}
                    />
                  </Link>

                  <Link href="https://gitlab.com/Ajithkrm6">
                    <img
                      alt="gitlab img"
                      src={gitLab}
                      style={{ height: "40px", width: "80px" }}
                    />
                  </Link>

                  <Link href="https://github.com/Ajithkrm6">
                    <img
                      src={gitHub}
                      alt="github img"
                      style={{ height: "40px", width: "40px" }}
                    />
                  </Link>
                  {/* <Link
                    sx={{ paddingLeft: "8px" }}
                    href="https://www.linkedin.com/in/ajith-kumar-gandikota/"
                  >
                    <img
                      src={linkedIN}
                      alt="linkedIn img"
                      style={{
                        height: "30px",
                        width: "30px",
                        // paddingLeft: "5px",
                      }}
                    />
                  </Link> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

// <Grid
//   container
//   display="flex"
//   flexDirection="column"
//   justifyContent="center"
//   alignItems="center"
//   height="100%"
//   spacing={2}
// >
//   <form style={{ justifyContent: "center" }} ref={form} onSubmit={sendEmail}>
//     <Grid
//       item
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       spacing={2}
//     >
//       <Grid>
//         <Typography textAlign="start" color="#ffffff">
//           Name
//         </Typography>
//         <OutlinedInput
//           name="user_name"
//           // value={formik.values.user_name}

//           sx={{
//             "&.MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: "#ffffff",
//                 borderRadius: "10px",
//               },
//               "&:hover fieldset": {
//                 borderColor: "#ffffff",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: "#ffffff",
//                 borderRadius: "10px",
//               },
//             },
//             color: "#ffffff",
//           }}

//           // onBlur={handleBlur}
//           // onChange={handleChange}
//         />
//         {/* {errors.user_name && touched.user_name && (
//         <Typography fontSize="12px" color="red">
//           {errors.user_name}
//         </Typography>
//       )} */}
//       </Grid>
//     </Grid>
//     <Grid
//       paddingTop={1}
//       item
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       spacing={2}
//     >
//       <Grid>
//         <Typography textAlign="start" color="#ffffff">
//           Email
//         </Typography>
//         <OutlinedInput
//           name="user_email"
//           sx={{
//             "&.MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: "#ffffff",
//                 borderRadius: "10px",
//               },
//               "&:hover fieldset": {
//                 borderColor: "#ffffff",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: "#ffffff",
//                 borderRadius: "10px",
//               },
//             },
//             color: "#ffffff",
//           }}
//         />
//       </Grid>
//     </Grid>
//     <Grid
//       paddingTop={1}
//       item
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       spacing={2}
//     >
//       <Grid>
//         <Typography textAlign="start" color="#ffffff">
//           Message
//         </Typography>
//         {/* <TextField
//         name="message"
//         sx={{
//            borderStyle: "solid",
//           borderWidth: "0.5px",
//           borderColor: "#ffffff",
//           color: "#ffffff",
//            borderRadius: "10px",
//         }}
//        /> */}
//         <CustomTextField name="message" />
//       </Grid>
//     </Grid>
//     <Grid
//       paddingTop={2}
//       item
//       justifyContent="center"
//       alignContent="center"
//       textAlign="center"
//     >
//       <Button
//         type="submit"
//         sx={{
//           background: "linear-gradient(45deg,#1D5B79, #468B97)",
//           borderRadius: "8px",
//         }}
//         variant="contained"
//       >
//         Submit
//       </Button>
//     </Grid>
//   </form>
//   <Grid
//     item
//     padding={1}
//     display="flex"
//     flexDirection="row"
//     width="100%"
//     justifyContent="center"
//     alignItems="center"
//     spacing={2}
//   >
//     <Grid container justifyContent="center" flexWrap="wrap">
//       <Link href="https://www.instagram.com/ajithkrm6/">
//         <img
//           alt="insta img"
//           src={instagram}
//           style={{ height: "30px", width: "30px" }}
//         />
//       </Link>

//       <Link href="https://gitlab.com/Ajithkrm6">
//         <img
//           alt="gitlab img"
//           src={gitLab}
//           style={{ height: "40px", width: "80px" }}
//         />
//       </Link>

//       <Link href="https://github.com/Ajithkrm6">
//         <img
//           src={gitHub}
//           alt="github img"
//           style={{ height: "40px", width: "40px" }}
//         />
//       </Link>
//       <Link
//         sx={{ paddingLeft: "8px" }}
//         href="https://www.linkedin.com/in/ajith-kumar-gandikota/"
//       >
//         <img
//           src={linkedIN}
//           alt="linkedIn img"
//           style={{
//             height: "30px",
//             width: "30px",
//             // paddingLeft: "5px",
//           }}
//         />
//       </Link>
//     </Grid>
//   </Grid>
// </Grid>;
