import React from "react";
import DropdownMenuItem from "./DropdownMenuItem";
import img from "assets/images/product-detail-content-img.png";

function DropdownMenu() {
  return (
    <div className="dropdown-menu">
      <div className="wrapper">
        <DropdownMenuItem />
        <DropdownMenuItem />
        <DropdownMenuItem />
        <img src={img} alt="img" />
      </div>
    </div>
  );
}

export default DropdownMenu;
