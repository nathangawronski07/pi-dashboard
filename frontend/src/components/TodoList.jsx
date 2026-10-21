export default function TodoList({ todos, onToggle }) {
  return (
    <ul className="text-2xl">
      {todos.map(t => (
        <li
          key={t.id}
          onClick={() => onToggle(t.id)}
          className="cursor-pointer"
        >
          {t.done ? "✅" : "⬜"} {t.title}
        </li>
      ))}
    </ul>
  );
}