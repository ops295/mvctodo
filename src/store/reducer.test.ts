import { legacy_createStore as createStore } from "redux";
import {beforeEach, describe, expect, it} from "vitest";
import {
	addTodo,
	clearCompleted,
	deleteTodo,
	editTodo,
	selectAll,
	toggleTodo,
} from "./action";
import rootReducer, {RootState} from "./reducers";
import {Todo} from "./types";
import {AppStore} from "./store";

describe("Reducers", () => {
	let store: AppStore;

	beforeEach(() => {
		store = createStore(rootReducer); // Create mock Redux store
	});

	it("should handle ADD_TODO action", () => {
		const todo: Todo = {id: "1", title: "Test Todo", completed: false};
		store.dispatch(addTodo(todo.title, todo.id));
		const newState: RootState = store.getState();
		expect(newState.todos.present).toContainEqual(todo);
	});

	it("should handle TOGGLE_TODO action", () => {
		const todo: Todo = {id: "1", title: "Test Todo", completed: false};
		store.dispatch(addTodo(todo.title, todo.id));
		store.dispatch(toggleTodo("1"));
		const newState: RootState = store.getState();
		expect(
			newState.todos.present.find((t: Todo) => t.id === "1")?.completed
		).toBe(true);
	});

	it("should handle DELETE_TODO action", () => {
		const todo: Todo = {id: "1", title: "Test Todo", completed: false};
		store.dispatch(addTodo(todo.title, todo.id));
		store.dispatch(deleteTodo("1"));
		const newState: RootState = store.getState();
		expect(newState.todos.present).toHaveLength(0);
	});

	it("should handle CLEAR_COMPLETED action", () => {
		const todo1: Todo = {id: "1", title: "Test Todo 1", completed: false};
		const todo2: Todo = {id: "2", title: "Test Todo 2", completed: false};
		store.dispatch(addTodo(todo1.title, todo1.id));
		store.dispatch(addTodo(todo2.title, todo2.id));
		store.dispatch(toggleTodo(todo1.id));
		store.dispatch(clearCompleted());
		const newState: RootState = store.getState();
		expect(newState.todos.present).toEqual([todo2]);
	});

	it("should handle TOGGLE_COMPLETE_ALL action", () => {
		const todo1: Todo = {id: "1", title: "Test Todo 1", completed: false};
		const todo2: Todo = {id: "2", title: "Test Todo 2", completed: false};
		store.dispatch(addTodo(todo1.title, todo1.id));
		store.dispatch(addTodo(todo2.title, todo2.id));
		store.dispatch(selectAll(true));
		const newState: RootState = store.getState();
		expect(newState.todos.present.every((t: Todo) => t.completed)).toBe(true);
	});

	it("should handle EDIT_TODO action", () => {
		const todo: Todo = {id: "1", title: "Test Todo", completed: false};
		const updatedTodo: Todo = {
			id: "1",
			title: "Updated Todo",
			completed: false,
		};
		store.dispatch(addTodo(todo.title, todo.id));
		store.dispatch(editTodo("1", updatedTodo.title));
		const newState: RootState = store.getState();
		expect(newState.todos.present.find((t: Todo) => t.id === "1")?.title).toBe(
			"Updated Todo"
		);
	});

	it("should return initial state for unknown action", () => {
		const initialState: RootState = store.getState();
		store.dispatch({type: "UNKNOWN_ACTION"});
		const newState: RootState = store.getState();
		expect(newState).toEqual(initialState);
	});

	// Write similar tests for other actions like toggleTodo, deleteTodo, clearCompleted, etc.
});
