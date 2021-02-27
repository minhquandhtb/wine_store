import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./SaleProduct.scss";
import homePageSaleProduct from "assets/images/home-page-sale-product.jpg";
import tag from "assets/images/sale-icon.png";
import ProductImage from "components/ProductImage/ProductImage";
import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import Button from "components/Button/Button";

function SaleProduct() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="sale-product" xs="10">
          <Row className="justify-content-center">
            <Col xs="6">
              <ProductImage img={homePageSaleProduct} tag={tag} />
            </Col>
            <Col xs="4">
              <div className="product-description flex-column-y">
                <ArrowTitle title="RƯỢU NHO NĂM 1987" />
                <p className="price">
                  330000
                  <span>
                    {" "}
                    <sup>đ</sup>
                  </span>
                </p>
                <Button color="black" text="ADD TO CART" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  atque dolores, illo culpa minima, tenetur.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>334</p>
                        <span>ngày</span>
                      </td>
                      <td>
                        <p>26</p>
                        <span>giờ</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>60</p>
                        <span>phút</span>
                      </td>
                      <td>
                        <p>15</p>
                        <span>giây</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SaleProduct;
