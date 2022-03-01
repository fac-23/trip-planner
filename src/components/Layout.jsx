import React from "react";
import arrowBack from "../assets/images/arrow-back.png";

function Layout({ pageTitle }) {
  return (
    <nav className="top-navigation">
      <img src={arrowBack} className="arrow-back"></img>
      <h1>{pageTitle}</h1>
    </nav>
  );
}

export default Layout;
