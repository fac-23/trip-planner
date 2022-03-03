import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

// components
import StyledImgPreview from "../components/StyledImgPreview";
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
  }, []);

  // every time this state gets updated, run this use effect, inside of this useEffect we will have the updated state available.
  // useEffect(() => {
  //   console.log("SINGLE ENTRY", singleEntry);
  // }, [singleEntry]);

  // We will need some logic to detect the document type, if img or PDF, using typeFile? like on line 83 of myDocuments.jsx
  return (
    <Fragment>
      <Layout pageTitle="Single Document" />

      <div className="wrapper wrapper-singledoc-page center stack-lg">
        <h1>{singleEntry && singleEntry.name}</h1>
        {singleEntry && singleEntry.fileUrl.includes("data:image") && (
          <StyledImgPreview src={singleEntry.fileUrl}></StyledImgPreview>
        )}

        {singleEntry && singleEntry.fileUrl.includes("data:application/pdf") && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer fileUrl={singleEntry.fileUrl}></Viewer>
          </Worker>
        )}
      </div>
    </Fragment>
  );
}

export default SingleDoc;
