import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import TodoItem from '../TodoItem';
import NoTodoAlert from '../NoTodoAlert';
import ListHeader from '../ListHeader';

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.present);

    if(todos.length === 0) return <NoTodoAlert />

    return (
        <ul className='bg-gray-100 rounded mb-4 ps-0 overflow-hidden'>
            <ListHeader />
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
