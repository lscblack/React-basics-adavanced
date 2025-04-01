import React, { useState } from 'react';

const AddTodo = ({ todos, setTodos }) => {
  const [todoName, setTodoName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
    if (error) setError('');
  };

  const handleAddTodo = () => {
    // Validate input
    if (!todoName.trim()) {
      setError('Please enter a todo item');
      return;
    }

    // Check for duplicate todos
    if (todos.some(todo => todo.todo.toLowerCase() === todoName.trim().toLowerCase())) {
      setError('This todo already exists');
      return;
    }

    // Add new todo
    setTodos([...todos, {
      id: Date.now(),
      todo: todoName.trim(),
      completed: false
    }]);
    
    // Clear input
    setTodoName('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-4 px-4 sm:px-0">
      <div className=" py-4 rounded-lg ">
        <div className="mb-4">
          <label htmlFor="todoInput" className="block text-lg font-bold text-gray-100 mb-1">
            New Todo
          </label>
          {error && (
            <p className="mt-2 mb-5 text-sm text-red-600 bg-red-100 p-3 rounded-md flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {error}
            </p>
          )}
          <div className="relative">
            <input
              id="todoInput"
              type="text"
              value={todoName}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Add a todo..."
              className={`w-full p-3 border-3 ${error ? 'border-red-500' : 'border-gray-200'} rounded-md 
                focus:outline-none text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent
                transition duration-200 ease-in-out`}
            />
            {todoName && (
              <button
                onClick={() => setTodoName('')}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                aria-label="Clear input"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>

        </div>
        <button
          onClick={handleAddTodo}
          className="w-full p-3 rounded-md font-medium text-white 
            bg-orange-500 hover:bg-orange-500 active:bg-orange-700
            transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;