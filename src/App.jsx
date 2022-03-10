import React from "react";
import "./css/index.css";

// Import React Router packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages components
import Home from "./routes/Home";
import PageNotFound from "./routes/PageNotFound";
import Docs from "./routes/Docs";
import SingleDoc from "./routes/SingleDoc";
import Trips from "./routes/Trips";
import SingleTrip from "./routes/SingleTrip";
import CreateTrip from "./routes/CreateTrip";
// import SearchPhotos from "./SearchPhotos";

// Import global styles - CSS variables
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  html {
    --color-font: #333;
    --color-primary: #00b9ad;
    --color-primary-light: #b3eae7;
    --color-light-grey: #f4f4f4;
  }
`;

// import localForage, library to use IndexedDB
import localforage from "localforage";

// create localforage instance to store documents
let documentsStore = localforage.createInstance({
  name: "documentsStore",
});

// create localforage instance to store trips
let tripsStore = localforage.createInstance({
  name: "tripsStore",
});

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route data-testid="home" path="/" element={<Home />}></Route>

          <Route
            path="/my-documents"
            element={<Docs documentsStore={documentsStore} />}
          />

          <Route
            path="/my-documents/:key"
            element={<SingleDoc documentsStore={documentsStore} />}
          />

          <Route path="/my-trips" element={<Trips tripsStore={tripsStore} />} />

          <Route
            path="/my-trips/:key"
            element={<SingleTrip tripsStore={tripsStore} />}
          />

          <Route
            path="/create-trip"
            element={<CreateTrip tripsStore={tripsStore} />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <SearchPhotos /> */}
    </div>
  );
}

export default App;
