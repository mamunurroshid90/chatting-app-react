import React, { useEffect, useState } from "react";
import { MicrophoneIcon } from "../../../public/svg/MicrophoneIcon";
import { SmileIcon } from "../../../public/svg/SmileIcon";
import { GalleryIcon } from "../../../public/svg/GalleryIcon";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { formatDistance } from "date-fns";

const TextBox = () => {
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessage] = useState([]);
  const user = useSelector((user) => user.login.loggedIn);
  const singleFriend = useSelector((single) => single.active.active);
  const db = getDatabase();

  // console.log(message);
  let timeFormate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getHours()}:${new Date().getMinutes()}`;

  const handleSendButton = () => {
    if (singleFriend?.status === "single") {
      set(push(ref(db, "singleMessage")), {
        whoSenderName: user.displayName,
        whoSenderId: user.uid,
        whoReceiverName: singleFriend.name,
        whoReceiverId: singleFriend.id,
        message: message.trim(),
        date: timeFormate,
      });
      setMessage("");
    }
  };

  // sent message
  useEffect(() => {
    onValue(ref(db, "singleMessage"), (snapshot) => {
      let singleMessageArr = [];
      snapshot.forEach((item) => {
        if (
          (user.uid === item.val().whoSenderId &&
            item.val().whoReceiverId === singleFriend.id) ||
          (user.uid === item.val().whoReceiverId &&
            item.val().whoSenderId === singleFriend.id)
        ) {
          singleMessageArr.push(item.val());
        }
      });
      setAllMessage(singleMessageArr);
    });
  }, [singleFriend.id]);

  // console.log(allMessage);
  return (
    <>
      <div className="">
        <div className=" flex items-center gap-4 bg-[#f5f5f5] p-3 rounded-md">
          <div className=" w-14 h-14 rounded-full">
            <img src={singleFriend.profile} alt="user-profile" />
          </div>
          <h3>
            {singleFriend.name || "Please select your friend for chatting"}
          </h3>
        </div>
        <div className=" h-[540px] w-full overflow-y-auto">
          <div className=" h-full w-full">
            {singleFriend?.status === "single"
              ? allMessage?.map((item, i) => (
                  <div key={i}>
                    {item.whoSenderId === user.uid ? (
                      <div className=" ml-auto w-[60%] flex justify-end">
                        <div className=" flex flex-col gap-1">
                          <p className=" bg-black text-white p-3 rounded inline-block my-1">
                            {item.message}
                          </p>
                          <span>{item.date}</span>;
                        </div>
                      </div>
                    ) : (
                      <div className=" mr-auto w-[60%] my-2 flex justify-start">
                        <div className=" flex flex-col gap-1">
                          <p className=" bg-blue-700 text-white p-3 rounded inline-block my-1">
                            {item.message}
                          </p>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div className=" flex justify-between items-center bg-[#f5f5f5] py-3 pl-3 pr-2 mt-2">
          <div className=" flex gap-3">
            <MicrophoneIcon />
            <SmileIcon />
            <GalleryIcon />
          </div>
          <div className=" w-full mx-5">
            <input
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              type="text"
              placeholder="Type here"
              className=" w-full p-2"
            />
          </div>
          <div>
            <button
              onClick={handleSendButton}
              className=" bg-[#3E8DEB] py-2 px-6 rounded text-white"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBox;
