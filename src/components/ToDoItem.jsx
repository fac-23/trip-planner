import React, { Fragment, useState } from "react";

export default function ToDoItem({
  toDoListStore,
  itemKey,
  itemName,
  isCompleted,
}) {
  const [readOnly, setReadOnly] = useState(false);

  return (
    <Fragment>
      <div>
        <input type="checkbox" defaultChecked={isCompleted} />
        <input type="text" defaultValue={itemName} readOnly={readOnly} />
      </div>
      <div>
        <button onClick={() => setReadOnly(!readOnly)}>
          {readOnly ? "Edit" : "Save"}
        </button>
        <button>Delete</button>
      </div>
    </Fragment>
  );
}
