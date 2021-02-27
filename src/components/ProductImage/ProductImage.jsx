import React from "react";
import "./ProductImage.scss";
import { TAG } from "constants/images";

const ProductImage = ({ img, tag }) => {
  let src = null;
  if (tag === "hot") src = TAG.HOT;
  else if (tag === "new") src = TAG.NEW;
  else if (tag === "sale") src = TAG.SALE;

  return (
    <div className="product-image">
      <img className="img" src={img} alt="" />
      <img className="tag" src={src} alt="" />
    </div>
  );
};

export default ProductImage;
