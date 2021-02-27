import "./ProductList.scss";
import React from "react";
import { Container, Row } from "reactstrap";
import ProductListItem from "components/ProductListItem/ProductListItem";

const ProductList = ({ products }) => {
  const mapProducts = products.map((e, i) => (
    <Row className="product-list">
      <ProductListItem key={i} product={e} />
    </Row>
  ));

  return <Container>{mapProducts}</Container>;
};

export default ProductList;
