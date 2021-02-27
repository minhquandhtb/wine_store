import Button from "components/Button/Button";
import ProductImage from "components/ProductImage/ProductImage";
import { addCart } from "features/ProductShow/productShowSlice";
import React from "react";
import { useDispatch } from "react-redux";
import "./Product.scss";

const Product = ({ product, className }) => {
  const dispatch = useDispatch();
  const handleAddCart = (id, name, price, link) => {
    const cartItem = {
      id: id,
      name: name,
      price: price,
      link: link,
      quantity: 1,
    };
    const action = addCart(cartItem);
    dispatch(action);
    document.getElementById("addSuccessfully").style.display = "flex";
    setTimeout(function () {
      document.getElementById("addSuccessfully").style.display = "none";
    }, 800);
  };

  return (
    <div className={className}>
      <a className="product" href="./" title={product.name}>
        <div className="wrapper-popup">
          <ProductImage img={product.link} tag={product.tag} />
          <div className="popup">
            <div className="popup__item">
              <i className="fa fa-heart"></i>
              <span>Yêu thích</span>
            </div>
            <div className="popup__item">
              <i className="fa fa-bar-chart"></i>
              <span>So sánh</span>
            </div>
            <div className="popup__item">
              <i className="fa fa-compress"></i>
            </div>
          </div>
        </div>
      </a>
      <div className="product-content">
        <h5 className="title">{product.name}</h5>
        <p className="price">
          {product.price}
          <sup>đ</sup>
        </p>
        <span>{" - "}</span>
        <p className="original">
          {product.original}
          <sup>đ</sup>
        </p>
        <br />
        <br />
        <Button
          color="black"
          text="ADD TO CART"
          onClick={() =>
            handleAddCart(product.id, product.name, product.price, product.link)
          }
        />
      </div>
    </div>
  );
};

export default Product;
