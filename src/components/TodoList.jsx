import React, { useEffect } from "react";
import del from "../assets/del.svg";
import edit from "../assets/edit.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodos,
  delTodo,
  setCurrentTitle,
  setShowEdit,
  setTodoToUpdate,
} from "../redux/todoReducer";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoReducer);

  //fetches todos from api on component mount
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  //handles edit todo functionality
  const handleEdit = (id) => {
    let temp = todos.find((todo) => todo.id === id);

    dispatch(setCurrentTitle(temp.title));
    dispatch(setShowEdit());
    dispatch(setTodoToUpdate(temp));
  };

  //dispatches deleteTodo action
  const handleDelete = (id) => {
    dispatch(delTodo(id));
  };

  return (
    <div className="list-container">
      {todos.map((todo, idx) => (
        <div className="todo" key={idx}>
          <p className="title"> {todo.title}</p>
          <p>{todo.completed}</p>
          <div className="options">
            <img
              className="icon edit"
              src={edit}
              alt="edit-icon"
              onClick={() => handleEdit(todo.id)}
            />
            <img
              className="icon del"
              src={del}
              alt="delete-icon"
              onClick={() => handleDelete(todo.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
