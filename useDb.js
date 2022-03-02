import { useState, useEffect } from "react";
// import uuid, to generate random ids
import { v4 as uuidv4 } from "uuid";

export default function useDb(store) {
  // set initial state to an object with "status" and "data" props
  const [state, setState] = useState({
    status: "loading",
    data: null,
  });

  // destrucutre variables from state object
  const { status, data } = state;

  // When the component loads: gather the db into an array of objects and set the state
  useEffect(() => {
    const result = [];
    store
      .iterate((value, key) => {
        value.key = key;
        result.push(value);
      })
      .then(() => {
        setState({ status: "resolved", data: result });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console log in a useEffect to see the state after it has been set
  // useEffect(() => {
  //   console.log("STATE FROM USEEFFECT IN useDB", state);
  // }, [state]);

  // return the array containing all the data (array of objects)
  function getAll() {
    return data;
  }

  // get item from db and update item state
  function getItem(key, setState) {
    let item = "";
    store
      .getItem(key)
      .then(function (value) {
        item = value;
      })
      .then(() => setState(item))
      .catch((err) => console.log(err));
  }

  // insert single item into db and update state
  function setItem(name, fileUrl) {
    let randomKey = uuidv4();

    setState({ status: "updating", data });
    // if name of doc and file were inputed by user
    if (name && fileUrl) {
      store
        .setItem(randomKey, { name, fileUrl })
        .then(() => {
          console.log(`File ${name} inserted`);

          // spread current data array to avoid mutating old React state
          const newData = [...data];
          // push the new item into newData array
          newData.push({ key: randomKey, name: name, data: fileUrl });

          // update the state to include new item
          // setState is async
          setState({ status: "resolved", data: newData });
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }

  // remove item and update state
  function removeItem(key) {
    setState({ status: "updating", data: state.data });
    store.removeItem(key).then(() => {
      const newData = [...data];
      const filtered = newData.filter((obj) => {
        console.log("filtering");
        return obj.key !== key;
      });
      setState({ status: "resolved", data: filtered });
    });
  }

  return {
    status,
    getItem,
    setItem,
    getAll,
    removeItem,
    state,
  };
}
