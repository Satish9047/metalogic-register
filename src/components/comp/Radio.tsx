import React from "react";

const Radio = () => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        className="text-green-500 focus:ring-green-500 h-8 w-8"
      />
      <label htmlFor="male">Male</label>
    </div>
  );
};

export default Radio;
