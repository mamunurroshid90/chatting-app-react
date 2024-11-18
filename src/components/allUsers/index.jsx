import React, { useEffect, useState } from "react";
import { AddUserIcon } from "../../../public/svg/AddUser";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref as Ref } from "firebase/storage";
import avatar2 from "../../../public/images/avatar2.png";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
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
          {users.map((user) => (
            <div className=" flex justify-between items-center">
              <div className=" flex items-center gap-3">
                <div className=" w-12 h-12 rounded-full">
                  <img
                    src={user.photoURL || avatar2}
                    alt="users-profile"
                    className=" w-full h-full object-cover rounded-full bg-slate-200"
                  />
                </div>
                <h3 className=" text-lg font-fontInter font-medium">
                  {user.username}
                </h3>
              </div>
              <div>
                <AddUserIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllUsers;
