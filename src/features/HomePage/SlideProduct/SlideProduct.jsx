import React from "react";
import Carousel from "react-multi-carousel";
import { Container } from "reactstrap";
import "react-multi-carousel/lib/styles.css";
import Product from "components/Product/Product";
import "./SlideProduct.scss";

const SlideProduct = ({ products }) => {
  const productList = products.map((e, i) => (
    <Product key={i} className="slide-item" product={e} />
  ));

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous, ...rest }) => {
    return (
      <div className="carousel-button-group">
        <i className="fa fa-arrow-left" onClick={() => previous()}></i>
        <i className="fa fa-arrow-right" onClick={() => next()}></i>
      </div>
    );
  };

  return (
    <Container className="slide-product">
      <Carousel
        keyBoardControl={true}
        infinite={true}
        autoPlay={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
      >
        {productList}
      </Carousel>
    </Container>
  );
};

export default SlideProduct;
