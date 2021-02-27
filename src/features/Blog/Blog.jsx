import SrcPages from "components/SrcPages/SrcPages";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { SRC_BLOG } from "constants/srcPage";
import ArrowTitle from "components/ArrowTitle/ArrowTitle";
import NewAndBlogItem from "components/NewAndBlogItem/NewAndBlogItem";
import { IMAGES } from "constants/images";

function Blog() {
  return (
    <Container>
      <Row>
        <Col>
          <SrcPages srcObj={SRC_BLOG} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ArrowTitle title="BLOG" />
        </Col>
      </Row>
      <Row>
        <Col xs="4">
          <NewAndBlogItem src={IMAGES.BLOG[0]} />
        </Col>
        <Col xs="4">
          <NewAndBlogItem src={IMAGES.BLOG[1]} />
        </Col>
        <Col xs="4">
          <NewAndBlogItem src={IMAGES.BLOG[0]} />
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
