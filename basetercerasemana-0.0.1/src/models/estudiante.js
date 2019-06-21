const mongoose = require('mongoose')
const Schema = mongoose.Schema

//esquema
const estudianteSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    matematicas: {
        type: Number
    },
    ingles: {
        type: Number
    },
    programacion: {
        type: Number
    }
})

//modelo
const Estudiante = mongoose.model('Estudiante', estudianteSchema)

module.exports = Estudiante