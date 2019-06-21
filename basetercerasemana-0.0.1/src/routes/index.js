const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const Estudiante = require('../models/estudiante')
require('../helpers/helpers')

const dirViews = path.join(__dirname, '../../template/views');
const dirPartials = path.join(__dirname, '../../template/partials')

//hbs
app.set('view engine', 'hbs')
app.set('views', dirViews)
hbs.registerPartials(dirPartials)

//Inicio
app.get('/',(req,res)=>{
    res.render('index',{
        titulo: 'Inicio'
    })
})

app.post('/registrar', (req, res ) => {

    let estudiante = new Estudiante({
        nombre: req.body.nombre,
        matematicas: req.body.matematicas,
        ingles: req.body.ingles,
        programacion: req.body.programacion
    })
    console.log(estudiante)
    estudiante.save((err,result) =>{
        if(err){
            res.render('indexpost',{
                mostrar: err
            })
        }else{
            res.render('indexpost',{
                mostrar: result
            })
        }
    })	
});

app.get('*',(req,res)=> {
	res.render('error', {
		titulo: "Error 404"
	})
});

module.exports = app;