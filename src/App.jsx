import React from "react";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Docs from "./routes/Docs";
import Trips from "./routes/Trips";
import Home from "./routes/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./routes/PageNotFound";
import Docs from "./routes/Docs";
import SingleDoc from "./routes/SingleDoc";
import Trips from "./routes/Trips";
import SingleTrip from "./routes/SingleTrip";
import CreateTrip from "./routes/CreateTrip";

// import localForage, library to use IndexedDB
import localforage from "localforage";

// create localforage instance to store documents
let documentsStore = localforage.createInstance({
  name: "documentsStore",
});

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/my-documents"
            element={<Docs documentsStore={documentsStore} />}
          />

          <Route
            path="/my-documents/:documentId"
            element={<SingleDoc documentsStore={documentsStore} />}
          />

          <Route path="/my-trips" element={<Trips />} />

          <Route path="/my-trips/:tripId" element={<SingleTrip />} />

          <Route path="/create-trip" element={<CreateTrip />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
