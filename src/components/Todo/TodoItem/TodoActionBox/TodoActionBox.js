import s from './TodoActionBox.module.scss';
import { CompletedSvg, DeleteSvg, EditSvg } from './../../../../images';
import { useDispatch } from 'react-redux';
import { removeTodo, completedTodo, visibleModal } from '../../../../redux/todoList/todoList-reducers';

export default function TodoActionBox({ id, completed }) {
   const dispatch = useDispatch();

   const handleRemove = () => {
      dispatch(removeTodo(id));
   };
   const handleCompleted = () => {
      dispatch(completedTodo(id));
   };
   const handleEdit = () => {
      dispatch(visibleModal(id));
   };
   return (
      <>
         {completed ? (
            <div className={s.todoActionBox__completedWrap}>
               <p className={s.todoActionBox__message}>Completed!</p>
               <button className={s.todoActionBox__btn} type="button" title="Remove" aria-label="to-do remove button" onClick={handleRemove}>
                  <DeleteSvg />
               </button>
            </div>
         ) : (
            <ul className={s.todoActionBox}>
               <li>
                  <button className={s.todoActionBox__btn} type="button" title="Completed" aria-label="to-do completed button" onClick={handleCompleted}>
                     <CompletedSvg />
                  </button>
               </li>
               <li>
                  <button className={s.todoActionBox__btn} type="button" title="Remove" aria-label="to-do remove button" onClick={handleRemove}>
                     <DeleteSvg />
                  </button>
               </li>
               <li>
                  <button className={s.todoActionBox__btn} type="button" title="Edit" aria-label="to-do edit button" onClick={handleEdit}>
                     <EditSvg />
                  </button>
               </li>
            </ul>
         )}
      </>
   );
}
