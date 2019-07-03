const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const session = require('express-session')
var MemoryStore = require('memorystore')(session)
require('./config/config')

//Paths
const dirPublic = path.join(__dirname, "../public")
const dirNode_modules = path.join(__dirname, '../node_modules')

//declaracion variables de sesion
app.use(session({
	cookie: { maxAge: 86400000 },
	store: new MemoryStore({
		checkPeriod: 86400000 // prune expired entries every 24h
	}),
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true
}))

//local storage
if (typeof localStorage === "undefined" || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	localStorage = new LocalStorage('./scratch');
}

//Static
app.use(express.static(dirPublic))
app.use('/js', express.static(dirNode_modules + '/jquery/dist'))
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'))

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }))

//Routes
app.use(require('./routes/index'))

//jwt
app.use((req,res, next) =>{
	let token = localStorage.getItem('token')

	jwt.verify(token, 'entregable-tres', (err, decoded) => {

		if (err) {
			return next();
		}

		req.usuario = decoded.usuario;
		console.log(req.usuario)
		res.locals.sesion = true
		res.locals.nombre = req.usuario.nombre
		next();

	});
})

//puerto listener
app.listen(process.env.PORT, () => {
	console.log('servidor en el puerto ' + process.env.PORT)
})

//Conexion mongoose
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, resul) => {
	if (err) {
		return console.log(err)
	}
	console.log("conectado a mongoose")
});