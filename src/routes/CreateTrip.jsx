import React, { Fragment, useEffect, useState } from "react";
import useDb from "../../useDb";
import Layout from "../components/Layout";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";

export default function CreateTrip({ tripsStore }) {
  const { state: stateObject, setItem } = useDb(tripsStore);

  useEffect(() => {
    console.log("stateObject FROM USEEFFECT IN TRIPS", stateObject);
  }, [stateObject]);

  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState({ start: "", end: "" });

  // useEffect(() => console.log(dates, destination), [dates, destination]);

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

          <p>When?</p>

          <label htmlFor="start-date">Start date</label>
          <input
            type="date"
            id="start-date"
            onChange={(event) => {
              const startDate = event.target.value;
              setDates((prevDateObj) => {
                return { ...prevDateObj, start: startDate };
              });
            }}
          ></input>

          <label htmlFor="start-date">End date</label>
          <input
            type="date"
            id="start-date"
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
