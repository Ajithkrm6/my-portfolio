import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Grid,
  Link,
  Typography,
  OutlinedInput,
  TextField,
  Button,
} from "@mui/material";
import { styled, Theme } from "@mui/system";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export const FormTest = () => {
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
  return (
    <form id="myForm" onSubmit={formik.handleSubmit}>
      <Grid item justifyContent="center" alignItems={"center"}>
        <Grid paddingBottom={1}>
          <Typography
            textAlign="start"
            color="#ffffff"
            fontFamily="PromptSemiBold"
          >
            Name
            {/* <Typography color="error">{error.user_name}</Typography> */}
          </Typography>
          <OutlinedInput
            name="user_name"
            value={formik.values.user_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
          {formik.errors.user_name && formik.touched.user_name && (
            <Typography color="error">{formik.errors.user_name}</Typography>
          )}
        </Grid>
        <Grid paddingBottom={1}>
          <Typography
            textAlign="start"
            color="#ffffff"
            fontFamily="PromptSemiBold"
          >
            Email
          </Typography>
          <OutlinedInput
            name="user_email"
            value={formik.values.user_email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
          {formik.errors.user_email && formik.touched.user_email && (
            <Typography color="error">{formik.errors.user_email}</Typography>
          )}
        </Grid>
        <Grid paddingBottom={1}>
          <Typography
            textAlign="start"
            color="#ffffff"
            fontFamily="PromptSemiBold"
          >
            Message
            {/* <Typography color="error">{error.message}</Typography> */}
          </Typography>
          {/* <CustomTextField
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          /> */}
          <TextField
            sx={{
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
            }}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.message && formik.touched.message && (
            <Typography color="error">{formik.errors.message}</Typography>
          )}
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
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
      </Grid>
    </form>
  );
};
