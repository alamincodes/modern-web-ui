import React from "react";

const GradientBtn = ({ className, title }) => {
  return (
    <button
      className={`bg-gradient-to-r from-thOrange to-thBlue px-6 py-2 duration-300 rounded-lg hover:scale-110 ${className}`}
    >
      {title}
    </button>
  );
};

export default GradientBtn;
