import { useState } from "react";
import { useTodos } from "./TodoContext";

export default function AddTodo() {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs doing?"
        aria-label="New todo text"
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
}