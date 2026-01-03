const mongoose = require('mongoose');
const validator= require ('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [ true, 'O e-amil é obrigatório'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: 'Formato de e-mail inválido'
        }
    },
    password: {
        type: String,
        required: [ true, 'A senha é obrigatória'],
        minlength: 8,
        select: false
        
    },
    
    name: {
        type: String,
        default: 'Jacques Cousteau',
        minlength: 2,
        maxlength: 30
     },

     about: {
        type: String,
        default: 'Explorer',
        minlength: 2,
        maxlength: 30
     },

     avatar: {
        type: String,
        default:'https://practicum-content.s3.us-west-1.amazonaws.com/resources/moved_avatar_1604080799.jpg',
        validate: {
            validator: (value) => validator.isURL(value),
            message: 'URL do avatar invalida'
        }
     }
});

module.exports = mongoose.model ('User', userSchema);