import "./Menu.scss";
import React from "react";
import logo from "assets/images/brand.png";
import DropdownMenu from "./DropdownMenu";
import { Col, Container, Row } from "reactstrap";
function Menu() {
  return (
    <nav class="navbar navbar-main">
      <Container>
        <Row>
          <Col xs="2">
            <img className="nav__item" src={logo} alt="img" />
          </Col>
          <Col xs="10">
            <ul className="nav">
              <li className="nav__item">
                <a className="nav__link" href="./">
                  TRANG CHỦ
                </a>
              </li>
              <li className="nav__item" id="dropdown--1">
                <a className="nav__link" href="product-grid">
                  RƯỢU VANG ĐỎ
                </a>
                <DropdownMenu />
              </li>
              <li className="nav__item">
                <a className="nav__link" href="./">
                  RƯỢU VANG TRẮNG
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="./">
                  CHAMPAGNE
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="/introduction">
                  THÔNG TIN
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="/blog">
                  BLOG
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="./">
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Menu;
