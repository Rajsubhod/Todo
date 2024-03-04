import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface todo {
	id: number;
	body: string;
	done: boolean;
}

interface todoState {
	todoList: todo[];
}

// interface todoState {
// 	todoList: {
// 		id: 0;
// 		body: string;
// 		done: boolean;
// 	}[];
// }

const initialState: todoState = {
	todoList: [],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<{ id: number; body: string }>) => {
			state.todoList.push({
				id: action.payload.id,
				body: action.payload.body,
				done: false,
			});
		},
		updateTodo: (
			state,
			action: PayloadAction<{ id: number; body: string }>
		) => {
			state.todoList = state.todoList.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, body: action.payload.body }
					: todo
			);
		},
		deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
			state.todoList = state.todoList.filter(
				(todo) => todo.id !== action.payload.id
			);
		},
		toggleDone: (state, action: PayloadAction<{ id: number }>) => {
			state.todoList = state.todoList.map((todo) =>
				todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
			);
		},
	},
});

export const { addTodo, deleteTodo, updateTodo, toggleDone } =
	todoSlice.actions;

export default todoSlice.reducer;
