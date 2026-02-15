require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const { errors: celebrateErrors } = require('celebrate');
const auth = require('./backend/middleware/auth');
const { requestLogger, errorLogger} = require ('./backend/middleware/logger');
const errorHandler = require ('./backend/middleware/errorHandler');
const { validateSignup, validateSignin} = require ('./backend/middleware/validation');
const {createUser, login} = require ('./backend/controllers/users');
const usersRouter = require ('./backend/routes/users');
const cardsRouter = require('./backend/routes/cards');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/aroundb';


app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.post('/signup', validateSignup, createUser);
app.post('/signin',validateSignin, login);

app.use(auth);

app.use('/users',usersRouter);
app.use('/cards', cardsRouter);

app.use(errorLogger);
app.use(celebrateErrors());
app.use(errorHandler);


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});

