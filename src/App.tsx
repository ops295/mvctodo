import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ActivePage from './pages/Active';
import AllPage from './pages/All';
import CompletedPage from './pages/Completed';
import { RootState } from './store/reducers';
import { saveTodos } from './utils/localstorage';



const AppLLayout: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.present);
    useEffect(() => {
        saveTodos(todos)
    }, [todos])
    return (
        <div className="max-w-lg mx-auto max-h-screen py-8 px-3 bg-gray-200  dark:bg-gray-600">
            <h1 className="text-3xl font-bold text-center mb-4 ">Todo App</h1>
            <ul className='flex gap-3 ps-3 mb-4'>
                <li>
                    <Link className='inline-block p-1 font-semibold' to={"/"}>All</Link>
                </li>
                <li>
                    <Link className='inline-block p-1 font-semibold' to={"active"}>Active</Link>
                </li>
                <li>
                    <Link className='inline-block p-1 font-semibold' to={"completed"}>Completed</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<AppLLayout />}>
        <Route path='/' element={<AllPage />} />
        <Route path='/active' element={<ActivePage />} />
        <Route path='/completed' element={<CompletedPage />} />
    </Route>
))

const App = () => {
    return <RouterProvider router={router} />
}


export default App;
