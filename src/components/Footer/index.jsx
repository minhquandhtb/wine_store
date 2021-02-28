import React from "react";
import "./Footer.scss";
import img from "assets/images/footer-img.png";
import imgFooterPayment from "assets/images/footer-payment.png";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import CartFixed from "./CartFixed/CartFixed";
import FooterItem from "./FooterItem";
import {
  TITLE_FOOTER_1,
  FOOTER_ITEMS_1,
  TITLE_FOOTER_2,
  FOOTER_ITEMS_2,
} from "constants/footer.js";
import { Container, Grid } from "@material-ui/core";
function Footer() {
  return (
    <footer className="flex-column-y">
      <CartFixed />
      <Container className="contacts">
        <Grid container>
          <img id="img-footer" src={img} alt="img" />
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <FooterItem items={FOOTER_ITEMS_1} title={TITLE_FOOTER_1} />
          </Grid>
          <Grid item xs={6} md={2}>
            <FooterItem items={FOOTER_ITEMS_2} title={TITLE_FOOTER_2} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Footer3 />
          </Grid>
          <Grid item xs={6} md={4}>
            <Footer4 />
          </Grid>
        </Grid>
        <Grid container className="payment">
          <Grid item xs={4}>
            <p>@Copy right 2008-2014 DKT Technology SJC</p>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <img src={imgFooterPayment} alt="img" />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
