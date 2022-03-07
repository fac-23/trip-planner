import React, { Fragment, useEffect, useState } from "react";
import { formatDate } from "../../helper-functions";
import useDb from "../../useDb";
import Layout from "../components/Layout";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import axios from "axios";
import Images from "../components/Images";

export default function CreateTrip({ tripsStore }) {
  const { state: stateObject, setItem } = useDb(tripsStore);

  // fetch unsplash api photos
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const [images, setImages] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${accessKey}`
    );
    const data = await response.data;
    setImages(data);
  };

  useEffect(() => {
    console.log("stateObject FROM USEEFFECT IN TRIPS", stateObject);
  }, [stateObject]);

  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState({ start: "", end: "" });

  return (
    <Fragment>
      <Layout pageTitle="Create Trip" />
      <div className="wrapper wrapper-trips-page">
        <h2>Create a new trip</h2>
        <form
          className="stack-md"
          onSubmit={(event) => {
            event.preventDefault();
            setItem(destination, dates);
            setDestination("");
          }}
        >
          <label htmlFor="destination">Where to?</label>
          <StyledInput
            type="text"
            id="destination"
            onChange={(event) => setDestination(event.target.value)}
            value={destination}
            placeholder="Enter your destination"
          />
          <button onClick={fetchAPI}>Search destination</button>
          <div className="photos">
            {images.length > 0 && <Images images={images} />}
          </div>

          <p>When?</p>
          <label htmlFor="start-date">Start date</label>
          <input
            type="date"
            id="start-date"
            value={formatDate(new Date())}
            onChange={(event) => {
              const startDate = event.target.value;
              setDates((prevDateObj) => {
                return { ...prevDateObj, start: startDate };
              });
            }}
          ></input>
          <label htmlFor="end-date">End date</label>
          <input
            type="date"
            id="end-date"
            value={formatDate(new Date())}
            onChange={(event) => {
              const endDate = event.target.value;
              setDates((prevDateObj) => {
                return { ...prevDateObj, end: endDate };
              });
            }}
          ></input>
          <StyledButton>Add to My Trips</StyledButton>
        </form>
      </div>
    </Fragment>
  );
}
