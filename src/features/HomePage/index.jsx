import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import BigProduct from "./BigProduct/BigProduct";
import Customer from "./Customer/Customer";
import Gallery from "./Gallery/Gallery";
import "./HomePage.scss";
import Introduction from "./Introduction/Introduction";
import NewsAndBlog from "./NewsAndBlog/NewsAndBlog";
import SlideProduct from "./SlideProduct/SlideProduct";
import Title from "components/Title/Title";
import { useSelector } from "react-redux";

function HomePage() {
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
      <Container className="home-page" fluid={true}>
        <Row>
          <Introduction />
        </Row>
        <Row>
          <BigProduct />
        </Row>
        <Row>
          <Col>
            <Title title="SẢN PHẨM MỚI" />
          </Col>
        </Row>
        <Row>
          <SlideProduct products={products} />
        </Row>
        <Row>
          <Gallery />
        </Row>
        <Row>
          <Col>
            <Title title="SẢN PHẨM BÁN CHẠY" />
          </Col>
        </Row>
        <Row>
          <SlideProduct products={products} />
        </Row>
        <Row>
          <Container>
            <Row>
              <Col xs="8">
                <NewsAndBlog />
              </Col>
              <Col xs="4">
                <Customer />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
