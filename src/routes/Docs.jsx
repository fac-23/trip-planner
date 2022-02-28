import React, { useState } from "react";
import { Link } from "react-router-dom";

// import localForage, library to use IndexedDB
import localforage from "localforage";

// create localforage instance to store documents
var documentsStore = localforage.createInstance({
  name: "documentsStore",
});

// import uuid, to generate random ids
import { v4 as uuidv4 } from "uuid";

// DUMMY DATA
import documents from "../dummy-data.js";

/******************** 
DOCS COMPONENT
*********************/

function Docs() {
  /* ******************* 
   STATES
  *********************/

  // might have to move all these states to app.jsx to be able to pass them down as props to documentDetail pages too
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  // const [fileKey, setFileKey] = useState("");

  /* ******************* 
   HANDLER FUNCTIONS
  *********************/

  // function to set the fileName state to whatever the user enters in the file name input field
  function nameInputHandler(event) {
    setFileName(event.target.value);
  }

  // function to set the image state to the image uploaded in the reader
  function imageInputHandler(e) {
    // if we have a loaded image
    if (e.target.files && e.target.files[0]) {
      // finds type of uploaded file, it will be useful to check if it is an image or a pdf file
      // setTypeFile(e.target.files[0].type);

      // generate a new file reader
      let reader = new FileReader();

      // when the image is loaded set the Image state to that image
      reader.onload = function (e) {
        setImage(e.target.result);
      };

      // reads the content of the last loaded image, which is stored as the file's data as a base64 encoded string.
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  // function to insert file in documentsStore, it gets called on form submit
  function insertIntoDocumentsStore(event) {
    event.preventDefault();

    // if I have an image loaded and user entered a file name
    if (image && fileName) {
      // add entry to documentsStore
      documentsStore
        .setItem(fileName, image)
        .then(function () {
          console.log("Element inserted");
        })
        .catch(function (err) {
          console.log(err);
        });

      // reset the file name input field
      setFileName("");
    }
  }

  // function to delete file from documentsStore
  function deleteFromDocumentsStore(event) {
    console.log(`clicked ${event.target.value}`);

    // find id of the document we want to remove
    const documentId = event.target.value;

    documentsStore
      .removeItem(documentId)
      .then(function () {
        // Run this code once the key has been removed.
        console.log("Key is cleared!");
      })
      .catch(function (err) {
        // This code runs if there were any errors
        console.log(err);
      });
  }

  // Function to loop over every entry in localforage and for each one render on the page an li element containing a clickable link which will be the key.
  function renderItemsFromDocumentsStore() {
    documentsStore
      // eslint-disable-next-line no-unused-vars
      .iterate(function (value, key, iterationNumber) {
        // Resulting key/value pair -- this callback
        // will be executed for every item in the
        // database.
        console.log([key, value]);
      })
      .then(function () {
        console.log("Iteration has completed");
      })
      .catch(function (err) {
        // This code runs if there were any errors
        console.log(err);
      });
  }

  // calling the function to test it
  renderItemsFromDocumentsStore();

  return (
    <div>
      <h1>This is the My Documents page</h1>

      <div className="image-upload">
        <form onSubmit={insertIntoDocumentsStore}>
          <label htmlFor="upload-input">
            <p>Click to load an image</p>
          </label>
          <input
            id="upload-input"
            type="file"
            accept=".jpg,.jpeg,.gif,.png,.pdf"
            onChange={imageInputHandler}
          />

          <label htmlFor="file-name">Enter a name for your file</label>
          <input
            type="text"
            id="file-name"
            onChange={nameInputHandler}
            value={fileName}
          />

          <button>Upload</button>
        </form>

        {/* <h2>Type is {typeFile}</h2> */}
      </div>
      {/*const randomID = uuidv4();*/}
      <ul>
        {documents.map((el) => (
          <li key={uuidv4()}>
            <Link to={`/my-documents/${el.id}`}>{el.id}</Link>
            <button
              className="btn btn-delete"
              value={el.id}
              onClick={deleteFromDocumentsStore}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      {/* Instead of looping over the dummy data object, I need to call a function to loop over localForage and render li > link elements for each entry, to each li add a key with a randomID generated using uuid */}
    </div>
  );
}

// I get localForage length
// localForage.length().then((result) => {
//   console.log(result);
// });

export default Docs;
