import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../store/types';
import { toggleTodo, deleteTodo } from '../../store/action';
import clsx from 'clsx';

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

    const listItemClassNames = clsx("group flex px-2 py-2.5 border-b border-slate-300 items-center justify-between last:border-none hover:bg-gray-50",{
        " text-gray-500 bg-green-100 text-green-500 font-bold hover:bg-green-50 ":todo.completed
    });

    const listItemTextClassNames = clsx("text-base",{
        "line-through":todo.completed
    });
    
    const listActionBtnClassNames = clsx("invisible destroy w-6 h-6 rounded flex items-center justify-center text-base text-red-400 bg-red-100 border border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 group-hover:visible",{
        "bg-gray-100 text-gray-300 border-gray-300 ring-gray-50":todo.completed
    })

    return (
        <li
            className={listItemClassNames}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleToggle}
                    className='inline-block mr-4 w-5 h-4'
                />
                <span className={listItemTextClassNames}>{todo.title}</span>
            </label>
            <button className={listActionBtnClassNames} onClick={handleDelete}><b>&times;</b></button>
        </li>
    );
};

export default TodoItem;
