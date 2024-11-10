import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const RouteLayout = () => {
  return (
    <>
      <div className="">
        <div className=" w-[15%] h-screen bg-[#5E3493]">
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RouteLayout;
