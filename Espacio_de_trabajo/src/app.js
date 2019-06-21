const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

//dir node_modules
const dirNode_modules = path.join(__dirname, '../node_modules')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

//dir publico al momento de acceder a la aplicacion
const dirPublico = path.join(__dirname, '../public')
app.use(express.static(dirPublico))


//dir partials
const dirPartials = path.join(__dirname, '../template/partials')
hbs.registerPartials(dirPartials)

//engine hbs
app.set('view engine', 'hbs')

//redirecionar al index
app.get('/',(req,res) =>{
    res.render('index', {
        estudiante: 'Juan Manuel'
    })
})

//puerto encargado de alojar la app
app.listen(3000, () =>{
    console.log('Escuchando por el puerto 3000')
})