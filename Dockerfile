FROM node:18

WORKDIR /home/app

# Primero copiá solo package.json y package-lock.json para cachear mejor
COPY package*.json ./

# Instalá dependencias
RUN npm install

# Copiá el resto del código
COPY . .

# Asegurate de copiar el .env si lo necesitás
COPY .env .env

EXPOSE 3000

CMD ["node", "index.js"]
