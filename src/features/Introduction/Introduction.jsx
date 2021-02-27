import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import SrcPages from "components/SrcPages/SrcPages";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Introduction.scss";
import { SRC_INTRODUCTION } from "constants/srcPage";
import { IMAGES } from "constants/images";

function Introduction() {
  return (
    <Container className="introduction">
      <Row>
        <Col>
          <SrcPages srcObj={SRC_INTRODUCTION} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ArrowTitle title="GIỚI THIỆU" />
        </Col>
      </Row>
      <Row>
        <Col xs="5">
          <img className="img" src={IMAGES.HOME_PAGE_SALE_BG} alt="img" />
        </Col>
        <Col xs="7">
          <h5>CHÀO MỪNG ĐẾN VỚI WINE HOUSE</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            ipsam odio totam maxime quae, eaque minima, quaerat consectetur
            possimus dicta voluptatum illum magnam impedit cumque harum cum
            assumenda repellat neque sequi, ab ut ea. Molestias, dicta odit?
            Quae non voluptatem ratione vitae soluta nobis voluptatibus autem
            voluptates. Laboriosam, inventore illo! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Repudiandae velit nostrum rem quae
            beatae, earum necessitatibus in eos facere deserunt minima
            perferendis cupiditate. Distinctio officiis minima, voluptate nobis
            at quidem officia enim soluta, adipisci ipsum fuga dignissimos
            suscipit obcaecati id, aliquam autem sit. Provident, veniam odit
            harum fugiat voluptatem quos.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;
