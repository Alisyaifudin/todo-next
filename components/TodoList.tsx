import React from "react";
import Button from "./Atom/button";
import Todo from "./Todo";
import Skeleton from "./Skeleton";

interface TodoListProps {
	tasks: {
		id: number;
		task: string;
		completed: boolean;
	}[];
}

function TodoList({ tasks }: TodoListProps) {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
	console.log(tasks);
	return (
		<form className="flex flex-col gap-2" onSubmit={handleSubmit}>
			<ul className="flex flex-col gap-1">
				{tasks.length > 0 ? (
					tasks.map((task) => (
						<Todo id={task.id} key={task.id} completed={task.completed}>
							{task.task}
						</Todo>
					))
				) : (
					<>
						<li>
							<Skeleton />
						</li>
						<li>
							<Skeleton />
						</li>
						<li>
							<Skeleton />
						</li>
					</>
				)}
			</ul>
			<Button>Save</Button>
		</form>
	);
}

export default TodoList;
