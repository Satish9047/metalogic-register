import React from "react";
import CustomImage from "../comp/Image";

const Register3 = ({ back, next }: { back: () => void; next: () => void }) => {
  return (
    <div className="flex flex-col justify-center gap-[29px]">
      <h2>Set Your Profile Picture</h2>
      <form action="" className="flex flex-col gap-[23px]">
        <div className="flex flex-col justify-center gap-[23px]">
          <figure className="flex justify-center items-center">
            <CustomImage
              src="/profile.png"
              width="232"
              height="233"
              alt="profile picture"
            />
          </figure>
          <div className="relative flex justify-center items-center">
            <input
              className="absolute inset-0 opacity-0 cursor-pointer hidden"
              type="file"
              id="fileUpload"
              accept=".jpeg, .jpg, .png"
            />
            <label
              htmlFor="fileUpload"
              className="px-4 py-2 bg-[#4daf4e] text-white font-semibold rounded-xl cursor-pointer hover:bg-green-600"
            >
              Upload Image
            </label>
          </div>
        </div>
        <div className="flex justify-end gap-[29px]">
          <button className="bg-[#688968]" onClick={back}>
            Back
          </button>
          <button type="submit" onClick={next}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register3;
