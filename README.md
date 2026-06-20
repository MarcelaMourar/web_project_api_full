# 🌎 Around The U.S. - Full Stack

## 📌 Description

**Around The U.S. - Full Stack** is the final project of the Web Development Program at TripleTen. 

It is a **Full Stack** web application. It connects a **React front-end** with a **Node.js and Express back-end**, using **MongoDB** for the database.

The application works like a simple social network. Users can create accounts, log in, share photos of places, like posts, and edit their profiles.

The project also includes modern practices for security, user authentication, cloud deploy, and infrastructure setup to put the application online.

---

## ✨ Features

* 🔐 User sign-up and login;
* 🛡️ Secure authentication with JSON Web Token (JWT);
* 👤 User profile editing;
* 🖼️ Add and delete cards (photos);
* ❤️ Like and unlike posts;
* 🖋️ Update user avatar;
* 🔒 Protected private routes;
* ⚠️ Centralized error handling;
* 📱 Responsive design for different devices.

---

## 🛠️ Technologies Used

### Front-end

* **React.js** → Building the user interface;
* **React Router** → Route management;
* **Context API** → Global user state management;
* **Validator** → Input validation;
* **JavaScript (ES6+)** → Application logic;
* **CSS3** → Styling and responsiveness.

### Back-end

* **Node.js** → JavaScript runtime environment;
* **Express.js** → REST API development;
* **MongoDB** → NoSQL database;
* **Mongoose** → Data modeling;
* **JSON Web Token (JWT)** → Secure authentication;
* **Bcryptjs** → Password encryption;
* **Celebrate & Joi** → Request validation;
* **Winston** → Logger system.

### Infrastructure & DevOps

* **Nginx** → Web server and reverse proxy;
* **PM2** → Process management;
* **Certbot / Let's Encrypt** → SSL Certificates (HTTPS);
* **Google Cloud** → Application hosting.

---

## 🚀 How to run the project locally

### 1. Clone the repository

```bash
git clone https://github.com/MarcelaMourar/web_project_api_full.git
```

### 2. Go to the project folder

```bash
cd web_project_api_full
```

### 3. Install dependencies

If the project has separate folders for front-end and back-end, install the dependencies in each folder.

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file with the required settings.

Example:

```env
PORT=3000
JWT_SECRET=your_secret_key
MONGO_URI=your_connection_string
```

### 5. Run the application

Start the server:

```bash
npm run dev
```

Or:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

## 🌐 Links

### Production API
https://web-project-api-full-w621.onrender.com/

### GitHub Repository
https://github.com/MarcelaMourar/web_project_api_full

---

## 🔒 Security Implemented

This project includes modern web security features:

* Password encryption using **Bcryptjs**;
* Authentication with **JWT**;
* Protected private routes;
* Data validation with **Celebrate** and **Joi**;
* Centralized error handling;
* Application logs.

---

## 🎯 Project Objective

This project was built to practice Full Stack development skills, applying concepts like:

* Building REST APIs;
* Connecting front-end and back-end;
* Database management;
* User authentication and authorization;
* Web application security;
* Deploying to production environments;
* Server and infrastructure configuration;
* Coding best practices.

---

## 👩‍💻 Author

Project developed by **Marcela Moura** as part of the **TripleTen Web Development Program**.
