import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().min(8).required("Required"),
});

export const contactFormSchema = yup.object().shape({
  name: yup.string().max(10).required("Required"),
  message: yup.string().max(30).required("Required"),
});
