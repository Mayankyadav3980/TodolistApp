import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoReducer'
import { useSelector } from 'react-redux'
import { setCurrentTitle } from "../redux/todoReducer";

const TodoForm = () => {
  const dispatch = useDispatch();
  const {currentTitle, showEdit} = useSelector(state => state.todoReducer)
  // const [title, setTitle] = useState('');

  // console.log(currentTitle);
  
  // currentTitle= title;
  // dispatch(setCurrentTitle(title));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: currentTitle, completed: false }));
    // setTitle('');
    // currentTitle=title;
    dispatch(setCurrentTitle(''));
  };

  return (
    
      <form className="form-contianer" action="" onSubmit={handleSubmit}>
        <input type="text" 
        onChange={e=>dispatch(setCurrentTitle((e.target.value)))}
        // onChange={e=>setTitle(e.target.value)}
        value={currentTitle}
        required />
        <button type="submit">{showEdit ? 'Update' : 'Add'}</button>
      </form>
    
  );
}

export default TodoForm