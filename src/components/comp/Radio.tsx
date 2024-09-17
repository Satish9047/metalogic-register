import React from "react";
import useFormStore from "@/zustand/formStore";
const Radio = ({ label, id }: { label: string; id: string }) => {
  const { formData, addFormData } = useFormStore();
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={id}
        name="gender"
        value={formData.gender}
        className="text-green-500 focus:ring-green-500 h-8 w-8"
        onChange={(e) => addFormData("gender", e.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default Radio;
