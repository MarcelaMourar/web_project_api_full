# 🌎 Around The U.S. - Full Stack

## 📌 Descrição

**Around The U.S. - Full Stack** é o projeto final desenvolvido durante o programa de Desenvolvimento Web da TripleTen.

Trata-se de uma aplicação **Full Stack** que integra um **front-end desenvolvido em React** com um **back-end construído em Node.js e Express**, utilizando **MongoDB** como banco de dados.

A aplicação funciona como uma rede social interativa, permitindo que os usuários criem contas, façam login, compartilhem fotos de lugares, curtam publicações e gerenciem seus próprios perfis.

Além do desenvolvimento da aplicação, o projeto inclui a implementação de práticas modernas de segurança, autenticação, deploy em nuvem e configuração de infraestrutura para disponibilizar a aplicação em produção.

---

## ✨ Funcionalidades

* 🔐 Cadastro e login de usuários;
* 🛡️ Autenticação segura utilizando JSON Web Token (JWT);
* 👤 Edição do perfil do usuário;
* 🖼️ Adição e exclusão de cartões (fotos);
* ❤️ Curtir e remover curtidas das publicações;
* 🖋️ Atualização do avatar;
* 🔒 Proteção de rotas privadas;
* ⚠️ Tratamento centralizado de erros;
* 📱 Interface responsiva para diferentes dispositivos.

---

## 🛠️ Tecnologias Utilizadas

### Front-end

* **React.js** → Construção da interface da aplicação;
* **React Router** → Gerenciamento das rotas;
* **Context API** → Gerenciamento do estado global do usuário;
* **Validator** → Validação de entradas do usuário;
* **JavaScript (ES6+)** → Lógica da aplicação;
* **CSS3** → Estilização e responsividade.

### Back-end

* **Node.js** → Ambiente de execução JavaScript;
* **Express.js** → Desenvolvimento da API REST;
* **MongoDB** → Banco de dados NoSQL;
* **Mongoose** → Modelagem dos dados;
* **JSON Web Token (JWT)** → Autenticação segura;
* **Bcryptjs** → Criptografia de senhas;
* **Celebrate & Joi** → Validação das requisições;
* **Winston** → Sistema de logs.

### Infraestrutura e DevOps

* **Nginx** → Servidor web e proxy reverso;
* **PM2** → Gerenciamento dos processos da aplicação;
* **Certbot / Let's Encrypt** → Certificados SSL (HTTPS);
* **Google Cloud** → Hospedagem da aplicação.

---

## 🚀 Como executar o projeto localmente

### 1. Clone o repositório

```bash id="r36m3r"
git clone https://github.com/MarcelaMourar/web_project_api_full.git
```

### 2. Acesse a pasta do projeto

```bash id="4rlm4g"
cd web_project_api_full
```

### 3. Instale as dependências

Caso o projeto possua pastas separadas para front-end e back-end, instale as dependências em cada uma delas.

```bash id="m6m85x"
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` com as configurações necessárias.

Exemplo:

```env id="bxhtrg"
PORT=3000

JWT_SECRET=sua_chave_secreta

MONGO_URI=sua_string_de_conexao
```

### 5. Execute a aplicação

Inicie o servidor:

```bash id="gk45z5"
npm run dev
```

Ou:

```bash id="u6qlxh"
npm start
```

A aplicação estará disponível em:

```text id="g51ghu"
http://localhost:3000
```

---

## 🌐 Links

### API em produção

https://web-project-api-full-w621.onrender.com/

### Repositório GitHub

https://github.com/MarcelaMourar/web_project_api_full

---

## 🔒 Segurança Implementada

Este projeto utiliza práticas modernas de segurança, incluindo:

* Criptografia de senhas com **Bcryptjs**;
* Autenticação baseada em **JWT**;
* Proteção de rotas privadas;
* Validação de dados com **Celebrate** e **Joi**;
* Tratamento centralizado de erros;
* Registro de logs da aplicação.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para consolidar conhecimentos em desenvolvimento Full Stack, aplicando conceitos como:

* Desenvolvimento de APIs REST;
* Integração entre front-end e back-end;
* Gerenciamento de banco de dados;
* Autenticação e autorização de usuários;
* Segurança de aplicações web;
* Deploy em ambientes de produção;
* Configuração de servidores e infraestrutura;
* Boas práticas de desenvolvimento.

---

## 👩‍💻 Autor

Projeto desenvolvido por **Marcela Moura** como parte do programa de **Desenvolvimento Web da TripleTen**.
