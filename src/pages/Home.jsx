import React from "react";
import Navbar from "../components/navbar";
import AllUsers from "../components/allUsers";
import FriendRequest from "../components/friendRequest";
import MyFriends from "../components/myFriends";

const Home = () => {
  return (
    <>
      <div className=" grid grid-cols-3 gap-10 h-full pb-8 rounded-lg">
        <div className=" shadow-lg p-7">
          <AllUsers />
        </div>
        <div className=" shadow-lg p-7">
          <FriendRequest />
        </div>
        <div className=" shadow-lg p-7">
          <MyFriends />
        </div>
      </div>
    </>
  );
};

export default Home;
