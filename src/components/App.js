import s from './App.module.scss';

import { useSelector } from 'react-redux';

import Header from './Header/Header';
import Todo from './Todo/Todo';
import Modal from './Modal/Modal';
import ChangeTodo from './ChangeTodo/ChangeTodo';

function App() {
   const todoList = useSelector(state => state.todos.todoList);
   const visibleEditTodoModal = useSelector(state => state.todos.visibleEditTodoModal);
   const isEmpty = todoList.length > 0;

   return (
      <div className={isEmpty ? s.app : `${s.app} ${s.empty}`}>
         <div className="container">
            <Header />
            <main className="content">
               <Todo todoList={todoList} />
            </main>

            {visibleEditTodoModal.visible && (
               <Modal>
                  <ChangeTodo />
               </Modal>
            )}
         </div>
      </div>
   );
}

export default App;
