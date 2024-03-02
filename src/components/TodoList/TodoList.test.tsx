
import { describe, expect, test } from 'vitest';
import TodoList from '.';
import { Todo } from '../../store/types';
import renderWithProvider from '../../utils/test-utils';

describe('TodoList Component', () => {
  test('renders NoTodoAlert when no todos exist', () => {
    // render Todo list with no data 
    const { getByText } = renderWithProvider(<TodoList />);

    expect(getByText('No todos found.')).toBeInTheDocument();
  });

  test('renders active todos correctly', () => {
    // Mock active todos
    const initialState: Todo[] = [
      { id: '1', title: 'Active Todo 1', completed: false },
      { id: '2', title: 'Active Todo 2', completed: false },
    ];

    const { getByText } = renderWithProvider(<TodoList />, { initialState });

    initialState.forEach((todo) => {
      expect(getByText(todo.title)).toBeInTheDocument();
    });
  });

  test('renders completed todos correctly', () => {
    // Mock completed todos
    const completedTodos = [
      { id: '1', title: 'Completed Todo 1', completed: true },
      { id: '2', title: 'Completed Todo 2', completed: true },
    ];
    const { getByText } = renderWithProvider(<TodoList variants="completed" />, { initialState: completedTodos });

    completedTodos.forEach((todo) => {
      expect(getByText(todo.title)).toBeInTheDocument();
    });
  });


});


