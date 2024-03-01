import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { clearCompleted } from '../../store/action';

const Footer: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state:RootState) => state.todos.present);

    const handleClearCompleted = () => {
        dispatch(clearCompleted());
    };

    const activeCount = todos?.filter(todo => !todo.completed).length;

    return (
        <footer className="flex justify-between items-center">
            <span>{activeCount} {activeCount === 1 ? 'item' : 'items'} left</span>
            {todos?.some(todo => todo.completed) && (
                <button onClick={handleClearCompleted}>Clear completed</button>
            )}
        </footer>
    );
};

export default Footer;
