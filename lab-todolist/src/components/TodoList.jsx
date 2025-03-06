import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import TodoItem from './TodoItem';
import EmptyState from './EmptyState';
import BackButton from './BackButton';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true; 
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
      <BackButton />
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
        
        <TodoForm onAddTodo={addTodo} />
        <TodoFilters currentFilter={filter} onFilterChange={setFilter} />

        <div className="space-y-2">
          {filteredTodos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onToggle={toggleTodo} 
              onDelete={deleteTodo} 
            />
          ))}
        </div>

        {todos.length === 0 && <EmptyState />}
      </div>
    </div>
  );
}

export default TodoList;