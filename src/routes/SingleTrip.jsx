import React from "react";
import { useParams } from "react-router-dom";

export default function SingleTrip() {
  // get trip object
  let trip = useParams();

  // display trip destination
  return (
    <div>
      <h2>{trip.destination}</h2>
    </div>
  );
}
