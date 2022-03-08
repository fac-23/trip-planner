import React, { Fragment } from "react";

export default function ToDoItem({ itemName }) {
  return (
    <Fragment>
      <div>
        <input type="checkbox" />
        <input type="text" defaultValue={itemName} />
      </div>
      <div>
        <button>Save</button>
        <button>Delete</button>
      </div>
    </Fragment>
  );
}
