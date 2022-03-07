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

function formatDate(date) {
  // const date = new Date();
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ];

  return `${year}-${(month + 1).toString().padStart(2, 0)}-${day
    .toString()
    .padStart(2, 0)}`;
}

export { imageInputHandler, formatDate };
