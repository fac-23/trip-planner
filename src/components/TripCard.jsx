import React, { Fragment, useState } from "react";

// images
import city from "../assets/images/city.jpg";
import bin from "../assets/images/bin.png";

// import styled component
import StyledTripCard from "./styled/StyledTripCard";
import { Link } from "react-router-dom";
import axios from "react";

function TripCard({
  cityName,
  startDate,
  endDate,
  cityImage,
  dynamicLink,
  trip,
  removeItem,
}) {
  // Attempt with useState

  const [image, setImage] = useState([]);
  const getImage = () => {
    axios
      .get(
        "https://api.unsplash.com/photos/random/?client_id=3mexP1zmtlv1xDjsia73HbW7EQ0gHC-mjLeSx59JQpw"
      )
      .then((response) => {
        setImage(response.data.results);
      });
  };

  // Attempt with fetch

  // let clientId = "3mexP1zmtlv1xDjsia73HbW7EQ0gHC-mjLeSx59JQpw";
  // let url = `https://api.unsplash.com/photos/random/?client_id=${clientId}`;

  // fetch(url)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (jsonData) {
  //     console.log(jsonData);
  //   });

  // Attempt with useEffect

  // const accessKey = "3mexP1zmtlv1xDjsia73HbW7EQ0gHC-mjLeSx59JQpw";
  // useEffect(() => {
  //   axios.get(
  //     (`https://api.unsplash.com/photos/random`,
  //     {
  //       params: { query: cityName },
  //       headers: {
  //         Authorization: `Client-ID ${accessKey}`,
  //       },
  //     }).then((response) => {
  //       console.log(response);
  //     })
  //   );
  // });

  return (
    <Fragment>
      <StyledTripCard className="trip">
        <Link to={dynamicLink}>
          <div className="trip__image--container">
            {image.map((value, index) => {
              <div key={index}>
                <img
                  className="trip__image"
                  src={value.urls.small || cityImage || city}
                  alt="destination"
                />
              </div>;
            })}
            <button onClick={getImage}>Img</button>
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
