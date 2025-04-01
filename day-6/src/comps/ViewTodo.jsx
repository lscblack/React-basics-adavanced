import React, { useState } from 'react';

const ViewTodo = ({ todos, setTodos }) => {
    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState('');

    // Toggle completed status
    const toggleCompleted = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    // Delete todo
    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

    // Start editing
    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditValue(todo.todo);
    };

    // Save edit
    const saveEdit = (id) => {
        if (!editValue.trim()) return;

        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, todo: editValue.trim() } : todo
        );
        setTodos(updatedTodos);
        setEditingId(null);
    };

    // If there are no todos
    if (todos.length === 0) {
        return (
            <div className="w-full max-w-md m-auto mt-10">
                <div className="bg-white/10 p-6 rounded-lg shadow-sm text-center">
                    <p className="text-gray-200">No todos yet. Add one to get started!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full my-4">
            <h2 className='p-3 text-xl font-bold text-gray-200'>All Todos</h2>
            <ul className=" rounded-lg overflow-hidden px-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={` border-orange-100 last:border-b-0 ${todo.completed ? 'bg-orange-500' : ''}`}
                    >
                        {editingId === todo.id ? (
                            <div className="p-3 flex">
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    className="flex-grow p-2 border text-white border-gray-300 rounded-md"
                                    autoFocus
                                />
                                <button
                                    onClick={() => saveEdit(todo.id)}
                                    className="ml-2 px-3 bg-green-50 hover:bg-green-500 hover:text-white cursor-pointer text-green-500 rounded-md"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setEditingId(null)}
                                    className="ml-2 px-3 bg-red-100 text-red-500 rounded-md hover:bg-red-500 hover:text-white cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div className="p-3 flex items-center">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleCompleted(todo.id)}
                                    className="h-5 w-5 mr-3 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                />
                                <span
                                    className={`flex-grow ${todo.completed ? 'line-through text-gray-100' : 'text-gray-200'}`}
                                >
                                    {todo.todo}
                                </span>
                                <span
                                    className={`flex-grow ${todo.completed ? 'line-through text-gray-100' : 'text-gray-200'}`}
                                >
                                    {todo.completed?"Completed":"Pending"}
                                </span>
                                <button
                                    onClick={() => startEdit(todo)}
                                    className="ml-2 text-gray-200 hover:text-blue-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="ml-2 text-gray-200 hover:text-red-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <p className="text-center text-gray-200 text-lg">Total Todos: {todos.length}</p>

            {todos.some(todo => todo.completed) && (
                <div className="mt-3 text-right">
                    <button
                        onClick={() => setTodos(todos.filter(todo => !todo.completed))}
                        className="text-sm text-red-500 bg-orange-100 p-2 rounded-lg mr-2 hover:text-blue-700"
                    >
                        Clear completed
                    </button>
                </div>
            )}
        </div>
    );
};

export default ViewTodo;