import React from "react";
import CustomImage from "../comp/Image";

const Register4 = () => {
  return (
    <div>
      <h2>Review Your Details</h2>
      <div className="space-y-4">
        <figure>
          <CustomImage
            src="/profile.png"
            width="232"
            height="233"
            alt="profile picture"
          />
        </figure>
        <div className="space-y-8">
          <div className="flex flex-col gap-[1.6rem]">
            <h3>Personal Details</h3>
            <div className="flex flex-wrap gap-10">
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  First Name:
                </label>
                <span>Anna</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Middle Name:{" "}
                </label>
                <span>Anna</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Last Name:
                </label>
                <span>Anna</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Phone:
                </label>
                <span>Anna</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Birth Date:
                </label>
                <span>Anna</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Gender:
                </label>
                <span>Anna</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            <h3>Address</h3>
            <div className="flex flex-wrap gap-10">
              <div className="detail-div -my-2">
                <label className=" font-extrabold" htmlFor="">
                  Country:
                </label>
                <span>Nepal</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  District:
                </label>
                <span>Bagmati</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Municipality/local:
                </label>
                <span>Kathmandu</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  City:{" "}
                </label>
                <span>Kathmandu</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Ward:
                </label>
                <span>1</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-[29px]">
            <button className="bg-[#688968]">Back</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register4;
