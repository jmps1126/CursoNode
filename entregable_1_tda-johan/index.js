'use strict'

const fs = require('fs')
const cursos = require('./cursos.json')


const opts = {
    idcurso:{
        demand: true,
        alias: 'id'
    },
    nombre:{
        default:'',
        alias: 'n'
    },
    cedula:{
        default:'',
        alias: 'c'
    }
}

const argv = require('yargs')
.command('inscribir', 'Seleccionar el curso a matricular', opts)
.argv

if(argv.idcurso){
    const cursoSeleccionado = cursos.find(curso => curso.id == argv.idcurso)
    if(cursoSeleccionado){
        const {idcurso, nombre, cedula } = argv
        const infoEstudiante = {...cursoSeleccionado,idcurso,nombre,cedula}

        fs.writeFileSync('estudiantesEscritos.json', JSON.stringify(infoEstudiante))
    }else{
        console.error('no se encontró curso')
    }
}else{
    let delay = 0;
    for(let curso of cursos){
        delay += 2000
        setTimeout(()=>{
            console.log(curso)
        }, delay)
    }
}




