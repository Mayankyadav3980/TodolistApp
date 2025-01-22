import React, { useEffect } from "react";
import del from "../assets/del.svg";
import edit from "../assets/edit.svg";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todoReducer";

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector(state=> state.todoReducer);
    console.log(todos);
    

    useEffect(()=> {
        dispatch(getTodos());
    },[])

  return (
    <div className="list-container">
      {todos.map((todo, idx) => (
        <div className="todo" key={idx}>
          <p> {todo.title}</p>
          <p>{todo.completed}</p>
          <div className="options">
            <img className="icon edit" src={edit} alt="edit-icon" />
            <img className="icon del" src={del} alt="delete-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
