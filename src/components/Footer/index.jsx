import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Footer.scss";
import img from "assets/images/footer-img.png";
import imgFooterPayment from "assets/images/footer-payment.png";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import CartFixed from "./CartFixed/CartFixed";
import FooterItem from "./FooterItem";
import {
  TITLE_FOOTER_1,
  FOOTER_ITEMS_1,
  TITLE_FOOTER_2,
  FOOTER_ITEMS_2,
} from "constants/footer.js";
function Footer() {
  return (
    <footer className="flex-column-y">
      <CartFixed />
      <Container className="contacts">
        <Row>
          <img src={img} alt="img" />
        </Row>
        <br />
        <Row>
          <Col xs="6" md="2">
            <FooterItem items={FOOTER_ITEMS_1} title={TITLE_FOOTER_1} />
          </Col>
          <Col xs="6" md="2">
            <FooterItem items={FOOTER_ITEMS_2} title={TITLE_FOOTER_2} />
          </Col>
          <Col xs="6" md="4">
            <Footer3 />
          </Col>
          <Col xs="6" md="4">
            <Footer4 />
          </Col>
        </Row>
        <Row className="payment">
          <Col xs="4">
            <p>@Copy right 2008-2014 DKT Technology SJC</p>
          </Col>
          <Col xs="4"></Col>
          <Col xs="4">
            <img src={imgFooterPayment} alt="img" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
