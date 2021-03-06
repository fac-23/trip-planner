import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import plusicon from "../assets/images/plus-icon.png";
import ToDoItem from "./ToDoItem";
import localforage from "localforage";
import useDb from "../hooks/useDb";

export default function ToDoList() {
  let { key } = useParams();
  let toDoListStore = localforage.createInstance({
    name: key,
  });

  const {
    state: toDoState,
    setItem,
    removeItem,
    getAll,
    editItem,
  } = useDb(toDoListStore);

  const toDoList = getAll();

  useEffect(() => {
    console.log("TO DO LIST STATE", toDoState);
  }, [toDoState]);

  return (
    <Fragment>
      <section className="to-do-list">
        <h3>Create a list of things you'd like to do!</h3>
        <button
          className="plus-icon-btn-container"
          onClick={() => {
            setItem("Enter your to-do", { completed: false });
          }}
        >
          <img
            src={plusicon}
            className="plus-icon--to-do-list"
            alt="Plus Icon"
          />
        </button>
      </section>
      <ul>
        {toDoList &&
          toDoList.map((toDo) => (
            <li key={toDo.key}>
              <ToDoItem
                toDoListStore={toDoListStore}
                toDoState={toDoState}
                toDoKey={toDo.key}
                toDoName={toDo.name}
                removeItem={removeItem}
                editItem={editItem}
              />
            </li>
          ))}
      </ul>
    </Fragment>
  );
}
