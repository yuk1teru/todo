import s from './TodoActionBox.module.scss';
import { CompliteSvg, DeleteSvg, EditSvg } from './../../../../images';
import { useDispatch } from 'react-redux';
import { removeTodo, compliteTodo, visibleModal } from '../../../../redux/todoList/todoList-reducers';

export default function TodoActionBox({ id, complite }) {
   const dispatch = useDispatch();

   const handleRemove = () => {
      dispatch(removeTodo(id));
   };
   const handleComplite = () => {
      dispatch(compliteTodo(id));
   };
   const handleEdit = () => {
      dispatch(visibleModal(id));
   };
   return (
      <>
         {complite ? (
            <div className={s.todoActionBox__compliteWrap}>
               <p className={s.todoActionBox__message}>Complited!</p>
               <button className={s.todoActionBox__btn} type="button" title="Remove" aria-label="to-do remove button" onClick={handleRemove}>
                  <DeleteSvg />
               </button>
            </div>
         ) : (
            <ul className={s.todoActionBox}>
               <li>
                  <button className={s.todoActionBox__btn} type="button" title="Complite" aria-label="to-do completed button" onClick={handleComplite}>
                     <CompliteSvg />
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
