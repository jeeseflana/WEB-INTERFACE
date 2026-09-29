import { useTodos } from "./TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const {
    todos,
    filter,
    setFilter,
    activeCount,
    allCount,
  } = useTodos();

  return (
    <div className="todo-list">

      <div className="filters">
        {["all", "active", "done"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? "active" : ""}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {todos.length === 0 ? (
        <p className="empty">
          Nothing here yet.
        </p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      )}

      <p className="count">
        {activeCount} of {allCount} remaining
      </p>

    </div>
  );
}