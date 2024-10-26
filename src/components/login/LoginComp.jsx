import React from "react";

function LoginFormCompo() {
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className=" shadow-lg rounded">
          <h2 className="font-fontJotiOne text-[50px] text-center">TalkNest</h2>
          <form className=" px-[43px] pt-5 pb-10 flex flex-col gap-[18px]">
            <div className=" flex flex-col gap-y-[8px]">
              <label className=" text-lg font-fontInter text-[#484848]">
                Enter Email
              </label>
              <input
                type="email"
                className=" border border-[#D8D8D8] p-2 rounded w-[400px]"
              />
            </div>
            <div className=" flex flex-col gap-y-[8px]">
              <label className=" text-lg font-fontInter text-[#484848]">
                Enter Password
              </label>
              <input
                type="password"
                className=" border border-[#D8D8D8] p-2 rounded"
              />
            </div>

            <button className=" bg-[#313131] text-white py-2 text-lg rounded-md font-medium font-fontInter">
              Sign In
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
