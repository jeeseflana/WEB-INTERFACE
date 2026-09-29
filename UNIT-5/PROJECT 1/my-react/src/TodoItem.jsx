import { useTodos } from "./TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className={`todo-item ${todo.done ? "done" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        />

        <span>{todo.text}</span>
      </label>

      <button
        onClick={() => deleteTodo(todo.id)}
        aria-label={`Delete "${todo.text}"`}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
}