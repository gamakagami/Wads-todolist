function TodoItem({ todo, index, removeTodo, toggleComplete }) {
    return (
      <li
        className={`flex items-center justify-between p-3 rounded-lg ${
          todo.completed ? "bg-green-600" : "bg-gray-700"
        }`}
      >
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
            className="w-5 h-5 accent-green-500"
          />
          <span className={`text-lg ${todo.completed ? "line-through" : ""}`}>
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => removeTodo(index)}
          className="px-3 py-1 text-sm bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          Remove
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  