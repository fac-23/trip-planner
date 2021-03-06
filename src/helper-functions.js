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

// takes a date object and returns it formatted correctly for a date input value
// yyyy-mm-dd
function formatDate(date) {
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ];

  return `${year}-${(month + 1).toString().padStart(2, 0)}-${day
    .toString()
    .padStart(2, 0)}`;
}

function displayCountDown(startDate) {
  const currentDate = formatDate(new Date());
  const startMonth = startDate.split("/")[1];
  const currentMonth = currentDate.split("-")[1];

  if (currentMonth === startMonth) {
    const startDay = Number(startDate.split("/")[2]);
    const currentDay = Number(currentDate.split("-")[2]);
    const countDown = startDay - currentDay;

    if (countDown === 1) {
      return `Only ${countDown} day away!`;
    }
    if (countDown <= 10) {
      return `Only ${countDown} days away!`;
    }
  }
  return "";
}

export { imageInputHandler, formatDate, displayCountDown };
