const { celebrate, Joi} = require('celebrate');
const validator= require('validator');

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.message('URL inválida');
};

module.exports.validateSignup = celebrate ({
    body: Joi.object().keys({
        name: Joi.string().min(2).max(30).optional(),
        about: Joi.string().min(2).max(30).optional(),
        avatar: Joi.string().optional().custom(validateURL),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    }),
});

module.exports.validateSignin = celebrate ({
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    }),
});

module.exports.validateUserUpdate = celebrate ({
    body: Joi.object().keys ({
        name: Joi.string().required().min(2).max(30),
        about: Joi.string().required().min(2).max(30),
    }),
});

module.exports.validateAvatar = celebrate ({
    body: Joi.object().keys({
        avatar: Joi.string().required().custom(validateURL),
    }),
});

module.exports.validateUserId = celebrate ({
    params: Joi.object().keys({
        id: Joi.string().hex().length(24),
    }),
});

module.exports.validateCardId = celebrate ({
    params: Joi.object().keys({
        cardId: Joi.string().hex().length(24),
    }),
});

module.exports.validateCard = celebrate ({
    body: Joi.object().keys({
        name: Joi.string().required().min(2).max(30),
        link: Joi.string().required().custom(validateURL),
    }),
});