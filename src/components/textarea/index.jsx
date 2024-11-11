import React from "react";
import { MicrophoneIcon } from "../../../public/svg/MicrophoneIcon";
import { SmileIcon } from "../../../public/svg/SmileIcon";
import { GalleryIcon } from "../../../public/svg/GalleryIcon";

const TextBox = () => {
  return (
    <>
      <div className="">
        <div className=" flex items-center gap-4 bg-[#f5f5f5] p-3 rounded-md">
          <div className=" w-14 h-14 rounded-full">
            <img src="/public/images/usersProfile.png" alt="user-profile" />
          </div>
          <h3>Mizanur Rahman</h3>
        </div>
        <div className=" h-[540px] w-full">
          <div name="" id="" className=" h-full w-full outline-none"></div>
        </div>
        <div className=" flex justify-between items-center bg-[#f5f5f5] py-3 pl-3 pr-2 mt-2">
          <div className=" flex gap-3">
            <MicrophoneIcon />
            <SmileIcon />
            <GalleryIcon />
          </div>
          <div className=" w-full mx-5">
            <input
              type="text"
              placeholder="Type here"
              className=" w-full p-2"
            />
          </div>
          <div>
            <button className=" bg-[#3E8DEB] py-2 px-6 rounded text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBox;
