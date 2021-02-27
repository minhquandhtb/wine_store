import React from "react";
import border from "assets/images/border.png";

const GalleryItem = ({ src }) => {
  return (
    <div className="gallery-item">
      <img className="gallery-image" src={src} alt="img" />
      <img className="gallery-image-hover" src={border} alt="img" />
    </div>
  );
};

export default GalleryItem;
