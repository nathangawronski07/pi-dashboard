from fastapi import FastAPI

app = FastAPI()

mock_weather = {"temp": 54, "condition": "Cloudy", "fetched_at": "2026-10-19T14:00:00Z"}
mock_todos = [
    {"id": 1, "title": "Study for exam", "done": False},
    {"id": 2, "title": "Rugby practice", "done": True},
]

@app.get("/api/weather")
def get_weather():
    return mock_weather

@app.get("/api/todos")
def get_todos():
    return mock_todos