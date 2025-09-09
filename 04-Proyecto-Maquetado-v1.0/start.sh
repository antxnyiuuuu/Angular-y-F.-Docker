#!/bin/bash

echo "========================================"
echo "   Viajes Mexico - App Prototipo"
echo "========================================"
echo ""
echo "Iniciando servidor de desarrollo..."
echo ""
echo "Si no tienes npm instalado:"
echo "1. Abre pages/index.html directamente"
echo "2. O instala Node.js desde https://nodejs.org"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

# Verificar si npm está disponible
if ! command -v npm &> /dev/null; then
    echo "npm no encontrado. Abriendo archivo directamente..."
    if command -v xdg-open &> /dev/null; then
        xdg-open pages/index.html
    elif command -v open &> /dev/null; then
        open pages/index.html
    else
        echo "Por favor abre pages/index.html manualmente en tu navegador"
    fi
    read -p "Presiona Enter para continuar..."
    exit 1
fi

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "Instalando dependencias..."
    npm install
fi

echo "Iniciando servidor en http://localhost:3000"
echo ""
npm start

