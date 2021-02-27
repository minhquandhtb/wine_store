import React from "react";
import { Col, Container, Row } from "reactstrap";
import NavBarMenu from "./NavBarMenu";
import NavBarSearch from "./NavBarSearch";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="nav-bar">
      <Container>
        <Row>
          <Col>
            <NavBarMenu />
          </Col>
          <Col>
            <NavBarSearch />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
