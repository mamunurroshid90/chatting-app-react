import { useFormik } from "formik";
import React, { useState } from "react";
import { signUp } from "../../validation/validation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const RegFormCompo = () => {
  const [loader, setLoader] = useState(false);
  const auth = getAuth();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      console.log("submit");
      createNewUsers();
    },
    validationSchema: signUp,
  });

  const createNewUsers = () => {
    setLoader(true);
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(() => {
        console.log("Sign Up done");
        setLoader(false);
        sendEmailVerification(auth.currentUser)
          .then(() => {
            toast.success("Sign up done", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
          })
          .catch((errors) => {
            console.log(errors.message);
          });
      })
      .catch((errors) => {
        console.log(errors.message);
        if (errors.message.includes("auth/email-already-in-use")) {
          toast.error("Email already uses", {
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
        setLoader(false);
      });
  };
  // console.log(formik);
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
                Enter Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className=" border border-[#D8D8D8] p-2 rounded w-[400px]"
              />
              {formik.errors.name && formik.touched.name && (
                <p className=" text-xs font-fontInter text-red-600">
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div className=" flex flex-col gap-y-[8px]">
              <label className=" text-lg font-fontInter text-[#484848]">
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className=" border border-[#D8D8D8] p-2 rounded"
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
                type="password"
                id="password"
                name="password"
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
            <div className=" flex flex-col gap-y-[8px]">
              <label className=" text-lg font-fontInter text-[#484848]">
                Enter Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                className=" border border-[#D8D8D8] p-2 rounded"
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className=" text-xs font-fontInter text-red-600">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
            <button
              type="submit"
              className=" bg-[#313131] text-white py-2 text-lg rounded-md font-medium font-fontInter"
            >
              {loader ? <BeatLoader size={5} color="#ffffff" /> : "Sign Up"}
            </button>
            <p className=" text-base font-fontInter text-[#000000]">
              Already have an account please{" "}
              <span className=" text-[#236DB0] hover:underline cursor-pointer">
                sign in
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegFormCompo;
