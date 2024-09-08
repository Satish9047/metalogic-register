import React from "react";
import useFormStore from "@/zustand";

const CustomInput = ({
  type,
  label,
  id,
  placeholder,
}: {
  type: string;
  label: string;
  id: string;
  placeholder: string;
}) => {
  const { formData, updateFormData } = useFormStore();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = type === "number" ? Number(e.target.value) : e.target.value;
    updateFormData(id as keyof typeof formData, value);
  };

  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={formData[id as keyof typeof formData] || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomInput;
