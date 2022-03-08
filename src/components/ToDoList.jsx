import React, { Fragment } from "react";
import plusicon from "../assets/images/plus-icon.png";
import useDb from "../hooks/useDb";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ toDoListStore }) {
  const { state, setItem } = useDb(toDoListStore);

  return (
    <Fragment>
      <section className="flex-row">
        <h2>My List</h2>
        <button
          className="plus-icon-btn-container"
          onClick={() => setItem("to-do-item", { completed: false })}
        >
          <img src={plusicon} className="plus-icon--to-do-list" />
        </button>
      </section>
      <ul>
        {state.data &&
          state.data.map((item) => (
            <li key={item.key} className="flex-row">
              <ToDoItem
                toDoListStore={toDoListStore}
                itemKey={item.key}
                itemName={item.name}
                item={item}
                isCompleted={item.entryData}
              />
            </li>
          ))}
      </ul>
    </Fragment>
  );
}
