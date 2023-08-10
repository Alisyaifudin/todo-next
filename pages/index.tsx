import type { NextPage } from "next";
import Add from "../components/Add";
import TodoList from "../components/TodoList";
import Skeleton from "../components/Skeleton";
import Todo from "../components/Todo";

const tasks = [
	{ id: 1, task: "Task 1", completed: false },
	{ id: 2, task: "Task 2", completed: false },
	{ id: 3, task: "Task 3", completed: false },
];

type Task = {
	id: number;
	task: string;
	completed: boolean;
};

// const tasks: Task[] = [];

const Home: NextPage = () => {
	return (
		<main className="mx-auto w-full max-w-lg p-5">
			<section className="flex flex-col gap-1">
				<h1 className="text-2xl font-bold text-center">Todo App</h1>
				<Add />
				<TodoList tasks={tasks} />
			</section>
		</main>
	);
};



export default Home;
