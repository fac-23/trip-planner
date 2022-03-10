import React, { Fragment, useState, useRef } from "react";
import StyledToDoItem from "./styled/StyledToDoItem";
import bin from "../assets/images/bin.png";

export default function ToDoItem({ toDoKey, removeItem, editItem }) {
  const [readOnly, setReadOnly] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [toDoText, setToDoText] = useState("");
  const textInput = useRef();

  return (
    <Fragment>
      <StyledToDoItem>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("submitted");
            editItem(toDoKey, toDoText, { completed: isChecked });
            setReadOnly(!readOnly);
          }}
        >
          <div class="input-container">
            <input
              type="checkbox"
              defaultChecked={isChecked}
              onChange={(event) => {
                setIsChecked(event.target.checked);
                editItem(toDoKey, toDoText, {
                  completed: event.target.checked,
                });
              }}
            />
            <input
              type="text"
              ref={textInput}
              placeholder="Enter a to-do"
              readOnly={readOnly}
              onChange={(event) => setToDoText(event.target.value)}
            />
          </div>
          <div class="btn-container">
            {readOnly ? (
              <button
                class="save-edit-btn edit"
                type="submit"
                onClick={() => textInput.current.focus()}
              >
                Edit
              </button>
            ) : (
              <button class="save-edit-btn save" type="submit">
                Save
              </button>
            )}

            <button
              type="button"
              value={toDoKey}
              aria-label="Delete to-do item"
              onClick={() => removeItem(toDoKey)}
            >
              <img
                src={bin}
                alt="a bin"
                className="to-do__delete-btn--icon"
              ></img>
            </button>
          </div>
        </form>
      </StyledToDoItem>
    </Fragment>
  );
}
