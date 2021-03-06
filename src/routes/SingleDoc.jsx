import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

// components
import StyledImgPreview from "../components/styled/StyledImgPreview";
import Layout from "../components/Layout";

// import web worker to process the most tasks which take time such as parsing and rendering a PDF document
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

function SingleDoc({ documentsStore }) {
  const [singleEntry, setSingleEntry] = useState(null);

  let { key } = useParams();

  useEffect(() => {
    documentsStore
      .getItem(key)
      .then((entry) => setSingleEntry(entry))
      .catch((error) => console.log(error));
  }, [documentsStore, key]);

  // every time this state gets updated, run this use effect, inside of this useEffect we will have the updated state available.
  // useEffect(() => {
  //   console.log("SINGLE ENTRY", singleEntry);
  // }, [singleEntry]);

  return (
    <Fragment>
      <Layout pageTitle="Single Document" />

      <div className="wrapper wrapper-singledoc-page center stack-lg">
        <h1>{singleEntry && singleEntry.name}</h1>
        {singleEntry && singleEntry.entryData.includes("data:image") && (
          <StyledImgPreview src={singleEntry.entryData}></StyledImgPreview>
        )}

        {singleEntry && singleEntry.entryData.includes("data:application/pdf") && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer fileUrl={singleEntry.entryData}></Viewer>
          </Worker>
        )}
      </div>
    </Fragment>
  );
}

export default SingleDoc;
