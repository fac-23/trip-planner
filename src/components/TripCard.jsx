import React, { Fragment } from "react";

// images
import city from "../assets/images/city.jpg";
import bin from "../assets/images/bin.png";

// Helper function files
import useDb from "../../useDb.js";

// import styled component
import StyledTripCard from "./styled/StyledTripCard";
import { Link } from "react-router-dom";

function TripCard({
  cityName,
  startDate,
  endDate,
  cityImage,
  dynamicLink,
  tripsStore,
  trip,
}) {
  const { removeItem } = useDb(tripsStore);

  return (
    <Fragment>
      <StyledTripCard className="trip">
        <Link to={dynamicLink}>
          <div className="trip__image--container">
            <img className="trip__image" src={cityImage || city}></img>
          </div>
          <div className="trip__info stack-sm">
            <p className="trip__cityName">{cityName}</p>
            <p className="trip__dates">
              <span className="trip__dates--start">{startDate}</span> -{" "}
              <span className="trip__dates--end">{endDate}</span>
            </p>
            <p className="trip__countdown">10 days to go!</p>
          </div>
        </Link>
        <button
          value={trip.key}
          onClick={() => removeItem(trip.key)}
          className="trip__delete-btn"
        >
          <img src={bin} alt="a bin" className="trip__delete-btn--icon"></img>
        </button>
      </StyledTripCard>
    </Fragment>
  );
}

export default TripCard;
