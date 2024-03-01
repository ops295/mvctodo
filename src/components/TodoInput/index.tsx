import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/action';

const TodoInput: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null)
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

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    return (<>
        <form onSubmit={handleSubmit} className='shadow bg-white rounded w-full mb-4'>
            <input
                ref={inputRef}
                type="text"
                placeholder="What needs to be done?"
                // autoFocus
                value={inputValue}
                onChange={handleChange}
                className='w-full h-full px-3 py-2 rounded border-slate-600 focus:ring-2 focus:ring-slate-400 outline-none font-lg'
            />
        </form>
        {error && <p className="error bg-red-100 border-reg-600 text-red-600 font-bold text-sm px-3 py-2 mb-4 block rounded">{error}</p>}
    </>
    );
};

export default TodoInput;
