const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const reservaCursoSchema = new Schema({

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
    idCurso: {
        type: Number,
        required: true
    }
	
});


const ReservaCurso = mongoose.model('ReservaCurso', reservaCursoSchema);

module.exports = ReservaCurso