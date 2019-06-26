const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('./config/config')

//Paths
const dirPublic = path.join(__dirname, "../public")
const dirNode_modules = path.join(__dirname, '../node_modules')

//Static
app.use(express.static(dirPublic))
app.use('/js', express.static(dirNode_modules + '/jquery/dist'))
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'))

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }))

//Routes
app.use(require('./routes/index'))

//puerto listener
app.listen(process.env.PORT, () => {
	console.log('servidor en el puerto ' + process.env.PORT)
})

//Conexion mongoose
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, resul) => {
	if (err) {
		return console.log(error)
	}
	console.log("conectado a mongoose")
});