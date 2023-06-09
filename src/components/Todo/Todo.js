import TodoItem from './TodoItem/TodoItem';
import s from './Todo.module.scss';
import { useSelector } from 'react-redux';

export default function Todo({ todoList }) {
   const filterValue = useSelector(state => state.todos.filterBoxValue);

   const filterTodoList = (todoList, filterValue) => {
      switch (filterValue) {
         case 'Active':
            return todoList.filter(todo => {
               return todo.completed === false;
            });

         case 'Completed':
            return todoList.filter(todo => todo.completed === true);

         default:
            return todoList;
      }
   };

   const filteredTodoList = filterTodoList(todoList, filterValue);

   return (
      <ul className={s.todo}>
         {filteredTodoList.map(todo => (
            <TodoItem key={todo.id} name={todo.name} id={todo.id} completed={todo.completed} />
         ))}
      </ul>
   );
}
