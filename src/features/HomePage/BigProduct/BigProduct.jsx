import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./BigProduct.scss";
import homePageSaleBg from "assets/images/home-page-sale-bg.png";
import SaleProduct from "./SaleProduct/SaleProduct";

function BigProduct() {
  return (
    <Container className="big-product">
      <Row>
        <Col className="home-page-sale-bg" xs="12">
          <img src={homePageSaleBg} alt="img" />
          <SaleProduct />
        </Col>
      </Row>
    </Container>
  );
}

export default BigProduct;
