import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoReducer'

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: title, completed: false }));
    setTitle('');
  };

  return (
    
      <form className="form-contianer" action="" onSubmit={handleSubmit}>
        <input type="text" 
        onChange={e=>setTitle(e.target.value)}
        value={title}
        required />
        <button type="submit">Add</button>
      </form>
    
  );
}

export default TodoForm