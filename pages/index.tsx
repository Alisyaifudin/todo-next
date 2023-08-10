import type { NextPage } from "next";
import Add from "../components/Add";
import TodoList from "../components/TodoList";
import { createContext, useState } from "react";

export const TagContext = createContext({
	tag: "haha",
	setTag: (value: string) => {},
});

const TagProvider = TagContext.Provider;

const Home: NextPage = () => {
	const [tag, setTag] = useState("haha");

	return (
		<main className="mx-auto w-full max-w-lg p-5">
			<section className="flex flex-col gap-1">
				<h1 className="text-2xl font-bold text-center">Todo App</h1>
				<TagProvider value={{ tag, setTag }}>
					<Add />
					<TodoList />
				</TagProvider>
			</section>
		</main>
	);
};

export default Home;
