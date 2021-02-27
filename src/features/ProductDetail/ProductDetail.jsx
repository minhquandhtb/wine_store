import SrcPages from "components/SrcPages/SrcPages";
import Title from "components/Title/Title";
import { IMAGES } from "constants/images";
import { SRC_PRODUCTS_DETAIL } from "constants/srcPage";
import SlideProduct from "features/HomePage/SlideProduct/SlideProduct";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Detail from "./Detail/Detail";
import "./ProductDetail.scss";
import SimpleTabs from "./SimpleTabs";
import VerticalTabs from "./VerticalTabs";

function ProductDetail() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const url = useSelector((state) => state.urlChange.initialSlice);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container className="product-detail">
        <Row>
          <Col>
            <SrcPages srcObj={SRC_PRODUCTS_DETAIL} />
          </Col>
        </Row>
        <Row>
          <Col xs="7">
            <VerticalTabs />
          </Col>
          <Col xs="5">
            <Detail />
          </Col>
        </Row>
        <Row>
          <Col xs="8">
            <SimpleTabs />
          </Col>
          <Col xs="4">
            <img src={IMAGES.PRODUCT_DETAIL_CONTENT_IMG} alt="img" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Title title="SẢN PHẨM LIÊN QUAN" />
          </Col>
        </Row>
        <Row>
          <SlideProduct products={products} />
        </Row>
      </Container>
    );
  }
}

export default ProductDetail;
