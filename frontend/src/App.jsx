import './App.css'
import { useEffect, useState } from "react"
import Clock from "./components/Clock";
import WeatherCard from "./components/WeatherCard";
import TodoList from './components/TodoList';

const mockWeather = { temp: 67, condition: "Sunny", fetched_at: "2026-10-19T14:00:00Z" };
const mockTodos = [
  { id: 1, title: "read", done: false},
  { id: 2, title: "Study for exam", done: false },
  { id: 3, title: "Rugby practice", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(mockTodos);
  
  // useState
  // useEffect
  // setInterval
  // clearInterval
  function toggleTodo(id) {
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-6xl mb-6">Good Morning, Nathan</h1>
      <div className="grid grid-cols-3 gap-8">
        <Clock />
        <WeatherCard weather={mockWeather} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </div>
  );
}