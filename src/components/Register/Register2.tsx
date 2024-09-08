import React from "react";
import CustomInput from "../comp/Input";
import Dropdown from "../comp/Dropdown";
import { country, municipality, city, district } from "@/data";
const Register2 = ({ back, next }: { back: () => void; next: () => void }) => {
  return (
    <div className="space-y-[3.6rem] ">
      <h2>Address</h2>
      <form>
        <div className="grid grid-cols-3 gap-[2.4rem]">
          <Dropdown
            label="Country"
            id="country"
            placeholder="Eg: Nepal"
            options={country}
          />
          <Dropdown
            label="District"
            id="district"
            placeholder="Eg: Kathmandu"
            options={district}
          />
          <Dropdown
            label="Municipality"
            id="municipality"
            placeholder="Eg: Kathmandu Metropolitan City"
            options={municipality}
          />
          <Dropdown
            label="City"
            id="city"
            placeholder="Eg: Kathmandu"
            options={city}
          />

          <CustomInput type="text" id="ward" label="Ward" placeholder="Eg: 4" />

          <div className="col-span-3 flex justify-end gap-[29px]">
            <button className="bg-[#688968]" onClick={back}>
              Back
            </button>
            <button type="submit" className="" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register2;
