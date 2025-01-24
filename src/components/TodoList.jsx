import React, { useEffect, useState } from "react";
import del from "../assets/del.svg";
import edit from "../assets/edit.svg";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todoReducer";
import { setCurrentTitle, setShowEdit } from "../redux/todoReducer";

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos, currentTitle, showEdit } = useSelector(state=> state.todoReducer);
    // const [title, setTitle] = useState('')
    // console.log(todos);
    

    useEffect(()=> {
        dispatch(getTodos());
    },[])

    const handleEdit = (id) => {
      let temp = todos.find(todo => todo.id === id);
      dispatch(setCurrentTitle(temp.title));
      dispatch(setShowEdit());

    };

    const handleDelete = (id) => {

    }

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
