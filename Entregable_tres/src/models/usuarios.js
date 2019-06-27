const mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema
const usuariosSchema = new Schema({

    identificacion: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: Number,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true
    },	
    contrasena: {
        type: String,
        required: true
    },
    rol:{
        type: Number,
        default: 1
    }

})
usuariosSchema.plugin(uniqueValidator);
const Usuario = mongoose.model('Usuario', usuariosSchema)

module.exports = Usuario;