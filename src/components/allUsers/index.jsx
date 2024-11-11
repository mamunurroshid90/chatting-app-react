import React from "react";
import { AddUserIcon } from "../../../public/svg/AddUser";

const AllUsers = () => {
  return (
    <>
      <div>
        <h2 className=" text-2xl font-fontInter font-semibold">All Users</h2>
        <input
          type="text"
          placeholder="Search Users"
          className=" mt-6 mb-9 bg-[#F8F8F8] p-4 rounded-lg w-full outline-none"
        />
        <div className=" flex flex-col gap-2">
          <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-3">
              <div className=" w-12 h-12 rounded-full">
                <img
                  src="/public/images/usersProfile.png"
                  alt="users-profile"
                />
              </div>
              <h3 className=" text-lg font-fontInter font-medium">
                Mamunur Roshid
              </h3>
            </div>
            <div>
              <AddUserIcon />
            </div>
          </div>
          <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-3">
              <div className=" w-12 h-12 rounded-full">
                <img
                  src="/public/images/usersProfile.png"
                  alt="users-profile"
                />
              </div>
              <h3 className=" text-lg font-fontInter font-medium">
                Mamunur Roshid
              </h3>
            </div>
            <div>
              <AddUserIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
