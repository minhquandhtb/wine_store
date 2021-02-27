import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Gallery.scss";
import GalleryItem from "./GalleryItem";
import { GALLERY_IMAGES } from "constants/images";

function Gallery() {
  const mapGalleryImages = GALLERY_IMAGES.map((e, i) => (
    <Col key={i} xs="3">
      <GalleryItem src={e} />
    </Col>
  ));

  return (
    <Container className="gallery" fluid={true}>
      <Row className="no-gutters">{mapGalleryImages}</Row>
    </Container>
  );
}

export default Gallery;
