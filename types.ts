export type Result<T, E = any> = {
	data?: T;
	error?: E;
};