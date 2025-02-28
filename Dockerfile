# Usar una imagen oficial de Node
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Compilar TypeScript
RUN npm run build

# Exponer el puerto donde corre tu app
EXPOSE 3000

# Comando para arrancar la aplicación
CMD ["npm", "run", "start"]