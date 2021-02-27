import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartFixed.scss";
import { loadCart } from "features/ProductShow/productShowSlice";

function CartFixed() {
  const numberItem = useSelector((state) => state.urlChange.initialCart);
  const dispatch = useDispatch();
  const handleLoad = () => {
    const action = loadCart();
    dispatch(action);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <a href="/cart" id="cart-icon">
        <i className="fa fa-shopping-cart">
          <span id="cart-icon-quantity">{numberItem.length}</span>
        </i>
      </a>
    </div>
  );
}

export default CartFixed;
