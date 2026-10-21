import './App.css'
import { useEffect, useState } from "react"
import Clock from "./components/Clock";
import WeatherCard from "./components/WeatherCard";
import TodoList from './components/TodoList';
import Greeting from './components/Greeting';
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
        <Greeting name={"Nathan"} />
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-2xl p-6 text-gray-400">
          <Clock />
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-gray-400">
          <WeatherCard weather={mockWeather} />
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-gray-400">
          <TodoList todos={todos} onToggle={toggleTodo} />
        </div>
      </div>
    </div>
  );
}