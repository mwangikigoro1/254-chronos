@echo off
echo Checking for Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python not found. Trying Python launcher...
    py --version >nul 2>&1
    if %errorlevel% neq 0 (
        echo.
        echo Python is not installed.
        echo Please install Python from https://www.python.org/downloads/
        echo Make sure to check "Add Python to PATH" during install.
        pause
        exit
    )
    echo Starting server with py launcher...
    start "" "http://localhost:8080"
    py -m http.server 8080
) else (
    echo Starting 254 Chronos on http://localhost:8080 ...
    start "" "http://localhost:8080"
    python -m http.server 8080
)
pause
