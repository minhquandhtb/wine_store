import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import SrcPages from "components/SrcPages/SrcPages";
import React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import "./Cart.scss";
import { SRC_CART } from "constants/srcPage";
import Button from "components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "./cartSlice";
import { useEffect } from "react";

function Cart() {
  const cartItems = useSelector((state) => state.cart.initialCart);
  const mapCartItems = cartItems.map((e, i) => (
    <tr key={i}>
      <td>
        <img src={e.link} alt="" />
      </td>
      <td>{e.name}</td>
      <td>{e.price}</td>
      <td>{e.quantity}</td>
      <td>{e.price * e.quantity}</td>
      <td
        onClick={() => {
          handleCart(e.id);
        }}
      >
        {<i class="fa fa-trash" aria-hidden="true"></i>}
      </td>
    </tr>
  ));

  const dispatch = useDispatch();
  const handleCart = (id) => {
    const action = removeCartItem(id);
    dispatch(action);
  };
  useEffect(() => {
    handleCart("");
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <SrcPages srcObj={SRC_CART} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ArrowTitle title="GIỎ HÀNG" />
        </Col>
      </Row>
      <Row>
        <Table bordered>
          <thead>
            <tr>
              <th>Ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng số</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>{mapCartItems}</tbody>
        </Table>
      </Row>
      <Row className="justify-content-end">
        <a href="/product-grid">
          <Button color="black" text="TIẾP TỤC MUA HÀNG" />
        </a>
        <Button
          color="black"
          text="XÓA"
          onClick={() => localStorage.removeItem("cart")}
        />
        <Button color="black" text="CẬP NHẬT" />
      </Row>
    </Container>
  );
}

export default Cart;
