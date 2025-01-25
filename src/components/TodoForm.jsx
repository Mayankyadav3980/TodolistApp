import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/todoReducer";
import { useSelector } from "react-redux";
import {
  setCurrentTitle,
  setShowEdit,
  setTodoToUpdate,
} from "../redux/todoReducer";

const TodoForm = () => {
  const dispatch = useDispatch();

  //importing  states from store
  const { currentTitle, showEdit, todoToUpdate } = useSelector(
    (state) => state.todoReducer
  );

  //function to handle both add and update todo functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    if (showEdit) {
      let updatedTodo = { ...todoToUpdate, title: currentTitle };
      dispatch(setTodoToUpdate(updatedTodo));
      dispatch(editTodo(updatedTodo));
      dispatch(setShowEdit());
    } else {
      dispatch(addTodo({ title: currentTitle, completed: false }));
    }
    dispatch(setCurrentTitle(""));
  };

  return (
    <form className="form-contianer" action="" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => dispatch(setCurrentTitle(e.target.value))}
        value={currentTitle}
        required
      />
      <button type="submit">{showEdit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
