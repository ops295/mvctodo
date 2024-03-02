import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	CLEAR_COMPLETED,
	TOGGLE_COMPLETE_ALL,
	EDIT_TODO,
} from "./types";

export const addTodo = (title: string, id?:number|string) => ({
	type: ADD_TODO,
	payload: {
		id: id??Math.random().toString(36).substr(2, 9),
		title,
		completed: false,
	},
});

export const toggleTodo = (id: string) => ({
	type: TOGGLE_TODO,
	payload: id,
});

export const deleteTodo = (id: string) => ({
	type: DELETE_TODO,
	payload: id,
});

export const clearCompleted = () => ({
	type: CLEAR_COMPLETED,
});

export const selectAll = (checked: boolean) => ({
	type: TOGGLE_COMPLETE_ALL,
	payload: checked,
});

export const editTodo = (id: string, title: string) => ({
	type: EDIT_TODO,
	payload: {
		id,
		title,
	},
});
