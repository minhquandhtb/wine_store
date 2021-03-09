import SrcPages from "components/SrcPages/SrcPages";
import { IMAGES } from "constants/images";
import { SRC_PRODUCTS_SHOW } from "constants/srcPage";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import ProductGrid from "./ProductGrid/ProductGrid";
import ProductList from "./ProductList/ProductList";
import "./ProductShow.scss";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar/TopBar";

function ProductShow() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const url =
    useSelector((state) => state.urlChange.initialPagination) +
    useSelector((state) => state.urlChange.initialType);
  console.log(url);
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
      <Container className="product-show">
        <Row>
          <Col>
            <SrcPages srcObj={SRC_PRODUCTS_SHOW} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={IMAGES.PRODUCT_BANNER} alt="img" />
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <SideBar />
          </Col>
          <Col xs="9">
            <Row>
              <TopBar />
            </Row>
            <Row>
              <BrowserRouter>
                <Switch>
                  <Route
                    path="/wine_store/product-grid"
                    component={() => <ProductGrid products={products} />}
                  />
                  <Route
                    path="/wine_store/product-list"
                    component={() => <ProductList products={products} />}
                  />
                </Switch>
              </BrowserRouter>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductShow;
