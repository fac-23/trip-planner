import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>This is your {singleEntry && singleEntry.name}</h1>

      <img src={singleEntry && singleEntry.fileUrl}></img>
    </div>
  );
}

export default SingleDoc;
