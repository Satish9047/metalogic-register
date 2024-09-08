import React from "react";

const DateInput = () => {
  return (
    <div className="input-div">
      <label htmlFor="birthday">Birth Date</label>
      <input
        type="date"
        id="birthday"
        name="birthday"
        className="w-full"
        placeholder="DD/MM/YYYY"
      />
    </div>
  );
};

export default DateInput;
