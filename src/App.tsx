import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="max-w-lg mx-auto max-h-screen py-8 px-3 bg-gray-200  dark:bg-gray-600">
            <h1 className="text-3xl font-bold text-center mb-4 ">Todo App</h1>
            <TodoInput />
            <TodoList />
            <Footer />
        </div>
    );
};

export default App;
