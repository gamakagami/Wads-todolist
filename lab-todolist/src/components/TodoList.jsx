import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
