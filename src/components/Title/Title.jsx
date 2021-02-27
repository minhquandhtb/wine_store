import React from "react";
import img from "assets/images/title-icon.png";
import "./Title.scss";

const Title = ({ title, className }) => {
  return (
    <div className={`title ${className}`}>
      <h4>{title}</h4>
      <img src={img} alt="" />
    </div>
  );
};

export default Title;
