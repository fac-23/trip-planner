// import uuid, to generate random ids
import { v4 as uuidv4 } from "uuid";

// function to set the fileName state to whatever the user enters in the file name input field
function nameInputHandler(event, setState) {
  setState(event.target.value);
}

// function to set the image state to the image uploaded in the reader
function imageInputHandler(event, setState) {
  // if we have a loaded image
  if (event.target.files && event.target.files[0]) {
    // finds type of uploaded file, it will be useful to check if it is an image or a pdf file
    // setTypeFile(e.target.files[0].type);

    // generate a new file reader
    let reader = new FileReader();

    // when the image is loaded set the Image state to that image
    reader.onload = function (event) {
      setState(event.target.result);
    };

    // reads the content of the last loaded image, which is stored as the file's data as a base64 encoded string.
    reader.readAsDataURL(event.target.files[0]);
  }
}

// function to insert file in documentsStore, it gets called on form submit
function insertIntoDb(event, name, data, db, setState) {
  event.preventDefault();

  let randomKey = uuidv4();

  // if I have an image loaded and user entered a file name
  if (data && name) {
    // add entry to documentsStore
    db.setItem(randomKey, { name, data })
      .then(function () {
        console.log(`File ${name} inserted`);
      })
      .catch(function (err) {
        console.log(err);
      });

    // reset the file name input field
    setState("");
  }
}

// function to delete file from documentsStore
function deleteFromDb(event, db, elementKey) {
  // console.log(`clicked ${event.target.value}`);

  // find id of the document we want to remove
  // const documentId = event.target.value;

  db.removeItem(elementKey)
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
function renderItemsFromDb(db) {
  db
    // eslint-disable-next-line no-unused-vars
    .iterate(function (value, key, iterationNumber) {
      // Resulting key/value pair -- this callback
      // will be executed for every item in the
      // database.
      // return [key, value];
    })
    .then(function () {
      console.log("Iteration has completed");
    })
    .catch(function (err) {
      // This code runs if there were any errors
      console.log(err);
    });
}

function getItem(db, key) {
  db.getItem(key)
    .then(function (value) {
      // This code runs once the value has been loaded
      // from the offline store.
      console.log("ITEM RETRIEVED", value.name);
    })
    .catch(function (err) {
      // This code runs if there were any errors
      console.log(err);
    });
}

export {
  nameInputHandler,
  imageInputHandler,
  insertIntoDb,
  deleteFromDb,
  renderItemsFromDb,
  getItem,
};
