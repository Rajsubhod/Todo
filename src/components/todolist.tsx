import { deleteTodo, toggleDone, updateTodo } from '@/store/features/todoSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ScrollArea } from './ui/scroll-area';
import { MdDelete, MdDone } from 'react-icons/md';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	PopoverClose,
} from './ui/popover';
import React from 'react';

export default function TodoList() {
	const dispatch = useAppDispatch();
	const selector = useAppSelector((state) => state.todo);
	const todoList = selector.todoList;

	return (
		<ScrollArea className="h-72 w-1/2">
			<div className="flex flex-col justify-center items-start gap-5">
				{todoList.map((todo) => (
					<React.Fragment key={todo.id}>
						<Popover>
							<div
								className={clsx(
									'bg-orange-400 p-5 w-[97%] rounded-md ml-2 flex gap-4 justify-around',
									{
										'!bg-green-500': todo.done,
									}
								)}
							>
								<PopoverTrigger className="w-3/4 text-left">
									<p>{todo.body}</p>
								</PopoverTrigger>
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
							{todo.done ? null : (
								<div className="relative">
									<PopoverContent className="absolute top-[-4rem] left-[-23rem] h-32 w-[55rem] flex justify-between items-center bg-slate-500">
										<div className="pl-5 w-3/4 ">
											<input
												className="p-6 w-full focus:outline-none bg-slate-500 border-b border-gray-700 decoration-none text-2xl"
												type="text"
												value={todo.body}
												onChange={(e) =>
													dispatch(
														updateTodo({ id: todo.id, body: e.target.value })
													)
												}
											/>
										</div>
										<PopoverClose asChild>
											<button className="text-2xl p-4 mr-5 bg-gray-700 rounded-md shadow-lg shadow-black/50 active:scale-90">
												<MdDone />
											</button>
										</PopoverClose>
									</PopoverContent>
								</div>
							)}
						</Popover>
					</React.Fragment>
				))}
			</div>
		</ScrollArea>
	);
}
