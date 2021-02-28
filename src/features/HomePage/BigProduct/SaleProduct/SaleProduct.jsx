import React from "react";
import "./SaleProduct.scss";
import homePageSaleProduct from "assets/images/home-page-sale-product.jpg";
import ProductImage from "components/ProductImage/ProductImage";
import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import Button from "components/Button/Button";
import { Grid } from "@material-ui/core";

function SaleProduct() {
  return (
    <Grid container justify="center" className="sale-product">
      <Grid className="sale-product__bg" item xs={10}></Grid>
      <Grid className="sale-product__content" justify="center" container>
        <Grid item xs={5}>
          <ProductImage img={homePageSaleProduct} tag="sale" />
        </Grid>
        <Grid item xs={3}>
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
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SaleProduct;
