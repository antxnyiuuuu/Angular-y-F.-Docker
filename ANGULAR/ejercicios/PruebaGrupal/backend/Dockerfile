FROM node:22-alpine

# Crea una carpeta dentro del contenedor
WORKDIR /app

# Copia solo archivos de dependencias primero (para aprovechar caché en builds)
COPY package*.json ./

# Instala dependencias del proyecto
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Expone el puerto 3000 para que el backend sea accesible
EXPOSE 3000

# Comando para arrancar backend
CMD ["node", "src/app.js"]

