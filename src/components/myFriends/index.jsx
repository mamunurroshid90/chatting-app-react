import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";
import avatar2 from "../../../public/images/avatar2.png";

const MyFriends = () => {
  const [friends, setFriends] = useState([]);
  const user = useSelector((user) => user.login.loggedIn);
  const navigate = useNavigate();
  const db = getDatabase();

  useEffect(() => {
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      let friendsArr = [];
      snapshot.forEach((item) => {
        if (
          user.uid === item.val().senderId ||
          user.uid === item.val().receiverId
        ) {
          friendsArr.push({ ...item.val(), id: item.key });
        }
      });
      setFriends(friendsArr);
    });
  }, [db, user.uid]);

  return (
    <>
      <div>
        <h2 className=" text-2xl font-fontInter font-semibold mb-6">
          My Friend
        </h2>
        <div className=" flex flex-col gap-3">
          {friends?.map((item) => (
            <div className=" flex items-center justify-between" key={item.id}>
              <div
                onClick={() => navigate("/message")}
                className=" flex items-center gap-3 cursor-pointer"
              >
                {user.uid === item.receiverId ? (
                  <div className=" w-8 h-8 rounded-full">
                    <img
                      src={item.senderProfilePic || avatar2}
                      alt="users-profile"
                      className=" w-full h-full object-cover rounded-full bg-slate-200"
                    />
                  </div>
                ) : (
                  <div className=" w-8 h-8 rounded-full">
                    <img
                      src={item.receiverProfilePic || avatar2}
                      alt="users-profile"
                      className=" w-full h-full object-cover rounded-full bg-slate-200"
                    />
                  </div>
                )}
                <h3 className=" text-lg font-fontInter font-medium">
                  {user.uid === item.senderId
                    ? item.receiverName
                    : item.senderName}
                </h3>
              </div>
              <div className=" flex items-center gap-1">
                <button className=" bg-[#4A81D3] py-1 px-4 rounded text-white">
                  Unfriend
                </button>
                <button className=" bg-[#D34A4A] py-1 px-4 rounded text-white">
                  Block
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyFriends;
