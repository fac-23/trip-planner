import React from "react";
import StyledLink from "../components/styled/StyledLink";
import logo from "../assets/images/logo.png";

export default function Home() {
  return (
    <div className="wrapper home-wrapper center">
      <img src={logo} className="logo"></img>

      <section className="app-intro stack-md">
        <p>Hey there! 👋</p>

        <p>
          Trip Planner allows you to upload your travel documents, view them
          offline and plan your trip.
        </p>

        <p>All your data is stored on your device for maximum privacy.</p>
      </section>

      <section className="home-page-links stack-md">
        <StyledLink to="/my-documents">MY DOCUMENTS</StyledLink>

        <StyledLink to="/my-trips">MY TRIPS</StyledLink>
      </section>
    </div>
  );
}
