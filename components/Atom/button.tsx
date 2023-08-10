import React from "react";

interface ButtonProps {
	children: string;
}

function Button({ children }: ButtonProps) {
	return (
		<button className="bg-blue-500 text-white py-1 px-2 rounded-md" type="submit">
			{children}
		</button>
	);
}

export default Button;
