import React from "react";
import "./Button.scss";

const Button = ({ color, text, className, type, onClick }) => {
  return (
    <button
      className={`btn btn--${color} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
