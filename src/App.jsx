import React from "react";
import "./css/App.css";

// Import React Router packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PWA config

// commented out as it is registered as a plugin and vite knows where to look for it
// eslint-disable-next-line import/no-unresolved
import { registerSW } from "virtual:pwa-register";

// If we have a service worker and we are not in development, start the service worker. If line 16 is commented out we will instead be able to start the service worker while we are in the development phase to be able to work on it.
if (
  "serviceWorker" in navigator
  // && window.location.includes("/localhost/") === false
) {
  registerSW();
}

// Import Pages components
import Home from "./routes/Home";
import PageNotFound from "./routes/PageNotFound";
import Docs from "./routes/Docs";
import SingleDoc from "./routes/SingleDoc";
import Trips from "./routes/Trips";
import SingleTrip from "./routes/SingleTrip";
import CreateTrip from "./routes/CreateTrip";

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
    </div>
  );
}

export default App;
