import React, { Fragment } from "react";
// import React, { Fragment, useEffect } from "react";
// components
import StyledLink from "../components/styled/StyledLink";
import Layout from "../components/Layout";
import TripCard from "../components/TripCard";

// images
import tripicon from "../assets/images/trips-icon.png";

// Helper function files
import useDb from "../hooks/useDb.js";

export default function Trips({ tripsStore }) {
  const {
    // state: stateObject,
    getAll,
    removeItem,
  } = useDb(tripsStore);

  const trips = getAll();

  // useEffect(() => {
  //   console.log("stateObject FROM TRIPS", stateObject);
  // }, [stateObject]);
  return (
    <Fragment>
      <Layout pageTitle="My Trips" />

      <div className="wrapper wrapper-trips-page center stack-lg">
        <img src={tripicon} alt="icon of a trip" className="trip-icon"></img>

        <section className="create-trip">
          <StyledLink to="/create-trip">
            CREATE NEW TRIP <strong>+</strong>
          </StyledLink>
        </section>

        <section className="trips">
          <ul className="trips__list stack-md">
            {trips &&
              trips.map((trip) => (
                <li key={trip.key} className="trips__listItem">
                  <TripCard
                    dynamicLink={`/my-trips/${trip.key}`}
                    cityName={trip.name}
                    startDate={trip.entryData.start.replaceAll("-", "/")}
                    endDate={trip.entryData.end.replaceAll("-", "/")}
                    cityImage={trip.image}
                    tripsStore={tripsStore}
                    trip={trip}
                    removeItem={removeItem}
                  ></TripCard>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </Fragment>
  );
}
