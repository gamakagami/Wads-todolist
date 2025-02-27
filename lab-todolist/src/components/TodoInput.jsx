import { useState } from "react";

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task"
        className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddTodo}
        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
