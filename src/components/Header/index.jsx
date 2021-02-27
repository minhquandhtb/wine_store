import React from "react";
import "./Header.scss";
import Menu from "./Menu/Menu";
import NavBar from "./NavBar";
import Slide from "./Slide/Slide";

function Header() {
  return (
    <div className="header">
      <NavBar />
      <Slide />
      <Menu />
    </div>
  );
}

export default Header;
