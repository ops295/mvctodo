import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mt-8 mb-4">Todo App</h1>
            <TodoInput />
            <TodoList />
            <Footer />
        </div>
    );
};

export default App;
