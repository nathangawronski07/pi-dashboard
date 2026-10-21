import { useState, useEffect } from "react";

export default function Greeting({ name }) {
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    const timer = setInterval(() => {
      setHour(new Date().getHours())
    }, 60000);
    return () => clearInterval(timer);

  }, []);

  let greeting;
    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

  return <h1 className="text-6xl mb-6">{greeting}, {name}</h1>;
}