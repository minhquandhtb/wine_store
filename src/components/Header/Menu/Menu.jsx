import "./Menu.scss";
import React from "react";
import logo from "assets/images/brand.png";
import DropdownMenu from "./DropdownMenu";
import { Col, Container, Row } from "reactstrap";
import { HEADER_MENU_ITEM } from "constants/header";
function Menu() {
  const headerMenuItem = HEADER_MENU_ITEM.map((e, i) => {
    if (e.text === "RƯỢU VANG ĐỎ")
      return (
        <li className="nav__item" id="dropdown--1">
          <a className="nav__link" href={e.href}>
            {e.text}
          </a>
          <DropdownMenu />
        </li>
      );
    else
      return (
        <li className="nav__item">
          <a className="nav__link" href={e.href}>
            {e.text}
          </a>
        </li>
      );
  });

  return (
    <nav class="navbar navbar-main">
      <Container>
        <Row>
          <Col xs="2">
            <img className="nav__item" src={logo} alt="img" />
          </Col>
          <Col xs="10">
            <ul className="nav">{headerMenuItem}</ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Menu;
