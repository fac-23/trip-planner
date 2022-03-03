import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

// import uuid, to generate random ids
import { v4 as uuidv4 } from "uuid";

// Helper function files
import useDb from "../../useDb.js";
import { imageInputHandler } from "../../helper-functions.js";

// components
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import Layout from "../components/Layout";

// images
import plusicon from "../assets/images/plus-icon.png";
import bin from "../assets/images/bin.png";

function Docs({ documentsStore }) {
  // destructure helper functions specifically for this database instance from useDB
  // stateObject looks like this: { status: "loading", data: null }
  const {
    state: stateObject,
    getAll,
    setItem,
    removeItem,
  } = useDb(documentsStore);

  useEffect(() => {
    console.log("stateObject FROM USEEFFECT IN DOCS", stateObject);
  }, [stateObject]);

  /* ******************* 
   STATES
  *********************/
  // might have to move all these states to app.jsx to be able to pass them down as props to documentDetail pages too
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");

  // documents is an array of objects
  // each object has a name, data and key prop
  const documents = getAll();

  return (
    <Fragment>
      <Layout pageTitle="My Documents" />

      <div className="wrapper wrapper-documents-page center stack-lg">
        <section className="image-upload stack-lg">
          <h2>Add a new document</h2>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setItem(fileName, image);
              setFileName("");
            }}
            className="stack-md"
          >
            <label htmlFor="upload-input">Click to load an image</label>
            <StyledInput
              id="upload-input"
              type="file"
              accept=".jpg,.jpeg,.gif,.png,.pdf"
              onChange={(event) => imageInputHandler(event, setImage)}
            />

            <label htmlFor="file-name">Enter a name for your file</label>
            <StyledInput
              type="text"
              id="file-name"
              onChange={(event) => setFileName(event.target.value)}
              value={fileName}
              placeholder="Enter a name"
            />

            <StyledButton>
              <img src={plusicon} className="plus-icon" />
              UPLOAD
            </StyledButton>
          </form>
        </section>

        <section className="documents  stack-lg">
          <h2>
            Click on one document to open it, or click the bin to delete it.
          </h2>

          <ul className="documents__list stack-md">
            {documents &&
              documents.map((doc) => (
                <li key={uuidv4()} className="documents__listItem">
                  <Link
                    to={`/my-documents/${doc.key}`}
                    className="documents__link"
                  >
                    {doc.name}
                  </Link>
                  <StyledButton
                    className="documents__btn--delete"
                    value={doc.key}
                    onClick={() => removeItem(doc.key)}
                  >
                    <img src={bin} alt="a bin" className="bin"></img>
                  </StyledButton>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </Fragment>
  );
}

export default Docs;
