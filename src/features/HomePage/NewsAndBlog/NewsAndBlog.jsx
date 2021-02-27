import Title from "components/Title/Title";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { IMAGES } from "constants/images";
import NewAndBlogItem from "components/NewAndBlogItem/NewAndBlogItem";

function NewsAndBlog() {
  return (
    <Container>
      <Title title="TIN TỨC & BLOG" />
      <Row>
        <Col xs="6">
          <NewAndBlogItem src={IMAGES.BLOG[0]} />
        </Col>
        <Col xs="6">
          <NewAndBlogItem src={IMAGES.BLOG[1]} />
        </Col>
      </Row>
    </Container>
  );
}

export default NewsAndBlog;
