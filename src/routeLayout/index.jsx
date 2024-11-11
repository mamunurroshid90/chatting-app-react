import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const RouteLayout = () => {
  return (
    <>
      <div className=" grid grid-cols-[1fr,5fr]">
        <div className=" w-full h-screen bg-[#5E3493]">
          <Navbar />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RouteLayout;
