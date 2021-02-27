import React from "react";
import slide1 from "../../../assets/images/slide-1.jpg";
import slideText from "../../../assets/images/slideText.png";
import "./Slide.scss";

function Slide() {
  return (
    <div className="slide">
      <img className="slide__image" src={slide1} alt="img" />
      <img className="slide__text" src={slideText} alt="img" />
    </div>
  );
}

export default Slide;
