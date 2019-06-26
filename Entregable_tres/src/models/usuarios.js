const mongoose = require('mongoose')

const Schema = mongoose.Schema
const usuariosSchema = new Schema({

    identificacion: {
        type: Number,
        required: true,
        trim: true
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

const Usuario = mongoose.model('Usuario', usuariosSchema)

module.exports = Usuario;