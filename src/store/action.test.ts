import {
	addTodo,
	toggleTodo,
	deleteTodo,
	clearCompleted,
	selectAll,
	editTodo,
} from "./action";
import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	CLEAR_COMPLETED,
	TOGGLE_COMPLETE_ALL,
	EDIT_TODO,
} from "./types";

import {describe, it, expect} from "vitest";

describe("Todo Actions", () => {
	it("should create an action to add a todo", () => {
		const title = "Test Todo";
		const action = addTodo(title);
		expect(action.type).toEqual(ADD_TODO);
		expect(action.payload.title).toEqual(title);
		expect(action.payload.completed).toBeFalsy();
		expect(action.payload.id).toBeTruthy(); // Check if id is generated
	});

	it("should create an action to toggle a todo", () => {
		const id = "1";
		const action = toggleTodo(id);
		expect(action.type).toEqual(TOGGLE_TODO);
		expect(action.payload).toEqual(id);
	});

	it("should create an action to delete a todo", () => {
		const id = "1";
		const action = deleteTodo(id);
		expect(action.type).toEqual(DELETE_TODO);
		expect(action.payload).toEqual(id);
	});

	it("should create an action to clear completed todos", () => {
		const action = clearCompleted();
		expect(action.type).toEqual(CLEAR_COMPLETED);
	});

	it("should create an action to select all todos", () => {
		const checked = true;
		const action = selectAll(checked);
		expect(action.type).toEqual(TOGGLE_COMPLETE_ALL);
		expect(action.payload).toEqual(checked);
	});

	it("should create an action to edit a todo", () => {
		const id = "1";
		const title = "Updated Todo";
		const action = editTodo(id, title);
		expect(action.type).toEqual(EDIT_TODO);
		expect(action.payload.id).toEqual(id);
		expect(action.payload.title).toEqual(title);
	});
});
