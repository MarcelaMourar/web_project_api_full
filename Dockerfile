FROM node:18-slim

WORKDIR /app

# Copia os arquivos de dependências da raiz
COPY package*.json ./

# Instala as dependências
RUN npm install --only=production

# Copia TODOS os arquivos e pastas (incluindo a pasta backend)
COPY . .

# Garante que o Node ignore erros de avisos e use a porta correta
ENV NODE_ENV=production
ENV PORT=8080

# Comando para iniciar o app que está na raiz
CMD ["node", "app.js"]