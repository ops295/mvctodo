import { Todo } from "../store/types";

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getTodos = (): Todo[] => {
  const todosString = localStorage.getItem('todos');
  return todosString ? JSON.parse(todosString) : [];
};

export const clearTodos = () => {
  localStorage.removeItem('todos');
};
