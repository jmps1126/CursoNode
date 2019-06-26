const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const dirViews = path.join(__dirname, '../../template/views')
const dirPartials = path.join(__dirname, '../../template/partials')
const Usuario = require('./../models/usuarios')
require('./../helpers/helpers')

//hbs
app.set('view engine', 'hbs')
app.set('views', dirViews)
hbs.registerPartials(dirPartials)

//pagina de inicio
app.get('/', (req, res) => {
	res.render('index', {
		titulo: 'Entregable Tres Curso NodeJs',
	})
})

//pagina de logeo
app.get('/login', (req, res) =>{
	res.render('login')
})

//pagina de registro
app.get('/registrarse', (req,res)=>{
	res.render('registrarse')
})

app.post('/registroUsuario', (req,res)=>{
	 let usuario = new Usuario({

		 identificacion: req.body.identificacion,
		 nombre: req.body.nombre,
		 telefono: req.body.telefono,
		 correo: req.body.correo,
		 contrasena: req.body.contrasena
	 })

	 usuario.save((err,result)=>{
		 if(err){
			console.log(err)
			res.render('informativo',{
				titulo: 'Error',
				mensaje: 'Ha ocurrido un error'
			})
		 }else{
			 res.render('informativo', {
				 titulo: 'Sucess',
				 mensaje: 'El usuario ha sido almacenado exitosamente'
			 })
		 }
	 })
})

//Error page
app.get('*', (req, res) => {
	res.render('informativo', {
		titulo: 'Informativo',
		mensaje: 'Ha ocurrido un error'
	})
})

module.exports = app