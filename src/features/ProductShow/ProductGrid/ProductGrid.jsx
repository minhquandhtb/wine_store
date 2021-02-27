import "./ProductGrid.scss";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Product from "components/Product/Product";

const ProductGrid = ({ products }) => {
  const mapProducts = products.map((e, i) => (
    <Col xs="4">
      <Product key={i} product={e} />
    </Col>
  ));

  return (
    <Container>
      <Row>{mapProducts}</Row>
    </Container>
  );
};

export default ProductGrid;
