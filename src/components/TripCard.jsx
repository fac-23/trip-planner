import React, { Fragment, useEffect, useState } from "react";

// images
import city from "../assets/images/city.jpg";
import bin from "../assets/images/bin.png";

// import styled component
import StyledTripCard from "./styled/StyledTripCard";
import { Link } from "react-router-dom";

function TripCard({
  cityName,
  startDate,
  endDate,
  dynamicLink,
  trip,
  removeItem,
}) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${cityName}&per_page=1&client_id=3mexP1zmtlv1xDjsia73HbW7EQ0gHC-mjLeSx59JQpw`
    )
      .then((data) => data.json())
      .then((data) =>
        // console.log("DATA FROM TRIP CARD", data.results[0].urls.small)
        setImageUrl(data.results[0].urls.small)
      );
  });

  return (
    <Fragment>
      <StyledTripCard className="trip">
        <Link to={dynamicLink}>
          <div className="trip__image--container">
            <img className="trip__image" src={imageUrl || city}></img>
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
          aria-label="Delete trip"
        >
          <img src={bin} alt="a bin" className="trip__delete-btn--icon"></img>
        </button>
      </StyledTripCard>
    </Fragment>
  );
}

export default TripCard;
