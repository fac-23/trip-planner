import React, { Fragment, useState } from "react";

export default function ToDoItem({
  toDoName,
  toDoKey,
  isCompleted,
  removeItem,
}) {
  const [readOnly, setReadOnly] = useState(false);

  return (
    <Fragment>
      <div>
        <input type="checkbox" defaultChecked={isCompleted} />
        <input type="text" placeholder={toDoName} readOnly={readOnly} />
      </div>
      <div>
        <button onClick={() => setReadOnly(!readOnly)}>
          {readOnly ? "Edit" : "Save"}
        </button>
        <button value={toDoKey} onClick={() => removeItem(toDoKey)}>
          Delete
        </button>
      </div>
    </Fragment>
  );
}
