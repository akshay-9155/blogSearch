import React from "react";

const NeumorphicInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-lg bg-soft-gray shadow-neumorphic focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  );
};

export default NeumorphicInput;
