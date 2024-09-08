import React from "react";
import CustomInput from "../comp/Input";
import DateInput from "../comp/DateInput";
import Radio from "../comp/Radio";

const Register1 = () => {
  return (
    <div className="space-y-[3.6rem] ">
      <h2>Personal Details</h2>
      <form>
        <div className="grid grid-cols-3 gap-[2.4rem]">
          <CustomInput
            type="text"
            label="First Name"
            id="firstName"
            placeholder="Enter Your First Name"
          />
          <CustomInput
            type="text"
            label="Middle Name"
            id="middleName"
            placeholder="Enter Your Middle Name"
          />
          <CustomInput
            type="text"
            label="last Name"
            id="lastName"
            placeholder="Enter Your Last Name"
          />
          <CustomInput
            type="text"
            label="Phone"
            id="phone"
            placeholder="98xxxxxxxx"
          />
          <DateInput />

          <div className="col-span-3 space-y-4">
            <label>Gender</label>
            <div className="flex gap-4 mt-2">
              <Radio />
              <Radio />
              <Radio />
            </div>
          </div>
          <div className="col-span-3 flex justify-end">
            <button type="submit" className="">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register1;
