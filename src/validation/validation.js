import * as Yup from "yup";

export const signUp = Yup.object({
  name: Yup.string()
    .max(15)
    .min(3)
    .required("Please enter your name atleast 3 to 15 character"),
  email: Yup.string().email().required("Please Enter a valid email"),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Please use atLease one character & one number"
    )
    .required("Please enter your password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Password not matched"
  ),
});

export const login = Yup.object({
  email: Yup.string().email().required("Enter your email"),
  password: Yup.string().required("Please enter your password"),
});
