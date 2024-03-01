export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const TOGGLE_COMPLETE_ALL = "TOGGLE_COMPLETE_ALL";
export const EDIT_TODO = "EDIT_TODO"

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: string; // ID of the todo to toggle
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: string; // ID of the todo to delete
}

interface ClearCompletedAction {
  type: typeof CLEAR_COMPLETED;
}

interface completeAllAction {
  type: typeof TOGGLE_COMPLETE_ALL;
  payload:boolean
}

interface editTodoAction {
  type: typeof EDIT_TODO;
  payload:Omit<Todo,"completed">
}

export type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction | ClearCompletedAction | completeAllAction | editTodoAction;
