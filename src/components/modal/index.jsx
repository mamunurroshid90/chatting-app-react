import React, { createRef, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GalleryIcon } from "../../../public/svg/GalleryIcon";
import ImageCropper from "../imageCropper";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { loggedInUser } from "../../features/slices/loginSlice";

const Modals = ({ setShow }) => {
  const user = useSelector((user) => user.login.loggedIn);
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const storage = getStorage();
  const storageRef = ref(storage, user.id);
  const cropperRef = createRef();
  const fileRef = useRef(null);
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      // console.log(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    alert(
      "firebase storage not allowed, storage is premium now, I am free user ☺️"
    );
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const message4 = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          }).then(() => {
            dispatch(loggedInUser({ ...user, photoURL: downloadURL }));
            localStorage.setItem(
              "user",
              JSON.stringify({ ...user, photoURL: downloadURL })
            );
          });
        });
      });
    }
  };

  return (
    <>
      <div className=" fixed top-0 left-0 bg-[#24282dd9] w-full h-screen flex justify-center items-center">
        <div className="w-[350px] bg-white p-5 rounded-md relative">
          <div className=" ">
            <h2 className=" text-center text-lg font-medium mb-2 font-fontInter capitalize">
              upload photo
            </h2>
          </div>
          <div onClick={() => setShow(false)} className=" cursor-pointer">
            <RxCross2 className=" absolute top-2 right-2 bg-gray-200 rounded-full text-xl" />
          </div>
          <div
            onClick={() => fileRef.current.click()}
            className="  border-2 flex justify-center items-center rounded-md cursor-pointer p-2 "
          >
            <div className=" w-full h-[200px] bg-gray-200 text-sm text-gray-500 flex flex-col justify-center items-center rounded-md">
              <GalleryIcon />
              <h2 className=" font-fontInter">Upload your profile photo</h2>
              <input type="file" ref={fileRef} hidden onChange={handleChange} />
            </div>
          </div>
          {image && (
            <ImageCropper
              image={image}
              setImage={setImage}
              cropperRef={cropperRef}
              setCropData={setCropData}
              cropData={cropData}
              getCropData={getCropData}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Modals;
