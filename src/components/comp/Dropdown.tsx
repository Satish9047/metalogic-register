import React from "react";

const Dropdown = ({
  label,
  id,
  placeholder,
  options,
}: {
  label: string;
  id: string;
  placeholder: string;
  options?: string[];
}) => {
  console.log(options);
  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input
        type="dropdown"
        id={id}
        className="w-full"
        placeholder={placeholder}
      />
      {/* <select>
        {options &&
          options.map((option, index) => (
            <option key={option + index} value={option}>
              {option}
            </option>
          ))}
      </select> */}
    </div>
  );
};

export default Dropdown;
