import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ListHeader from '../ListHeader';
import NoTodoAlert from '../NoTodoAlert';
import TodoItem from '../TodoItem';

interface TodoListProps {
    variants?: "active" | "completed"
}

const TodoList = (props: TodoListProps) => {
    const todos = useSelector((state: RootState) => {
    const _td = state.todos.present;
        switch (props?.variants) {
            case "active":
                return _td.filter(td => !td.completed)
            case  "completed":
                return _td.filter(td => td.completed)
            default:
                return _td
        }
    });

    if (todos.length === 0) return <NoTodoAlert />

    return (
        <ul className='bg-gray-100 rounded mb-4 ps-0 overflow-hidden'>
            {!props.variants && <ListHeader /> }
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
