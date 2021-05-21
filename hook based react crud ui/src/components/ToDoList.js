import React from "react";
import ReactDOM from "react-dom";

function ToDoList(props) {
  function handleDelete() {
    console.log("delete btn is clicked");
    console.log(props.id);
    props.onDelete(props.id);
  }

  return (
    <div>
      <span>{props.list}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ToDoList;
