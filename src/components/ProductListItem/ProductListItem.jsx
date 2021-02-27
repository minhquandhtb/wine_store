import Button from "components/Button/Button";
import ProductImage from "components/ProductImage/ProductImage";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./ProductListItem.scss";

const ProductListItem = ({ product, className }) => {
  return (
    <div className={className}>
      <a className="product-list-item" href="./" title={product.name}>
        <Container>
          <Row>
            <Col xs="4">
              <ProductImage img={product.link} tag={product.tag} />
            </Col>
            <Col xs="8" className="product-content">
              <h5 className="title">{product.name}</h5>
              <p className="price">
                {product.price}
                <sup>đ</sup>
              </p>
              <span>{" - "}</span>
              <p className="original">
                {product.original}
                <sup>đ</sup>
              </p>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                optio assumenda magni, autem aliquid mollitia aspernatur
                dignissimos deserunt at soluta.
              </p>
              <Row className="btn-wrapper no-gutters align-items-center">
                <Button color="black" text="ADD TO CART" />
                <div className="btn-wrapper__item">
                  <i className="fa fa-heart"></i>
                  <span>Yêu thích</span>
                </div>
                <div className="btn-wrapper__item">
                  <i className="fa fa-bar-chart"></i>
                  <span>So sánh</span>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </a>
    </div>
  );
};

export default ProductListItem;
