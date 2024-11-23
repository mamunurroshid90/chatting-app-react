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
        <div className=" h-[540px] w-full overflow-y-auto">
          <div name="" id="" className=" h-full w-full">
            <div className=" ml-auto w-[60%]">
              <p className=" bg-black text-white p-3 rounded">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum fugit earum inventore, cum laboriosam quidem aut
                molestiae veniam quia itaque.
              </p>
            </div>
            <div className=" mr-auto w-[60%] my-2">
              <p className=" bg-blue-700 text-white p-3 rounded">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum fugit earum inventore, cum laboriosam quidem aut
                molestiae veniam quia itaque.
              </p>
            </div>
            <div className=" ml-auto w-[60%] my-2 overflow-hidden">
              <img
                src="/public/images/demo-img-chat-1.jpg"
                alt="demo-img"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className=" mr-auto w-[60%] my-2 overflow-hidden mt-2">
              <img
                src="/public/images/demo-img-chat-2.jpg"
                alt="demo-img"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
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
