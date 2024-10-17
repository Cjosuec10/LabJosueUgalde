# Usa una imagen base de Node.js (puedes ajustar la versión si es necesario)
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto (cámbialo si tu aplicación usa otro)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
