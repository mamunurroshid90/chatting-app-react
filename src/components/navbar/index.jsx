import React, { useState } from "react";
import { ProfileUploadIcon } from "../../../public/svg/ProfileUploadIcon";
import { HomeIcon } from "../../../public/svg/HomeIcon";
import { MessageIcon } from "../../../public/svg/MessageIcon";
import { BackSquireIcon } from "../../../public/svg/BackSqureIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loggedOutUser } from "../../features/slices/loginSlice";
import { createPortal } from "react-dom";
import Modals from "../modal";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        localStorage.removeItem("user");
        dispatch(loggedOutUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="">
        <nav className=" h-screen py-7">
          <div className=" flex flex-col justify-between items-center h-full">
            <div>
              <div className=" relative">
                <img src="/images/profile.png" alt="profile-pic" />
                <div
                  // onClick={() => setShow(true)}
                  className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                >
                  <ProfileUploadIcon />
                </div>
              </div>
              <h2 className=" text-center mt-4 font-semibold font-fontInter text-white text-xl">
                Mamunur
              </h2>
            </div>
            <div className=" flex flex-col gap-10">
              <Link
                to="/"
                className={`${location.pathname == "/" ? " text-cyan-400" : " text-white"}`}
              >
                <HomeIcon />
              </Link>
              <Link
                to="/message"
                className={`${location.pathname == "/message" ? " text-cyan-400" : " text-white"}`}
              >
                <MessageIcon />
              </Link>
            </div>
            <div onClick={handleLogout} className=" flex gap-3 cursor-pointer">
              <BackSquireIcon />
              <h2 className=" text-xl font-fontInter font-semibold text-white">
                Log out
              </h2>
            </div>
          </div>
        </nav>
        {show &&
          createPortal(
            <div>
              <Modals />
            </div>,
            Document.body
          )}
      </div>
    </>
  );
};

export default Navbar;
