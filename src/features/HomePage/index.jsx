import React, { useEffect, useState } from "react";
import BigProduct from "./BigProduct/BigProduct";
import Customer from "./Customer/Customer";
import Gallery from "./Gallery/Gallery";
import "./HomePage.scss";
import Introduction from "./Introduction/Introduction";
import NewsAndBlog from "./NewsAndBlog/NewsAndBlog";
import SlideProduct from "./SlideProduct/SlideProduct";
import Title from "components/Title/Title";
import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";

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
      <Grid
        container
        direction="column"
        alignItems="center"
        className="home-page"
        spacing={0}
      >
        <Grid item>
          <Introduction />
        </Grid>
        <Grid item>
          <BigProduct />
        </Grid>
        <Grid item>
          <Title title="SẢN PHẨM MỚI" />
          <SlideProduct products={products} />
        </Grid>
        <Grid item>
          <Gallery />
        </Grid>
        <Grid item>
          <Title title="SẢN PHẨM BÁN CHẠY" />
          <SlideProduct products={products} />
        </Grid>
        <Grid item>
          <Container>
            <Grid container>
              <Grid item xs={8}>
                <NewsAndBlog />
              </Grid>
              <Grid item xs={4}>
                <Customer />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
