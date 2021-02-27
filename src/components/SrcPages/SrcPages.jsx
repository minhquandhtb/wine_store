import React from "react";
import "./SrcPages.scss";

const SrcPages = ({ srcObj }) => {
  const mapSrcObj = srcObj.map((e, i) => {
    if (i === srcObj.length - 1)
      return (
        <li key={i}>
          <a className="current" href={e.href}>
            {e.text}
          </a>
        </li>
      );
    else
      return (
        <li key={i}>
          <a href={e.href}>{e.text}</a>
          <span>{"/"}</span>
        </li>
      );
  });

  return (
    <div className="src-pages">
      <ul>{mapSrcObj}</ul>
    </div>
  );
};

export default SrcPages;
