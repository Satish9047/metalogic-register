import React from "react";
import { useRouter } from "next/navigation";
import CustomImage from "../comp/Image";
import useFormStore from "@/zustand/formStore";

const Register4 = ({ back }: { back: () => void }) => {
  const { formData } = useFormStore();
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/profile");
  };
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
                <span>{formData.firstName}</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Middle Name:{" "}
                </label>
                <span>{formData.middleName}</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Last Name:
                </label>
                <span>{formData.lastName}</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Phone:
                </label>
                <span>{formData.phone}</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Birth Date:
                </label>
                <span>{formData.birthday}</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Gender:
                </label>
                <span>{formData.gender}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            <h3>Address</h3>
            <div className="flex flex-wrap gap-10">
              <div className="detail-div ">
                <label className=" font-extrabold" htmlFor="">
                  Country:
                </label>
                <span>{formData.country}</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  District:
                </label>
                <span>{formData.district}</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Municipality/local:
                </label>
                <span>{formData.municipality}</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  City:
                </label>
                <span>{formData.city}</span>
              </div>
              <div className="detail-div">
                <label className=" font-extrabold" htmlFor="">
                  Ward:
                </label>
                <span>{formData.ward}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-[29px]">
            <button className="bg-[#688968]" onClick={back}>
              Back
            </button>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register4;
