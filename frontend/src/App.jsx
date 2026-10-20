import './App.css'
import { useState } from "react"

const mockWeather = { temp: 67, condition: "Sunny", fetched_at: "2026-10-19T14:00:00Z" };
const mockTodos = [
  { id: 1, title: "read", done: false},
  { id: 2, title: "Study for exam", done: false },
  { id: 3, title: "Rugby practice", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(mockTodos);

  function toggleTodo(id) {
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl mb-6">Version 1</h1>

      <div className="mb-8">
        <p className="text-6xl">{mockWeather.temp}°F</p>
        <p className="text-2xl">{mockWeather.condition}</p>
      </div>

      <ul className="text-2xl">
        {todos.map(t => (
          <li key={t.id} onClick={() => toggleTodo(t.id)} className="cursor-pointer">
            {t.done ? "✅" : "⬜"} {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}