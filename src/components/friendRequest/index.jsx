import React from "react";

const FriendRequest = () => {
  return (
    <>
      <div>
        <h2 className=" text-2xl font-fontInter font-semibold mb-6">
          Friend Request
        </h2>
        <div className=" flex flex-col gap-2">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <div className=" w-12 h-12 rounded-full">
                <img
                  src="/public/images/profile.png"
                  alt="friend-request-profile"
                />
              </div>
              <h3 className=" text-lg font-fontInter font-medium">
                Rashedul Islam
              </h3>
            </div>
            <div className=" flex items-center gap-1">
              <button className=" bg-[#4A81D3] py-1 px-4 rounded text-white">
                Accept
              </button>
              <button className=" bg-[#D34A4A] py-1 px-4 rounded text-white">
                Reject
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <div className=" w-12 h-12 rounded-full">
                <img
                  src="/public/images/profile.png"
                  alt="friend-request-profile"
                />
              </div>
              <h3 className=" text-lg font-fontInter font-medium">
                Rashedul Islam
              </h3>
            </div>
            <div className=" flex items-center gap-1">
              <button className=" bg-[#4A81D3] py-1 px-4 rounded text-white">
                Accept
              </button>
              <button className=" bg-[#D34A4A] py-1 px-4 rounded text-white">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
