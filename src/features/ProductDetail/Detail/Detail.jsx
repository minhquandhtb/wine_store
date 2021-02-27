import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import React from "react";
import "./Detail.scss";

function Detail() {
  return (
    <div class="detail">
      <ArrowTitle title="RƯỢU NHO NĂM 1987" />
      <p class="price">
        330.000<sup>đ</sup>
      </p>
      <div class="rate">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-half-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <hr />
      </div>
      <div class="color">
        <h4>MÀU SẮC </h4>
        <div class="square-1"></div>
        <div class="square-2"></div>
        <div class="square-3"></div>
      </div>
      <div class="size">
        <h4>KÍCH CỠ</h4>
        <form>
          <select id="size" name="size">
            <option value="big">Loại lớn</option>
            <option value="medium">Loại vừa</option>
            <option value="small">Loại nhỏ</option>
          </select>
        </form>
      </div>
      <div class="count">
        <h4>SỐ LƯỢNG</h4>
        <div class="wrapper">
          <i class="fa fa-plus" aria-hidden="true"></i>
          <form action="">
            <input type="number" id="quantity" name="quantity" min="1" />
          </form>
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
        <button class="btn btn-black" type="submit">
          ADD TO CART
        </button>
      </div>
      <div class="icon">
        <i class="fa fa-heart" aria-hidden="true"></i>
        <span>Yêu thích </span>
        <i class="fa fa-bar-chart" aria-hidden="true"></i>
        <span>So sánh </span>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <span>Email</span>
      </div>
      <div class="description">
        <h4>MÔ TẢ</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga
          velit optio quo ducimus ratione!
        </p>
      </div>
      <div class="social"></div>
    </div>
  );
}

export default Detail;
