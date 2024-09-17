import React from "react";
import useFormStore from "@/zustand/formStore";

const Dropdown = ({
  label,
  id,
  placeholder,
  options = [], // Default to empty array if options are not provided
}: {
  label: string;
  id: string;
  placeholder: string;
  options?: string[];
}) => {
  const { formData, addFormData } = useFormStore();

  // Handle the change event
  const handleData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    addFormData(id as keyof typeof formData, e.target.value);
  };

  // Get the current value from formData
  const value = formData[id as keyof typeof formData] as string;

  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="w-full p-4 border text-[1.5rem] rounded-md"
        value={value}
        onChange={handleData}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={option + index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
