import { useState } from 'react';

function TodoForm({ onAddTodo }) {
    const [newTodo, setNewTodo] = useState('');
  
    const handleSubmit = () => {
      onAddTodo(newTodo);
      setNewTodo('');
    };
  
    return (
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
    );
  }
  
  export default TodoForm;