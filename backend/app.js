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
const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/aroundb';

mongoose.connect(MONGO_URL)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

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

