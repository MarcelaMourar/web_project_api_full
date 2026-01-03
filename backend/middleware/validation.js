const { celebrate, Joi} = require('celebrate');
const validator= require('validator');

const validateURL = (value, helpers) => {
    if (validator.isURL(value)) return value;
    return helpers.error('string.uri');
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