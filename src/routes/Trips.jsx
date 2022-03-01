import React, { Fragment } from "react";

// components
import StyledLink from "../components/StyledLink";
import Layout from "../components/Layout";

// images
import tripicon from "../assets/images/trips-icon.png";

export default function Trips() {
  return (
    <Fragment>
      <Layout pageTitle="My Trips" />

      <div className="wrapper wrapper-trips-page center stack-lg">
        <img src={tripicon} alt="icon of a trip" className="trip-icon"></img>

        <section className="trips">
          <StyledLink to="/create-trip">CREATE NEW TRIP</StyledLink>

          <ul className="trips__list stack-md"></ul>
        </section>
      </div>
    </Fragment>
  );
}
