import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const todoSlice = createSlice({
   name: 'todo',
   initialState: { todoList: [], visibleEditTodoModal: { visible: false, activeTodoId: null }, filterBoxValue: 'All' },
   reducers: {
      //  Add TODO
      addTodo: (state, action) => {
         state.todoList.push({ id: shortid.generate(), name: action.payload, completed: false });
      },
      // Todo Action Box
      removeTodo: (state, action) => {
         state.todoList = state.todoList.filter(todo => {
            return todo.id !== action.payload;
         });
      },
      editTodo: (state, action) => {
         state.todoList.forEach(todo => {
            if (todo.id === action.payload.id) {
               todo.name = action.payload.name;
            }
         });
      },
      completedTodo: (state, action) => {
         state.todoList.forEach(todo => {
            if (todo.id === action.payload) {
               todo.completed = true;
            }
         });
      },
      // Modal Edit Todo
      visibleModal: (state, action) => {
         state.visibleEditTodoModal.activeTodoId = action.payload;
         state.visibleEditTodoModal.visible = !state.visibleEditTodoModal.visible;
      },
      //FilterBox value
      filterBoxValue: (state, action) => {
         state.filterBoxValue = action.payload;
      },
   },
});

export const { addTodo, removeTodo, completedTodo, visibleModal, editTodo, filterBoxValue } = todoSlice.actions;
export default todoSlice.reducer;
