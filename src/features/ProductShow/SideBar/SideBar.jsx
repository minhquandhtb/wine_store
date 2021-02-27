import "./SideBar.scss";
import React from "react";
import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import Category from "./Category/Category";
import Tag from "./Tag/Tag";
import { IMAGES } from "constants/images";

function SideBar() {
  return (
    <div className="side-bar">
      <ArrowTitle title="DANH MỤC SẢN PHẨM" />
      <Category />
      <ArrowTitle title="SO SÁNH SẢN PHẨM" />
      <p>Bạn chưa có sản phẩm nào để so sánh</p>
      <ArrowTitle title="TAG SẢN PHẨM" />
      <Tag />
      <img src={IMAGES.PRODUCT_BANNER_2} alt="" />
    </div>
  );
}

export default SideBar;
