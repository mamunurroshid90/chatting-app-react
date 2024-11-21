import React, { useEffect, useState } from "react";
import { AddUserIcon } from "../../../public/svg/AddUser";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref as Ref } from "firebase/storage";
import avatar2 from "../../../public/images/avatar2.png";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [friendReqList, setFriendReqList] = useState([]);
  const [cancelRequest, setCancelRequest] = useState([]);
  const user = useSelector((user) => user.login.loggedIn);
  const db = getDatabase();
  const storage = getStorage();

  useEffect(() => {
    const starCountRef = ref(db, "users/");

    onValue(starCountRef, (snapshot) => {
      const users = [];

      snapshot.forEach((allUsers) => {
        if (user.uid !== allUsers.key) {
          getDownloadURL(Ref(storage, allUsers.key))
            .then((downloadURL) => {
              users.push({
                ...allUsers.val(),
                id: allUsers.key,
                photoURL: downloadURL,
              });
            })
            .catch((error) => {
              users.push({
                ...allUsers.val(),
                id: allUsers.key,
                photoURL: null,
              });
            })
            .then(() => {
              setUsers([...users]);
            });
        }
      });
    });
  }, [db, user.uid, storage]);

  // console.log(users);

  // sent friend request

  const handleFriendRequest = (data) => {
    console.log(data);
    set(push(ref(db, "friendRequest")), {
      senderName: user.displayName,
      senderId: user.uid,
      senderProfilePic: user.photoURL ?? "/public/images/avatar2.png",
      receiverName: data.username,
      receiverId: data.id,
      receiverProfilePic: data.photoURL ?? "/public/images/avatar2.png",
    });
  };

  // show friend request
  useEffect(() => {
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      let reqArr = [];
      let cancelArr = [];
      snapshot.forEach((item) => {
        reqArr.push(item.val().receiverId + item.val().senderId);
        cancelArr.push({ ...item.val(), id: item.key });
      });
      setFriendReqList(reqArr);
      setCancelRequest(cancelArr);
    });
  }, [db]);

  console.log(cancelRequest);

  // console.log(friendReqList);

  const handleCancelReq = (itemId) => {
    console.log(itemId);
    const reqToCancel = cancelRequest.find(
      (req) => req.receiverId === itemId && req.senderId === user.uid
    );
    if (reqToCancel) {
      remove(ref(db, "friendRequest/" + reqToCancel.id));
    }
    console.log(reqToCancel);
  };

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
          {users.map((item, i) => (
            <div key={i} className=" flex justify-between items-center">
              <div className=" flex items-center gap-3">
                <div className=" w-12 h-12 rounded-full">
                  <img
                    src={item.photoURL || avatar2}
                    alt="users-profile"
                    className=" w-full h-full object-cover rounded-full bg-slate-200"
                  />
                </div>
                <h3 className=" text-lg font-fontInter font-medium">
                  {item.username}
                </h3>
              </div>
              {friendReqList.includes(item.id + user.uid) ||
              friendReqList.includes(user.uid + item.id) ? (
                <button
                  onClick={() => handleCancelReq(item.id)}
                  className=" bg-red-400 py-1 px-3 rounded-md text-white"
                >
                  Cancel Request
                </button>
              ) : (
                <div onClick={() => handleFriendRequest(item)}>
                  <AddUserIcon />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllUsers;
