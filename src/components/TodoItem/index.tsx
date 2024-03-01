import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../store/types';
import { toggleTodo, deleteTodo } from '../../store/action';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
        if (e.key === 'Enter') {
            handleToggle();
        } else if (e.key === 'Delete') {
            handleDelete();
        }
    };

    return (
        <li
            className={`flex items-center justify-between ${todo.completed ? 'line-through text-gray-500' : ''}`}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleToggle}
                />
                {todo.title}
            </label>
            <button className="destroy" onClick={handleDelete}>&times;</button>
        </li>
    );
};

export default TodoItem;
