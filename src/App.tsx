import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import TodoList from './components/todolist';

function App() {
	return (
		<div className="bg-gray-800 w-full h-[47rem] relative flex justify-start items-center flex-col gap-9 ">
			<div className="absolute top-20 bg-gray-500 w-1/2 h-1/6 flex justify-center items-center rounded-full blur-2xl"></div>
			<h1 className="text-6xl font-medium font-custom mt-28 pb-20 z-10 text-gray-900/85">
				Todo Noter
			</h1>

			<div className="flex w-1/2">
				<Input type="text" placeholder="Enter something to add" />
				<Button type="submit">Create</Button>
			</div>

			<TodoList />
		</div>
	);
}

export default App;
