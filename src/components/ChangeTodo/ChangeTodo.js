import { useState } from 'react';
import s from './ChangeTodo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { visibleModal, editTodo } from '../../redux/todoList/todoList-reducers';

export default function ChangeTodo() {
   const currentTodoId = useSelector(state => state.todos.visibleEditTodoModal.activeTodoId);
   const text = useSelector(state => state.todos.todoList.find(todo => todo.id === currentTodoId).name);

   const [todoText, setTodoText] = useState(text);
   const dispatch = useDispatch();

   const handleClick = e => {
      e.preventDefault();
      dispatch(editTodo({ id: currentTodoId, name: todoText }));
      dispatch(visibleModal(null));
   };
   const handleChange = e => {
      setTodoText(e.target.value);
   };

   return (
      <form className={s.changeTodo}>
         <label className={s.changeTodo__label} htmlFor="editTodoTextArea">
            Edit To-do
         </label>
         <textarea className={s.changeTodo__textarea} type="text" onChange={handleChange} value={todoText} id="editTodoTextArea" />
         <button className={s.changeTodo__btn} onClick={handleClick} aria-label="Edit To-do button" title="Edit to-do">
            Save
         </button>
      </form>
   );
}
