import s from './FilterBox.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterBoxValue } from '../../../redux/todoList/todoList-reducers';

export default function FilterBox() {
   const radioValue = useSelector(state => state.todos.filterBoxValue);
   const dispatch = useDispatch();

   const onChecked = e => {
      dispatch(filterBoxValue(e.target.value));
   };

   return (
      <ul className={s.filterBox}>
         <li className={s.filterBox__item}>
            <input className={s.filterBox__input} type="radio" name="filterBox" value="All" id="filterBoxAll" onChange={onChecked} checked={radioValue === 'All'} />
            <label className={s.filterBox__btn} htmlFor="filterBoxAll">
               All
            </label>
         </li>
         <li className={s.filterBox__item}>
            <input className={s.filterBox__input} type="radio" name="filterBox" value="Active" id="filterBoxActive" onChange={onChecked} checked={radioValue === 'Active'} />
            <label className={s.filterBox__btn} htmlFor="filterBoxActive">
               Active
            </label>
         </li>
         <li className={s.filterBox__item}>
            <input className={s.filterBox__input} type="radio" name="filterBox" value="Complite" id="filterBoxComplited" onChange={onChecked} checked={radioValue === 'Complited'} />
            <label className={s.filterBox__btn} htmlFor="filterBoxComplited">
               Complited
            </label>
         </li>
      </ul>
   );
}
