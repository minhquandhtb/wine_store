import React from "react";
import "./BigProduct.scss";
import homePageSaleBg from "assets/images/home-page-sale-bg.png";
import SaleProduct from "./SaleProduct/SaleProduct";
import { Container } from "@material-ui/core";

function BigProduct() {
  return (
    <Container fixed className="big-product">
      <div className="home-page-sale-bg">
        <img src={homePageSaleBg} alt="img" />
        <SaleProduct />
      </div>
    </Container>
  );
}

export default BigProduct;
