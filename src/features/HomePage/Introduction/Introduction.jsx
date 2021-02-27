import Button from "components/Button/Button";
import Title from "components/Title/Title";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Introduction.scss";
function Introduction() {
  return (
    <Container className="introduction">
      <Row className="justify-content-center">
        <Col xs="2">
          <Title title="GIỚI THIỆU" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias
            veniam, ex rem mollitia assumenda odio enim incidunt architecto?
            Officia corporis minima repudiandae dicta quam nesciunt minus
            veritatis omnis veniam, aliquam odit porro ris minima repudiandae
            dicta quam nesciunt minus veritatis omnis veniam, aliquam odit porro
            in totam? Cum, quibusdam voluptatem rem officiis ullam, amet
            adipisci, consequuntur perferendis odio earum commodi reiciendis
            mollitia.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="2">
          <Button className="center-block" color="black" text="XEM THÊM" />
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;
