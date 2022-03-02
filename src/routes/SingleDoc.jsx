import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import documents from "../dummy-data.js";
// console.log(documents);
import { setSingleFileInitialState, getItem } from "../../helper-functions.js";

// We will need some logic to detect the document type, if img or PDF, using typeFile? like on line 83 of myDocuments.jsx

function SingleDoc({ documentsStore }) {
  // gets the param from the url, the params was defined in the dynamic route with path="/documents/:documentId" in app.jsx
  let { documentId } = useParams();

  const [singleFile, setSingleFile] = useState(
    setSingleFileInitialState(
      documentsStore,
      "a5a1ec2a-9f75-4b71-949b-12677b913fd4",
      ""
    )
  );
  useEffect(
    () =>
      getItem(
        documentsStore,
        "a5a1ec2a-9f75-4b71-949b-12677b913fd4",
        setSingleFile
      ),
    [documentsStore]
  );

  console.log("SINGLE FILE", singleFile.data);

  // PDF PREVIEW ///////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////

  return (
    <div>
      <h1>This is your {documentId}</h1>

      {/* looks in the documents object for the document with the id that we just got from the url and returns the associated data */}
      <p>{documents.find((document) => document.id === documentId).data}</p>
    </div>
  );
}

export default SingleDoc;
