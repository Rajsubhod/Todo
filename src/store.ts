import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';

export const store = configureStore({
	reducer: {
		// Add your reducers here
		todo: todoReducer,
	},
});
