import React from "react";
import { Cropper } from "react-cropper";
import { RxCross2 } from "react-icons/rx";

const ImageCropper = ({
  image,
  setImage,
  cropperRef,
  setCropData,
  cropData,
}) => {
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div>
      <div className=" fixed top-0 left-0 w-full h-screen flex justify-center items-center flex-col">
        <div className="w-[350px] bg-white p-5 rounded-md relative">
          <div className="">
            <h2 className=" text-center text-lg font-medium mb-2 font-fontInter capitalize">
              upload photo
            </h2>
          </div>
          <div onClick={() => setImage(false)} className=" cursor-pointer">
            <RxCross2 className=" absolute top-2 right-2 bg-gray-200 rounded-full text-xl" />
          </div>

          <div className=" w-20 h-20 rounded-full mx-auto overflow-hidden mb-2">
            <div
              className="img-preview"
              style={{ width: "100%", float: "left", height: "300px" }}
            />
          </div>
          <div>
            <Cropper
              ref={cropperRef}
              style={{ height: 400, width: "100%" }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              guides={true}
            />
          </div>
          <div
            className="box"
            style={{ width: "50%", float: "right", height: "300px" }}
          >
            <h1>
              <span>Crop</span>
              <button style={{ float: "right" }} onClick={getCropData}>
                Crop Image
              </button>
            </h1>
            <img style={{ width: "100%" }} src={cropData} alt="cropped" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
