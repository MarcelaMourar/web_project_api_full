# Use uma imagem oficial do Node
FROM node:18-slim

# Cria o diretório da app
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências de produção
RUN npm install --only=production

# Copia o resto do código
COPY . .

# O Cloud Run passará a porta via variável de ambiente, 
# então apenas garantimos que o comando de inicialização rode o script start
CMD ["npm", "start"]