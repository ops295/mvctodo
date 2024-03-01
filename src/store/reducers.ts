import { combineReducers } from 'redux';
import undoable, {StateWithHistory } from 'redux-undo';
import { Todo, TodoAction, ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED , TOGGLE_COMPLETE_ALL } from './types';

// Define RootState
export type RootState = { todos: StateWithHistory<Todo[]>};

// Define regular todosReducer
const todosReducer = (state: Todo[] = [], action: TodoAction): Todo[] => {
    console.log("I am in action", action)
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed);
        case TOGGLE_COMPLETE_ALL:
            return  state.map(todo => ({...todo , completed:action.payload}))
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
