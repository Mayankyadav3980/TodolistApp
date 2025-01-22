import React from "react";
import del from "../assets/del.svg";
import edit from "../assets/edit.svg";

const TodoList = () => {
  return (
    <div className="list-container">
      <div className="todo">
        <p> go to gym </p>

        <div className="options">
          <img className="icon edit" src={edit} alt="edit-icon" />
          <img className="icon del" src={del} alt="delete-icon" />
        </div>
      </div>
      <div className="todo">
        <p> go to gym </p>

        <div className="options">
          <img src={edit} alt="edit-icon" />
          <img src={del} alt="delete-icon" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
