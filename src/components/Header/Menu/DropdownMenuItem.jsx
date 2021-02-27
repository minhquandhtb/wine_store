import React from "react";

function DropdownMenuItem() {
  return (
    <div className="wrapper-item">
      <ul>
        <li className="list-item">
          <a href="./">RƯỢU NGOẠI</a>
        </li>
        <li className="list-item">
          <a href="./">Rượu Chivas</a>
        </li>
        <li className="list-item">
          <a href="./">Hàng độc - Rượu độc đáo</a>
        </li>
        <li className="list-item">
          <a href="./">Johnnie Walker</a>
        </li>
        <li className="list-item">
          <a href="./">Rượu Whisky</a>
        </li>
        <li className="list-item">
          <a href="./">Rượu Remy Martin</a>
        </li>
        <li className="list-item">
          <a href="./">Rượu Glenmorangie</a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenuItem;
