import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/action';

const TodoInput: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setError('');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("I am trigged")
        const title = inputValue.trim();
        if (title !== '') {
            dispatch(addTodo(title));
            setInputValue('');
        } else {
            setError('Todo title cannot be empty');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What needs to be done?"
                autoFocus
                value={inputValue}
                onChange={handleChange}
            />
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default TodoInput;
