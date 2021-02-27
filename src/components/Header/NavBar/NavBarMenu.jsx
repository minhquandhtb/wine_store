import React from "react";
import { HEADER_NAV_ITEM } from "constants/header";

function NavBarMenu() {
  const navMenuItem = HEADER_NAV_ITEM.map((e, i) => {
    if (i === HEADER_NAV_ITEM.length - 1)
      return (
        <li key={i}>
          <a href={e.href}>{e.text}</a>
        </li>
      );
    else
      return (
        <li key={i}>
          <a href={e.href}>{e.text}</a>
          <span>{"-"}</span>
        </li>
      );
  });

  return (
    <div className="nav-bar__menu">
      <ul>{navMenuItem}</ul>
    </div>
  );
}

export default NavBarMenu;
