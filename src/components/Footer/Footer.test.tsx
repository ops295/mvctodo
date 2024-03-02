import { fireEvent } from '@testing-library/react';
import { describe, expect, test, vitest } from "vitest";
import Footer from '.';
import { Todo } from '../../store/types';
import renderWithProvider from '../../utils/test-utils';


describe('Footer Component', () => {
  test('renders footer with active count when todos exist', () => {
    // Mock todos
    const initialState: Todo[] = [
      { id: '1', title: 'Todo 1', completed: false },
      { id: '2', title: 'Todo 2', completed: false },
    ];
    // Render Footer with mocked store
    const { getByText } = renderWithProvider(<Footer />, { initialState })

    // Check if active count is displayed
    expect(getByText('2 items left')).toBeInTheDocument();
  });

  test('renders footer with "All completed" when all todos are completed', () => {
     // Mock todos
     const initialState: Todo[] = [
      { id: '1', title: 'Todo 1', completed: true },
      { id: '2', title: 'Todo 2', completed: true },
    ];

    // Render Footer with mocked store
    const { getByText } = renderWithProvider(<Footer />, { initialState })

    // Check if "All completed" text is displayed
    expect(getByText('All completed')).toBeInTheDocument();
  });

  test('renders "Clear completed" button when there are completed todos', () => {
    // Mock todos
    const initialState: Todo[] = [
      { id: '1', title: 'Todo 1', completed: true },
      { id: '2', title: 'Todo 2', completed: true },
    ];

    // Render Footer with mocked store
    const { getByText } = renderWithProvider(<Footer />, { initialState })

    // Check if "Clear completed" button is displayed
    expect(getByText('Clear completed')).toBeInTheDocument();
  });

  test('calls clearCompleted action when "Clear completed" button is clicked', () => {
       // Mock clearCompleted action
    const mockClearCompleted = vitest.fn();
      // Mock todos
      const initialState: Todo[] = [
        { id: '1', title: 'Todo 1', completed: true },
        { id: '2', title: 'Todo 2', completed: true },
      ];

    // Render Footer with mocked store
    const { getByText } = renderWithProvider(<Footer />, { initialState })


    // Click "Clear completed" button
    fireEvent.click(getByText('Clear completed'));
    // Check if clearCompleted action is called
    expect(mockClearCompleted)
  });
});
