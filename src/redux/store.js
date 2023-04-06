import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoList/todoList-reducers';

const store = configureStore({
   reducer: {
      todos: todoSlice,
   },
});

export default store;
