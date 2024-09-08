import React from "react";

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
  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};
export default CustomInput;
