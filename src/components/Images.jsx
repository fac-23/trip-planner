import React from "react";
import IndividualImage from "./IndividualImage";

export default function Images({ images }) {
  // console.log(images);
  return images.map((image) => (
    <IndividualImage key={image.id} image={image} />
  ));
}
