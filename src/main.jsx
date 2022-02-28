import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
// import App from "./App";
import Home from "./routes/Home";
import PageNotFound from "./routes/PageNotFound";
import Docs from "./routes/Docs";
import SingleDoc from "./routes/SingleDoc";
import Trips from "./routes/Trips";
import SingleTrip from "./routes/SingleTrip";
import CreateTrip from "./routes/CreateTrip";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/my-documents" element={<Docs />} />

        <Route path="/my-documents/:documentId" element={<SingleDoc />} />

        <Route path="/my-trips" element={<Trips />} />

        <Route path="/my-trips/:tripId" element={<SingleTrip />} />

        <Route path="/create-trip" element={<CreateTrip />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
