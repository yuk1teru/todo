import { useDispatch } from 'react-redux';
import { visibleModal } from '../../redux/todoList/todoList-reducers';
import s from './Modal.module.scss';

export default function Modal({ children }) {
   const dispatch = useDispatch();
   const closeModalOnClickBackDrop = e => {
      if (e.target === e.currentTarget) {
         dispatch(visibleModal(null));
      }
   };
   return (
      <div className={s.backdrop} onClick={closeModalOnClickBackDrop}>
         <div className={s.modal}>{children}</div>
      </div>
   );
}
