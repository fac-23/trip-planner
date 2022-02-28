import React from "react";
import { useParams } from "react-router-dom";
import documents from "../dummy-data.js";
// console.log(documents);

// We will need some logic to detect the document type, if img or PDF, using typeFile? like on line 83 of myDocuments.jsx

function SingleDoc() {
  // gets the param from the url, the params was defined in the dynamic route with path="/documents/:documentId" in app.jsx
  let { documentId } = useParams();
  return (
    <div>
      <h1>This is your {documentId}</h1>

      {/* looks in the documents object for the document with the id that we just got from the url and returns the associated data */}
      <p>{documents.find((document) => document.id === documentId).data}</p>
    </div>
  );
}

export default SingleDoc;
