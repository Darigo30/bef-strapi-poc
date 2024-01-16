# Etapa de construcción
FROM node:18-alpine as build
# Establecer el directorio de trabajo
WORKDIR /app
# Copiar package.json y package-lock.json
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar los archivos de la aplicación
COPY . .
# Construir la aplicación
RUN npm run build
# Etapa de ejecución
FROM nginx:alpine
# Copiar el build de Angular al directorio de Nginx
COPY --from=build /app/dist/bef-project/browser /var/www/carpeta2
# Exponer el puerto 8080  
EXPOSE 8080
# Comando para ejecutar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]