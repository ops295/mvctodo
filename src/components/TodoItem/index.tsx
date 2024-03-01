import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../store/types';
import { toggleTodo, deleteTodo, editTodo } from '../../store/action';
import clsx from 'clsx';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.title);

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

 

    const handleDoubleClick = () => {
        if (!todo.completed) setIsEditing(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedValue = editValue.trim();
        if (trimmedValue) {
            dispatch(editTodo(todo.id, trimmedValue));
            setIsEditing(false);
        } else {
            // Handle empty todo title error
            // You can display a message or prevent submission
        }
    };

    const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            handleSubmit(e);
        } else if (e.key === 'Escape') {
            setIsEditing(false);
            setEditValue(todo.title);
        }
    };

    const listItemClassNames = clsx("group flex  border-b border-slate-300 items-center justify-between last:border-none hover:bg-gray-50", {
        " text-gray-500 bg-green-100 text-green-500 font-bold hover:bg-green-50 ": todo.completed
    });

    const listItemTextClassNames = clsx("text-base", {
        "line-through": todo.completed
    });

    const listActionBtnClassNames = clsx("invisible destroy w-6 h-6 rounded flex items-center justify-center text-base text-red-400 bg-red-100 border border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 group-hover:visible", {
        "bg-gray-100 text-gray-300 border-gray-300 ring-gray-50": todo.completed
    })

    return (
        <li
            className={listItemClassNames}
            // onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            {isEditing ? (
                <form onSubmit={handleSubmit} className='shadow bg-white rounded w-full p-1'>
                    <input
                        type="text"
                        value={editValue}
                        onChange={handleChange}
                        onKeyDown={handleEditKeyDown}
                        autoFocus
                        className='w-full h-full px-3 py-2.5 rounded border-slate-600 focus:ring-2 focus:ring-slate-400 outline-none text-sm'
                    />
                </form>
            ) : (
                <div onDoubleClick={handleDoubleClick} className='w-full h-ull rounded flex items-center justify-between px-2 py-2.5'>
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
                </div>
            )}
        </li>
    );
};

export default TodoItem;
