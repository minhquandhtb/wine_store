import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import Button from "components/Button/Button";
import SrcPages from "components/SrcPages/SrcPages";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Login.scss";
import { SRC_LOGIN } from "constants/srcPage";
import LoginForm from "./LoginForm/LoginForm";

function Login() {
  return (
    <Container className="login">
      <Row>
        <Col>
          <SrcPages srcObj={SRC_LOGIN} />
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <ArrowTitle title="ĐĂNG NHẬP" />
        </Col>
        <Col xs="2" align="right">
          <a href="/register">
            <Button color="black" text="ĐĂNG KÝ" className="btn-top" />
          </a>
        </Col>
      </Row>
      <Row className="login-form justify-content-center">
        <Col xs="11">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
