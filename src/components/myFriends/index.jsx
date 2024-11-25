import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import avatar2 from "../../../public/images/avatar2.png";
import { activeSingle } from "../../features/slices/ActiveSingleSlice";

const MyFriends = () => {
  const [friends, setFriends] = useState([]);
  const user = useSelector((user) => user.login.loggedIn);
  const navigate = useNavigate();
  const db = getDatabase();
  const dispatch = useDispatch();

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

  const handleSingleChat = (data) => {
    console.log(data.receiverId);
    console.log(user.uid);
    if (user.uid === data.receiverId) {
      dispatch(
        activeSingle({
          status: "single",
          id: data.senderId,
          name: data.senderName,
          profile: data.senderProfilePic,
        })
      );
      localStorage.setItem(
        "active",
        JSON.stringify({
          status: "single",
          id: data.senderId,
          name: data.senderName,
          profile: data.senderProfilePic,
        })
      );
    } else {
      console.log("else");
      dispatch(
        activeSingle({
          status: "single",
          id: data.receiverId,
          name: data.receiverName,
          profile: data.receiverProfilePic,
        })
      );
      localStorage.setItem(
        "active",
        JSON.stringify({
          status: "single",
          id: data.receiverId,
          name: data.receiverName,
          profile: data.receiverProfilePic,
        })
      );
    }
  };

  return (
    <>
      <div>
        <h2 className=" text-2xl font-fontInter font-semibold mb-6">
          My Friend
        </h2>
        <div className=" flex flex-col gap-3">
          {friends?.map((item) => (
            <div
              onClick={() => handleSingleChat(item)}
              className=" flex items-center justify-between hover:bg-[#efefef] px-3 py-2 rounded-md transition-all ease-linear duration-200"
              key={item.id}
            >
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
