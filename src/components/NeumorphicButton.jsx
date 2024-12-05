import React from 'react';

const NeumorphicButton = ({ children, onClick }) => {
  return (
    <button
      className="px-6 py-3 rounded-lg bg-soft-gray shadow-neumorphic hover:shadow-neumorphic-hover active:shadow-neumorphic-inset focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NeumorphicButton;
