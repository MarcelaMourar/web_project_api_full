require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const { errors: celebrateErrors } = require('celebrate');
const auth = require('./middleware/auth');
const { requestLogger, errorLogger} = require ('./middleware/logger');
const errorHandler = require ('./middleware/errorHandler');
const { validateSignup, validateSignin} = require ('./middleware/validation');
const {createUser, login} = require ('./controllers/users');
const usersRouter = require ('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000, MONGO_URL = 'mongodb://127.0.0.1:27017/aroundb' } = process.env;

const app = express();

mongoose.connect(MONGO_URL);


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


app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
