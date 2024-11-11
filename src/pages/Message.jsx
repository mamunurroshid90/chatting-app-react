import React from "react";
import MyFriends from "../components/myFriends";
import TextBox from "../components/textarea";

const Message = () => {
  return (
    <>
      <div className=" grid grid-cols-[2fr,5fr] gap-9 h-full pb-6">
        <div className=" shadow-lg p-7">
          <MyFriends />
        </div>
        <div className=" shadow-lg p-7">
          <TextBox />
        </div>
      </div>
    </>
  );
};

export default Message;
