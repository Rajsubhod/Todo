import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import TodoList from './components/todolist';
import { useAppDispatch } from './store/hooks';
import { useEffect, useRef, useState } from 'react';
import { addTodo } from './store/features/todoSlice';

function App() {
	const id = Date.now();
	const ref = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();
	const [fieldInput, setInput] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(addTodo({ id: id, body: fieldInput }));
		setInput('');
	};

	useEffect(() => {
		const todosJSON = localStorage.getItem('todos');
		const todos = todosJSON ? JSON.parse(todosJSON) : [];

		if (todos && todos.length > 0) {
			todos.forEach((todo: any) => {
				dispatch(
					addTodo({
						id: todo.id,
						body: todo.body,
					})
				);
			});
		}
	}, []);

	return (
		<>
			<div
				className="bg-gray-800 w-full relative flex justify-start items-center flex-col gap-9 "
				id="view"
			>
				<div className="absolute top-20 bg-gray-500 w-1/2 h-1/6 flex justify-center items-center rounded-full blur-2xl"></div>
				<h1 className="text-6xl font-medium font-custom mt-28 pb-20 z-10 text-gray-900/85">
					Todo Noter
				</h1>

				<form onSubmit={handleSubmit} className="flex w-1/2">
					<Input
						ref={ref}
						value={fieldInput}
						type="text"
						placeholder="Enter something to add"
						onChange={(e) => setInput(e.target.value)}
					/>
					<Button type="submit">Create</Button>
				</form>

				<TodoList />
			</div>
		</>
	);
}

export default App;
