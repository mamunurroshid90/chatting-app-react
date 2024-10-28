import { useFormik } from "formik";
import React, { useState } from "react";
import { login } from "../../validation/validation";
import { BeatLoader } from "react-spinners";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginFormCompo() {
  const [loader, setLoader] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      console.log("login");
      signInUsers();
    },
    validationSchema: login,
  });
  console.log(formik);

  const signInUsers = () => {
    setLoader(true);
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({ user }) => {
        setLoader(false);
        console.log("Sign in done", user);
        if (user.emailVerified) {
          navigate("/");
        } else {
          toast.error("Please verify your email", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((errors) => {
        console.log(errors.message);
        if (errors.message.includes("auth/invalid-credential")) {
          toast.error("Invalid email or password", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        }
      });
    setLoader(false);
  };

  return (
    <>
      <ToastContainer />
      <div className=" flex justify-center items-center h-screen">
        <div className=" shadow-lg rounded">
          <h2 className="font-fontJotiOne text-[50px] text-center">TalkNest</h2>
          <form
            onSubmit={formik.handleSubmit}
            className=" px-[43px] pt-5 pb-10 flex flex-col gap-[18px]"
          >
            <div className=" flex flex-col gap-y-[8px]">
              <label className=" text-lg font-fontInter text-[#484848]">
                Enter Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className=" border border-[#D8D8D8] p-2 rounded w-[400px]"
              />
              {formik.errors.email && formik.touched.email && (
                <p className=" text-xs font-fontInter text-red-600">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className=" flex flex-col gap-y-[8px]">
              <label className=" text-lg font-fontInter text-[#484848]">
                Enter Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className=" border border-[#D8D8D8] p-2 rounded"
              />
              {formik.errors.password && formik.touched.password && (
                <p className=" text-xs font-fontInter text-red-600">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className=" bg-[#313131] text-white py-2 text-lg rounded-md font-medium font-fontInter"
            >
              {loader ? <BeatLoader /> : "Sign In"}
            </button>

            <p className=" hover:underline font-fontInter text-[#4A4A4A]">
              forgot password?
            </p>
            <p className=" text-base font-fontInter text-[#000000]">
              Don't have an account please{" "}
              <span className=" text-[#236DB0] hover:underline cursor-pointer font-fontInter">
                sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginFormCompo;
