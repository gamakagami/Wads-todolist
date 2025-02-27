import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
