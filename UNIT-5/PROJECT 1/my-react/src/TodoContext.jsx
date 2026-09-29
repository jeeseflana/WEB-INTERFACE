import { createContext, useContext, useState, useMemo } from "react";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn Context API", done: true },
    { id: 2, text: "Build a to-do app", done: false },
  ]);

  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text.trim(),
        done: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const visibleTodos = useMemo(() => {
    if (filter === "active") {
      return todos.filter((t) => !t.done);
    }

    if (filter === "done") {
      return todos.filter((t) => t.done);
    }

    return todos;
  }, [todos, filter]);

  const value = {
    todos: visibleTodos,
    allCount: todos.length,
    activeCount: todos.filter((t) => !t.done).length,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const ctx = useContext(TodoContext);

  if (!ctx) {
    throw new Error(
      "useTodos must be used inside a <TodoProvider>"
    );
  }

  return ctx;
}