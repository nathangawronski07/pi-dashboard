export default function WeatherCard({ weather }) {
  return (
    <div>
        <p className="text-6xl">{weather.temp}°F</p>
        <p className="text-6xl">{weather.condition}</p>
    </div>
  );
}