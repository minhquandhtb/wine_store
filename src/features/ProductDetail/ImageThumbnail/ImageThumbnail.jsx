import React from "react";
import "./ImageThumbnail.scss";

const ImageThumbnail = ({ src }) => {
  return <img className="image-thumbnail" src={src} alt="img"></img>;
};

export default ImageThumbnail;
