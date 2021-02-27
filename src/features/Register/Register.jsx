import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import Button from "components/Button/Button";
import SrcPages from "components/SrcPages/SrcPages";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Register.scss";
import { SRC_REGISTER } from "constants/srcPage";
import RegisterForm from "./RegisterForm/RegisterForm";

function Register() {
  return (
    <Container className="register">
      <Row>
        <Col>
          <SrcPages srcObj={SRC_REGISTER} />
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <ArrowTitle title="ĐĂNG KÝ" />
        </Col>
        <Col xs="2" align="right">
          <a href="/login">
            <Button color="black" text="ĐĂNG NHẬP" className="btn-top" />
          </a>
        </Col>
      </Row>
      <Row className="register-form justify-content-center">
        <Col xs="11">
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
