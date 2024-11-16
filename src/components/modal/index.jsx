import React from "react";
import { RxCross2 } from "react-icons/rx";

const Modals = ({ setShow }) => {
  return (
    <>
      <div className=" fixed top-0 left-0 bg-[#24282dd9] w-full h-screen flex justify-center items-center">
        <div className="w-[350px] bg-white p-3 rounded-md relative">
          <div className=" ">
            <h2 className=" text-center">upload photo</h2>
          </div>
          <div onClick={() => setShow(false)} className=" cursor-pointer">
            <RxCross2 className=" absolute top-1 right-1 bg-slate-300 rounded-full text-xl" />
          </div>
          <div className=" w-full h-[200px] border-2 ">
            <h2>Upload your profile photo</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
