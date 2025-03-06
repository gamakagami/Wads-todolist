function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <div 
        className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
      >
        <div 
          className={`flex-grow mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.text}
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onToggle(todo.id)}
            className={`${todo.completed ? 'text-green-500' : 'text-gray-400'} hover:text-green-600`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </button>
          <button 
            onClick={() => onDelete(todo.id)}
            className="text-red-400 hover:text-red-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    );
  }
  
  export default TodoItem;