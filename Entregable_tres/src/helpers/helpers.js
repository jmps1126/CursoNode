const hbs = require('hbs');

//helper regresar
hbs.registerHelper('regresar',()=>{
	window.history.back
})