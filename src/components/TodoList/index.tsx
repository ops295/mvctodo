import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import TodoItem from '../TodoItem';

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.present);

    console.log("I am state here::", todos);

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
