FROM node:18-slim

WORKDIR /usr/src/app

# Copia os arquivos de configuração
COPY package*.json ./

# Instala apenas dependências de produção (ignora nodemon)
RUN npm install --only=production

# Copia o restante do código
COPY . .

# Garante que o container use a variável de ambiente PORT do Google
ENV PORT 8080

# Comando para iniciar
CMD [ "node", "app.js" ]