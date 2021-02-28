import React from "react";
import "./Gallery.scss";
import GalleryItem from "./GalleryItem";
import { GALLERY_IMAGES } from "constants/images";
import { Grid } from "@material-ui/core";

function Gallery() {
  const mapGalleryImages = GALLERY_IMAGES.map((e, i) => (
    <Grid item key={i} xs="3">
      <GalleryItem src={e} />
    </Grid>
  ));

  return (
    <Grid container className="gallery">
      {mapGalleryImages}
    </Grid>
  );
}

export default Gallery;
