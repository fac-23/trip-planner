import React from "react";
import arrowBack from "../assets/images/arrow-back.png";
import arrowNext from "../assets/images/arrow-next.png";
import { useNavigate } from "react-router-dom";
import styles from "styled-components";

function Layout({ pageTitle }) {
  const navigate = useNavigate();
  return (
    <nav className="top-navigation">
      <button className={styles.btn} onClick={() => navigate(-1)}>
        <img src={arrowBack} className="arrow-back"></img>
      </button>
      <button className={styles.btn} onClick={() => navigate(1)}>
        <img src={arrowNext} className="arrow-next"></img>
      </button>
      <h1>{pageTitle}</h1>
    </nav>
  );
}

export default Layout;
