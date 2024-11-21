import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { useSelector } from "react-redux";
import avatar2 from "../../../public/images/avatar2.png";

const FriendRequest = () => {
  const [friendReqList, setFriendReqList] = useState([]);
  const user = useSelector((user) => user.login.loggedIn);
  const db = getDatabase();

  // show friend request
  useEffect(() => {
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      let friendReq = [];
      snapshot.forEach((item) => {
        if (user.uid === item.val().receiverId) {
          friendReq.push({ ...item.val(), id: item.key });
        }
      });
      setFriendReqList(friendReq);
    });
  }, [db, user.uid]);

  // console.log(friendReqList);

  // accept request
  const handleAccept = (data) => {
    set(push(ref(db, "friends")), {
      ...data,
    }).then(() => {
      remove(ref(db, "friendRequest/" + data.id));
    });
  };

  // handle reject
  const handleReject = (data) => {
    remove(ref(db, "friendRequest/" + data.id));
  };

  return (
    <>
      <div>
        <h2 className=" text-2xl font-fontInter font-semibold mb-6">
          Friend Request
        </h2>

        {friendReqList?.map((item) => (
          <div className=" flex flex-col gap-2" key={item.id}>
            <div className=" flex items-center justify-between">
              <div className=" flex items-center gap-3">
                <div className=" w-12 h-12 rounded-full">
                  <img
                    src={item.senderProfilePic || avatar2}
                    alt="users-profile"
                    className=" w-full h-full object-cover rounded-full bg-slate-200"
                  />
                </div>
                <h3 className=" text-lg font-fontInter font-medium">
                  {item.senderName}
                </h3>
              </div>
              <div className=" flex items-center gap-1">
                <button
                  onClick={() => handleAccept(item)}
                  className=" bg-[#4A81D3] py-1 px-4 rounded text-white"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(item)}
                  className=" bg-[#D34A4A] py-1 px-4 rounded text-white"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendRequest;
