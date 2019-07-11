const mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema
const cursosSchema = new Schema({

    idcurso:{
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    descripcion:{
        type: String,
        required: true,
        trim: true
    },
    valor:{
        type: Number,
        required: true,
        trim: true
    },
    modalidad: {
        type: String
    },
    intensidad:{
        type: Number,
        trim:true
    },
    estado:{
        type: Number,
        default: 1
    },
    cupos:{
        type: Number,
        required: true
    }

})

cursosSchema.plugin(uniqueValidator);
const Curso = mongoose.model('Curso', cursosSchema)

module.exports = Curso;