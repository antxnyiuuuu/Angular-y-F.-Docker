#Usa una imagen de Node.js imagen oficial tomada de docker hub
FROM node:22-alpine


#Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

#Copia los archivos package.json package.log.json
COPY package*.json ./

#Instala las dependencias
RUN npm install

#Copia el código fuente
COPY  . .

#Exponer el puerto 4200
EXPOSE 4200


#Exponer la aplicación en modo desarrollo
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
