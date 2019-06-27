const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
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
		 contrasena: bcrypt.hashSync(req.body.contrasena,10) 
	 })

	 usuario.save((err,result)=>{
		 if(err){
			res.render('informativo',{
				titulo: 'Error',
				mensaje: `Ha ocurrido un error: ${err}`
			})
		 }else{
			 res.render('informativo', {
				 titulo: 'Sucess',
				 mensaje: 'El usuario ha sido almacenado exitosamente' 
			 })
		 }
	 })
})

//Ingresar al sistema
app.post('/ingresar', (req, res) =>{

	Usuario.findOne({correo: req.body.correo},(err, result) =>{
		if(err){
			return res.render('informativo',{
				titulo: 'Error',
				mensaje: `Ha ocurrido un error ${err}`
			})
		}
		if(!result){
			return res.render('informativo', {
				titulo: 'Error',
				mensaje: `El usuario no está registrado en el sistema`
			})
		}
		if(!bcrypt.compareSync(req.body.contrasena, result.contrasena)){
			return res.render('informativo', {
				titulo: 'Error',
				mensaje: `contraseña incorrecta.`
			})
		}

		//generar token
		let token = jwt.sign({
			data: result
		},'entregable-tres', {expiresIn: '1h'})
		
		localStorage.setItem('token',token)
		//Asignamos una variable de session para identicar el rol del usurio

		// 1 = rol aspirante
		//2 = rol coordinador
		//3 = rol interesado

		let aspirante = false;
		let coordinador = false;
		let interesado = false;

		switch(result.rol){
			case 1:
				aspirante = true
				break

			default:
				console.log('No se encontro un rol para el usuario en la base de datos')
		}
	

		res.render('menuppal',{
			mensaje: `Bienvenido Sr(a) ${result.nombre}`,
			rolAspirante: aspirante
		})


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