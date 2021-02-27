import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import SrcPages from "components/SrcPages/SrcPages";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Address.scss";
import { SRC_ADDRESS } from "constants/srcPage";
import AddressForm from "./AddressForm/AddressForm";

function Address() {
  return (
    <Container className="address">
      <Row>
        <Col>
          <SrcPages srcObj={SRC_ADDRESS} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ArrowTitle title="Địa chỉ" />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <AddressForm />
        </Col>
        <Col xs="6">
          <AddressForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Address;
