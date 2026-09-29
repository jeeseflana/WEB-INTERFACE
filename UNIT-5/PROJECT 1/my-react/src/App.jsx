import { TodoProvider } from "./TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./App.css";

export default function App() {
  return (
    <TodoProvider>
      <div className="app">
        <h1>To-Do</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}