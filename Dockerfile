FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
# Isso copia a pasta backend e o app.js para dentro do container
COPY . .
ENV PORT 8080
CMD ["node", "app.js"]