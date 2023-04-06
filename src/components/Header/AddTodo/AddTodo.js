import { useState } from 'react';
import s from './AddTodo.module.scss';
import { addTodo } from '../../../redux/todoList/todoList-reducers';
import { useDispatch } from 'react-redux';

export default function AddTodo() {
   const [todoText, setTodoText] = useState('');
   const dispatch = useDispatch();

   const handleClick = e => {
      e.preventDefault();
      if (todoText.length > 0 && todoText.length < 255) {
         dispatch(addTodo(todoText));
         setTodoText('');
      } else {
         alert(`to-do name must be greater than 0 characters and less than 255 characters, you entered ${todoText.length} characters`);
      }
   };
   const handleChange = e => {
      setTodoText(e.target.value);
   };

   return (
      <form className={s.addTodo}>
         <input className={s.addTodo__input} type="text" onChange={handleChange} value={todoText} />
         <button className={s.addTodo__btn} onClick={handleClick} aria-label="Add To-do button" title="Add to-do">
            Add
         </button>
      </form>
   );
}
