const bcrypt = require ('bcryptjs');
const User = require ('../models/user');
const jwt = require('jsonwebtoken');
const UnauthorizedError = require ('../errors/UnauthorizedError');
const ConflictError = require ('../errors/ConflictError');
const NotFoundError = require ('../errors/NotFoundError');

const { JWT_SECRET = 'segredo-em-dev'} = process.env;

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    }))
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('Email já cadastrado'));
      } else {
        next(err);
      }
    });
};


module.exports.login = (req, res, next) => {
  const {email, password } = req.body;

  User.findOne({ email }).select('+password')
  .then((user) =>{
    if (!user) {
      throw new UnauthorizedError (' Email ou senha incorretas');
    }

    return bcrypt.compare(password, user.password)
    .then((matched) => {
      if (!matched) {
        throw new UnauthorizedError ('Email ou senha incorretas');
      }

      const token = jwt.sign (
        { _id: user._id },
        JWT_SECRET,
        {expiresIn: '7d'},
      );

      res.send ({ token});
    });
  })
  .catch(next);
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Usuário não encontrado');
      }
      res.send(user);
    })
    .catch(next);
};

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Usuário não encontrado');
      }
      res.send(user);
    })
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .then((user) => res.send(user))
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .then((user) => res.send(user))
    .catch(next);
};