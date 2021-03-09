import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPagination } from "../productShowSlice";
import "./TopBar.scss";

function TopBar() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const dispatch = useDispatch();
  const handlePagination = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
    const action = setPagination(pageNumber);
    dispatch(action);
  };

  return (
    <div className="top-bar">
      <div>
        <a href="product-grid">
          <i class="fa fa-th" aria-hidden="true"></i>
        </a>
        <a href="product-list">
          <i class="fa fa-th-list" aria-hidden="true"></i>
        </a>
      </div>
      <div class="pagination">
        <button
          disabled={currentPageNumber === 1 ? true : false}
          onClick={() => handlePagination(currentPageNumber - 1)}
        >
          <i class="fa fa-caret-left"></i>
        </button>
        <button
          onClick={() => handlePagination(1)}
          className={currentPageNumber === 1 ? "active" : ""}
        >
          1
        </button>
        <button
          onClick={() => handlePagination(2)}
          className={currentPageNumber === 2 ? "active" : ""}
        >
          2
        </button>
        <button
          onClick={() => handlePagination(3)}
          className={currentPageNumber === 3 ? "active" : ""}
        >
          3
        </button>
        <button onClick={() => handlePagination(currentPageNumber + 1)}>
          <i class="fa fa-caret-right"></i>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
