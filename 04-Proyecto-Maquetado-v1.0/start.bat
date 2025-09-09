@echo off
echo ========================================
echo    Viajes Mexico - App Prototipo
echo ========================================
echo.
echo Iniciando servidor de desarrollo...
echo.
echo Si no tienes npm instalado:
echo 1. Abre pages/index.html directamente
echo 2. O instala Node.js desde https://nodejs.org
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

REM Verificar si npm está disponible
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo npm no encontrado. Abriendo archivo directamente...
    start pages/index.html
    pause
    exit /b
)

REM Verificar si node_modules existe
if not exist "node_modules" (
    echo Instalando dependencias...
    npm install
)

echo Iniciando servidor en http://localhost:3000
echo.
npm start

