@echo off
echo Starting 254 Chronos local server...
echo.
echo Opening browser at http://localhost:8080
echo.
echo Keep this window open while using the site.
echo Close this window to stop the server.
echo.
start "" "http://localhost:8080"
python -m http.server 8080
pause
