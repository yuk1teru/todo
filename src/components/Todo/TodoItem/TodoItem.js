import s from './TodoItem.module.scss';
import TodoActionBox from './TodoActionBox/TodoActionBox';

export default function TodoItem({ name, id, complite }) {
   return (
      <li className={s.todo__item}>
         <h2 className={s.todo__name} title={name}>
            {name}
         </h2>
         {<TodoActionBox id={id} complite={complite} />}
      </li>
   );
}
