Around The U.S. - Full Stack (Web Project API Full)
Este é o projeto final do meu curso de desenvolvimento web. Ele consiste em uma aplicação completa (Full Stack) onde implementei um servidor back-end com autenticação, um banco de dados MongoDB e integrei com um front-end desenvolvido em React.

Sobre o Projeto:
O projeto "Around The U.S." é uma rede social interativa onde os usuários podem compartilhar fotos de lugares, curtir postagens de outros usuários e gerenciar seus próprios perfis.

Nesta etapa final, o foco foi:

Segurança: Implementação de criptografia de senhas e autenticação via JWT.
Backend: Criação de uma API REST robusta com Node.js e Express.
Infraestrutura: Deploy em servidor em nuvem (Google Cloud/AWS), configuração de domínio, HTTPS e gerenciamento de processos com PM2.

Tecnologias Utilizadas

Front-end
React.js: Biblioteca principal.
React Router: Gerenciamento de rotas.
Context API: Para estado global do usuário.
Validator: Validação de inputs.

Back-end
Node.js & Express: Servidor e rotas.
MongoDB & Mongoose: Banco de Dados NoSQL e modelagem.
JSON Web Token (JWT): Autenticação segura.
Bcryptjs: Hash de senhas.
Celebrate & Joi: Validação de requisições.
Winston: Registro de logs (request.log e error.log).
Infraestrutura / DevOps
Nginx: Servidor web e Proxy Reverso.
PM2: Gerenciador de processos para manter o app online.
Certbot/Let's Encrypt: Certificados SSL (HTTPS).
Google Cloud: Hospedagem.

Funcionalidades

Registro e Login: Usuários podem criar contas e fazer login com e-mail e senha validados.
Autorização: Apenas usuários autenticados podem acessar as funcionalidades de postagem e curtidas.
Gestão de Cartões: Adicionar, excluir e curtir fotos.
Edição de Perfil: Alterar nome, descrição e foto do avatar.
Tratamento de Erros: Sistema centralizado de erros no back-end para evitar exposição de dados sensíveis.



URL da API: https://web-project-api-full-w621.onrender.com/
