import React, { Fragment } from "react";
import trips from "../dummy-data";

// components
import StyledLink from "../components/StyledLink";
// import StyledTrips from "../components/StyledTrips";
import Layout from "../components/Layout";

// images
import tripicon from "../assets/images/trips-icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
console.log("Trip", trips);
export default function Trips() {
  return (
    <Fragment>
      <Layout pageTitle="My Trips" />

      <div className="wrapper wrapper-trips-page center stack-lg">
        <img src={tripicon} alt="icon of a trip" className="trip-icon"></img>

        <section className="trips">
          <StyledLink to="/create-trip">
            CREATE NEW TRIP <strong>+</strong>
          </StyledLink>
        </section>

        <section className="trip-card">
          <ul className="trips__list stack-md">
            <div>
              {trips.map((trip) => (
                <p key={trip.name}>
                  {trip.name}
                  {trip.date}
                </p>
              ))}
            </div>
            {/* <StyledTrips /> */}
          </ul>
        </section>
      </div>
    </Fragment>
  );
}
