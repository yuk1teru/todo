import AddTodo from './AddTodo/AddTodo';
import FilterBox from './FilterBox/FilterBox';
import s from './Header.module.scss';

export default function Header() {
   return (
      <header>
         <h1 className={s.mainTitle}>My To-Do</h1>
         <div className={s.wrapper}>
            <AddTodo />
            <FilterBox />
         </div>
      </header>
   );
}
