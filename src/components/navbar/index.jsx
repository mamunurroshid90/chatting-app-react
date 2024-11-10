import React from "react";
import { ProfileUploadIcon } from "../../../public/svg/ProfileUploadIcon";
import { HomeIcon } from "../../../public/svg/HomeIcon";
import { MessageIcon } from "../../../public/svg/MessageIcon";
import { BackSquireIcon } from "../../../public/svg/BackSqureIcon";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav className=" h-screen py-7">
          <div className=" flex flex-col justify-between items-center h-full">
            <div>
              <div className=" relative">
                <img src="/images/profile.png" alt="profile-pic" />
                <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  <ProfileUploadIcon />
                </div>
              </div>
              <h2 className=" text-center mt-4 font-semibold font-fontInter text-white text-xl">
                Mamunur
              </h2>
            </div>
            <div className=" flex flex-col gap-10">
              <div>
                <HomeIcon />
              </div>
              <div>
                <MessageIcon />
              </div>
            </div>
            <div className=" flex gap-3">
              <BackSquireIcon />
              <h2 className=" text-xl font-fontInter font-semibold text-white">
                Log out
              </h2>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
