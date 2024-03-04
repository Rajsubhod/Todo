import { deleteTodo, toggleDone } from '@/store/features/todoSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ScrollArea } from './ui/scroll-area';
import { MdDelete, MdDone } from 'react-icons/md';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';

export default function TodoList() {
	const dispatch = useAppDispatch();
	const selector = useAppSelector((state) => state.todo);
	const todoList = selector.todoList;

	return (
		<ScrollArea className="h-80 w-1/2">
			<div className="flex flex-col justify-center items-start gap-5">
				{todoList.map((todo) => (
					<div
						key={todo.id}
						className={clsx(
							'bg-orange-400 p-5 w-[97%] rounded-md ml-2 flex gap-4 justify-around',
							{
								'bg-green-500': todo.done,
							}
						)}
					>
						<p className="w-3/4">{todo.body}</p>
						<button
							className="text-2xl"
							onClick={() => dispatch(deleteTodo({ id: todo.id }))}
						>
							<MdDelete />
						</button>
						<button
							className="text-2xl"
							onClick={() => dispatch(toggleDone({ id: todo.id }))}
						>
							{todo.done ? <IoClose /> : <MdDone />}
						</button>
					</div>
				))}
			</div>
		</ScrollArea>
	);
}
