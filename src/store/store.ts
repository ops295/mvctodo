import { legacy_createStore as createStore } from "redux";
import { getTodos, saveTodos } from "../utils/localstorage"
import rootReducer from "./reducers";

const persistedState = getTodos();
const store = createStore(rootReducer, {
	todos: {
		present: [...persistedState],
		future: [],
		past: [],
	},
});

store.subscribe(() => {
	saveTodos(store.getState().todos.present);
});

export type AppStore = typeof store

export default store;
