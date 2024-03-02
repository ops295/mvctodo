import { describe, expect, test } from "vitest";
import TodoItem from ".";
import renderWithProvider from "../../utils/test-utils";
import userEvent from '@testing-library/user-event'


describe('TodoItem Component', () => {
  test('renders todo item correctly', () => {
    const todo = { id: '1', title: 'Test Todo', completed: false };

    // render Todo list with no data 
    const { getByText } = renderWithProvider(<TodoItem todo={todo} />);

    expect(getByText(todo.title)).toBeInTheDocument();
  });

  test('toggles todo completion when checkbox is clicked', () => {
    const todo = { id: '1', title: 'Test Todo', completed: false };
    // render Todo list with no data 
    const { getByRole } = renderWithProvider(<TodoItem todo={todo} /> , {initialState:[{...todo}]});
    const checkbox = getByRole('checkbox');
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('deletes todo when delete button is clicked', () => {
    const todo = { id: '1', title: 'Test Todo', completed: false };
    // render Todo list with no data 
    const { getByText, queryByText } = renderWithProvider(<TodoItem todo={todo} />, {initialState:[{...todo}]});
    const deleteButton = getByText('×');
    userEvent.click(deleteButton);
    expect(queryByText(todo.title)).not.toBeInTheDocument()
  });

});