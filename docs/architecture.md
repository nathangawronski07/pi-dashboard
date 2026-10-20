# Pi Dashboard: Architecture

## Overview
A kiosk dashboard showing weather and a to-do list. The Raspberry Pi 4B
runs a FastAPI backend and a Chromium browser in kiosk mode that loads the
React frontend and outputs to a monitor over HDMI.

## Diagram
```
[Browser / React]  <-->  [FastAPI backend]  <-->  [SQLite]
                               |
                               v
                       [Weather API (Open-Meteo)]
```

## Design decisions
- Frontend only talks to my backend, never to Open-Meteo directly.
- Backend fetches weather on a schedule and caches it in SQLite.
- (add: polling vs. other update strategy)
- (add: failure behavior when the weather API is down)

## API
- GET    /api/todos
- POST   /api/todos
- PATCH  /api/todos/{id}
- DELETE /api/todos/{id}
- GET    /api/weather

(add example JSON for each)

## Database
- tasks(id, title, done, created_at)
- weather_cache(id, temp, condition, fetched_at)