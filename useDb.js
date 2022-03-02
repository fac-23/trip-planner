import { useState, useEffect } from "react";
// import uuid, to generate random ids
import { v4 as uuidv4 } from "uuid";

export default function useDb(store) {
  const [state, setState] = useState({
    status: "loading",
    data: null,
  });

  const { status, data } = state;
  // When the page loads we gather the db into an array and set the state
  useEffect(() => {
    const result = [];
    store
      .iterate((value, key) => {
        /**
         * IMPORTANT: if you return anything but undefined from this callback
         * localForage just stops iterating! 🤪
         */
        value.key = key;
        result.push(value);
      })
      .then(() => {
        setState({ status: "resolved", data: result });
        // console.log("RESULT FROM useDB", result);
      });
  }, []);

  // state to console log
  useEffect(() => {
    console.log("STATE FROM USEEFFECT IN useDB", state);
  }, [state]);

  function getAll() {
    return data;
  }

  /**
   * After this we're just re-implementing stuff localForage has
   * e.g. "get a thing", "set a thing" etc
   * The only difference is we keep our internal state up-to-date
   * so our components always know what's up
   */

  // get item from store db and set state to equal that item
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

  // insert single item in database
  function setItem(name, fileUrl) {
    let randomKey = uuidv4();

    setState({ status: "updating", data });
    // if I have an image loaded and user entered a file name
    if (data && name) {
      store
        .setItem(randomKey, { name, fileUrl })
        .then(() => {
          console.log(`File ${name} inserted`);

          // have to create a new Map to avoid mutating old React state
          const newData = [...data];
          newData.push({ key: randomKey, name: name, data: fileUrl });

          // setState is async
          setState({ status: "resolved", data: newData });
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }

  // remove item
  // function removeItem(key) {
  //   setState({ status: "updating", data: state.data });
  //   store.removeItem(key).then(() => {
  //     const newData = new Map(data);
  //     newData.delete(key);
  //     setState({ status: "resolved", data: newData });
  //   });
  // }

  return {
    status,
    getItem,
    setItem,
    getAll,
    state,
  };
}
