FROM node:20.13.1-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 4000

CMD ["node", "App.js"]