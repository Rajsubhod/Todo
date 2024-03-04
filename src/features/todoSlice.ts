import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todoList: [],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		savetodo: (state, action) => {},
	},
});

export const { savetodo } = todoSlice.actions;

export default todoSlice.reducer;
