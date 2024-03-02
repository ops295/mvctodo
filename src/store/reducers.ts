import { combineReducers } from "redux";
import undoable, { StateWithHistory } from "redux-undo";
import {
	ADD_TODO,
	CLEAR_COMPLETED,
	DELETE_TODO,
	EDIT_TODO,
	TOGGLE_COMPLETE_ALL,
	TOGGLE_TODO,
	Todo,
	TodoAction,
} from "./types";

// Define RootState
export type RootState = {todos: StateWithHistory<Todo[]>};

// Define regular todosReducer
const todosReducer = (state: Todo[] = [], action: TodoAction): Todo[] => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];
		case TOGGLE_TODO:
			return state.map((todo) =>
				todo.id === action.payload
					? {...todo, completed: !todo.completed}
					: todo
			);
		case DELETE_TODO:
			return state.filter((todo) => todo.id !== action.payload);
		case CLEAR_COMPLETED:
			return state.filter((todo) => !todo.completed);
		case TOGGLE_COMPLETE_ALL:
			return state.map((todo) => ({...todo, completed: !!action.payload}));
		case EDIT_TODO:
			return state.map((todo) =>
				todo.id === action.payload.id
					? {...action.payload, completed: false}
					: todo
			);
		default:
			return state;
	}
};

// Wrap todosReducer with undoable
const undoableTodosReducer = undoable(todosReducer, {
	limit: 10,
});

// Combine reducers
const rootReducer = combineReducers({
	todos: undoableTodosReducer,
});


export default rootReducer;
