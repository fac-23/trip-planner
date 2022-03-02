import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

// import uuid, to generate random ids
import { v4 as uuidv4 } from "uuid";

// DUMMY DATA
import documents from "../dummy-data.js";

// Helper functions
import {
  nameInputHandler,
  imageInputHandler,
  insertIntoDb,
  deleteFromDb,
  renderItemsFromDb,
  getItem,
} from "../../helper-functions.js";

// components
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import Layout from "../components/Layout";

// images
import plusicon from "../assets/images/plus-icon.png";
import bin from "../assets/images/bin.png";

function Docs({ documentsStore }) {
  /* ******************* 
   STATES
  *********************/
  getItem(documentsStore, "af10d581-eb54-4a85-a9af-7fcf5e998773");
  // might have to move all these states to app.jsx to be able to pass them down as props to documentDetail pages too
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <Fragment>
      <Layout pageTitle="My Documents" />

      <div className="wrapper wrapper-documents-page center stack-lg">
        <section className="image-upload stack-lg">
          <h2>Add a new document</h2>

          <form
            onSubmit={(event) =>
              insertIntoDb(event, fileName, image, documentsStore, setFileName)
            }
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
              onChange={(event) => nameInputHandler(event, setFileName)}
              value={fileName}
              placeholder="Enter a name"
            />

            <StyledButton>
              <img src={plusicon} className="plus-icon" />
              UPLOAD
            </StyledButton>
          </form>

          {/* <h2>Type is {typeFile}</h2> */}
        </section>

        <section className="documents  stack-lg">
          <h2>
            Click on one document to open it, or click the bin to delete it.
          </h2>

          <ul className="documents__list stack-md">
            {documents.map((el) => (
              <li key={uuidv4()} className="documents__listItem">
                <Link to={`/my-documents/${el.id}`} className="documents__link">
                  {el.id}
                </Link>
                <StyledButton
                  className="documents__btn--delete"
                  value={el.key}
                  onClick={(event) =>
                    deleteFromDb(event, documentsStore, el.key)
                  }
                >
                  <img src={bin} alt="a bin" className="bin"></img>
                </StyledButton>
              </li>
            ))}

            {
              // renderItemsFromDb(documentsStore)
              /* Instead of looping over the dummy data object, I need to call a function to loop over localForage and render li > link elements for each entry, to each li add a key with a randomID generated using uuid */
            }
          </ul>
        </section>
      </div>
    </Fragment>
  );
}

// I get localForage length
// localForage.length().then((result) => {
//   console.log(result);
// });

export default Docs;
