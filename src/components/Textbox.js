import React from "react";

const Textbox = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <div>
        <label> {label}: </label>
      </div>
      <div>
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input"
        />
      </div>
    </div>
  );
};

export default Textbox;
