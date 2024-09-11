# Imagen de node de donde se arranca.
FROM node:hydrogen-alpine AS build

# Directorio de trabajo
WORKDIR /app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . . 

# Construimos una build
RUN npm run build



# --------------------------------
FROM node:hydrogen-alpine

WORKDIR /api

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node","dist/index.js"]