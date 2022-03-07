import React from "react";

export default function IndividualImage({ image }) {
  return (
    <div className="photo">
      <img src={image.urls.small} alt="Unsplash Images" />
    </div>
  );
}
