import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FormTest } from "../components/FormTest";

export default {
  title: "components/formtest",
  component: FormTest,
  parameters: { status: { type: "beta" } },
};

export const main = () => {
  return <FormTest />;
};
