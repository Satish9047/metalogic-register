import React from "react";
import useFormStore from "@/zustand";

const DateInput = () => {
  const { formData, updateFormData } = useFormStore();
  return (
    <div className="input-div">
      <label htmlFor="birthday">Birth Date</label>
      <input
        type="date"
        id="birthday"
        name="birthday"
        className="w-full"
        placeholder="DD/MM/YYYY"
        value={formData.birthday}
        onChange={(e) => updateFormData("firstName", e.target.value)}
      />
    </div>
  );
};

export default DateInput;
