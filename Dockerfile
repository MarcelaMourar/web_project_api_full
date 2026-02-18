FROM node:18-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração que estão DENTRO da pasta backend
COPY backend/package*.json ./

# Instala as dependências (estando agora dentro de /app)
RUN npm install --only=production

# Copia todo o conteúdo da pasta backend para a raiz /app do container
COPY backend/ .

# O comando agora aponta para o app.js que foi copiado para a raiz do container
CMD ["node", "app.js"]