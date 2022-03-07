import React from "react";

// images
import city from "../assets/images/city.jpg";

// import styled component
import StyledTripCard from "./StyledTripCard";
import { Link } from "react-router-dom";

function TripCard({ cityName, startDate, endDate, cityImage, dynamicLink }) {
  return (
    <Link to={dynamicLink}>
      <StyledTripCard className="trip">
        <div className="trip__image--container">
          <img className="trip__image" src={cityImage || city}></img>
        </div>
        <div className="trip__info">
          <p className="trip__cityName">{cityName}</p>
          <div className="trip__Dates&Countdown">
            <p className="trip__dates">
              <span className="trip__dates--start">{startDate}</span> -{" "}
              <span className="trip__dates--end">{endDate}</span>
            </p>
            <p className="trip__countdown"></p>
          </div>
        </div>
      </StyledTripCard>
    </Link>
  );
}

export default TripCard;
