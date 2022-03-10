import React, { Fragment, useState } from "react";

export default function ToDoItem({ toDoName, toDoKey, removeItem, editItem }) {
  const [readOnly, setReadOnly] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [toDoText, setToDoText] = useState("");

  return (
    <Fragment>
      <form
        className="flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          console.log("submitted");
          editItem(toDoKey, toDoText, { completed: isChecked });
          setReadOnly(!readOnly);
        }}
      >
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onChange={(event) => {
            setIsChecked(event.target.checked);
            editItem(toDoKey, toDoText, { completed: event.target.checked });
          }}
        />
        <input
          type="text"
          placeholder={toDoName}
          readOnly={readOnly}
          onChange={(event) => setToDoText(event.target.value)}
        />
        <div>
          <button type="submit">{readOnly ? "Edit" : "Save"}</button>
          <button
            type="button"
            value={toDoKey}
            onClick={() => removeItem(toDoKey)}
          >
            Delete
          </button>
        </div>
      </form>
    </Fragment>
  );
}
