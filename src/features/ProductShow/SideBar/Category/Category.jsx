import React from "react";
import { SIDE_BAR } from "constants/sideBar";
import "./Category.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setType } from "features/ProductShow/productShowSlice";

function Category() {
  const [currentType, setCurrentType] = useState(null);
  const dispatch = useDispatch();
  const handleType = (type) => {
    setCurrentType(type);
    const action = setType(type);
    dispatch(action);
  };
  const mapSideBar = SIDE_BAR.map((e) => (
    <li
      onClick={() => handleType(e)}
      className={currentType === e ? "active" : ""}
    >
      {e}
    </li>
  ));

  return (
    <div className="category">
      <ul>{mapSideBar}</ul>
    </div>
  );
}

export default Category;
