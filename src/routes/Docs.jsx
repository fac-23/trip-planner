import React, { useState } from "react";
import { Link } from "react-router-dom";

// import localForage, library to use IndexedDB
import localforage from "localforage";

// create localforage instance to store documents
let documentsStore = localforage.createInstance({
  name: "documentsStore",
});

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
} from "../../helper-functions.js";

function Docs() {
  /* ******************* 
   STATES
  *********************/

  // might have to move all these states to app.jsx to be able to pass them down as props to documentDetail pages too
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <div>
      <h1>This is the My Documents page</h1>

      <div className="image-upload">
        <form
          onSubmit={(event) =>
            insertIntoDb(event, fileName, image, documentsStore, setFileName)
          }
        >
          <label htmlFor="upload-input">
            <p>Click to load an image</p>
          </label>
          <input
            id="upload-input"
            type="file"
            accept=".jpg,.jpeg,.gif,.png,.pdf"
            onChange={(event) => imageInputHandler(event, setImage)}
          />

          <label htmlFor="file-name">Enter a name for your file</label>
          <input
            type="text"
            id="file-name"
            onChange={(event) => nameInputHandler(event, setFileName)}
            value={fileName}
          />

          <button>Upload</button>
        </form>

        {/* <h2>Type is {typeFile}</h2> */}
      </div>

      <ul>
        {documents.map((el) => (
          <li key={uuidv4()}>
            <Link to={`/my-documents/${el.id}`}>{el.id}</Link>
            <button
              className="btn btn-delete"
              value={el.key}
              onClick={(event) => deleteFromDb(event, documentsStore, el.key)}
            >
              X
            </button>
          </li>
        ))}

        {
          renderItemsFromDb(documentsStore)

          /* Instead of looping over the dummy data object, I need to call a function to loop over localForage and render li > link elements for each entry, to each li add a key with a randomID generated using uuid */
        }
      </ul>
    </div>
  );
}

// I get localForage length
// localForage.length().then((result) => {
//   console.log(result);
// });

export default Docs;
