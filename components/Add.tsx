import React from "react";
import Button from "./Atom/button";

function Add() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
	return (
		<form className="flex justify-between gap-2 items-stretch" onSubmit={handleSubmit}>
			<input
				className="flex-1 px-1 outline outline-1 focus:outline-2 rounded-sm"
				maxLength={50}
				type="text"
				name="add-task"
				placeholder="Enter todo"
			/>
			<Button >Add</Button>
		</form>
	);
}

export default Add;
