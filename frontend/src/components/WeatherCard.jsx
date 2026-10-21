

export default function WeatherCard({ weather }) {
  return (
    <div>
        <p className="text-4xl">{weather.temp}°F</p>
        <p className="text-4xl">{weather.condition}</p>
    </div>
  );
}