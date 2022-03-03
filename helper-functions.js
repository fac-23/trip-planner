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

// function to retrieve single file by key from database
function getItem(db, key, setSingleFile) {
  let singleFile = "";
  db.getItem(key)
    .then(function (value) {
      // This code runs once the value has been loaded
      // from the offline store.
      // console.log("ITEM RETRIEVED", value.name, value.data);
      singleFile = value;
    })
    .then(function () {
      setSingleFile(singleFile);
    })
    .catch(function (err) {
      // This code runs if there were any errors
      console.log(err);
    });
}

function setSingleFileInitialState(db, key, initialValue) {
  let singleFileInitialState = "";
  db.getItem(key)
    .then(function (value) {
      singleFileInitialState = value;
    })
    .then(function () {
      // console.log(
      //   "single file initial state in helper functions",
      //   singleFileInitialState
      // );
    })
    .catch(function (err) {
      // This code runs if there were any errors
      console.log(err);
    });
  return singleFileInitialState || initialValue;
}

export { imageInputHandler, setSingleFileInitialState, getItem };
