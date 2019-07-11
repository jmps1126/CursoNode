const hbs = require('hbs');

//Listado de cursos que puede ver el coordinador
hbs.registerHelper('listarCursos', (listCursos) => {
	let table = `<form action="/eliminarCurso" method="post">
	<table class='table table-striped table-hover'> 
			<thead class='thead-dark'>
			<th>código curso</th>
			<th>Nombre</th>
			<th>Descripción</th>
			<th>Valor</th>
			<th></th>
			<th></th>
			</thead>
			<tbody>`;
	listCursos.forEach(curso => {
		table = table +
			`<tr>
			<td> ${curso.idcurso} </td>
			<td> ${curso.nombre} </td>
			<td> ${curso.descripcion}</td>
			<td> ${curso.valor} </td>
			<td><button class="btn btn-danger" name="idcurso" value="${curso.idcurso}">Eliminar</button></td>
			<td><a class="btn btn-primary" href="/actualizarCurso/${curso.idcurso}">Actualizar</a></td>
			</tr>`
		})
		table = table + '</tbody> </table></form>'	
		
		return table
	})

//listado de cursos disponibles
hbs.registerHelper('listarCursosDisponibles', (listCursosDisponibles) => {
	let table = `<form action="/reservar" method="post">
	<table class='table table-striped table-hover'> 
			<thead class='thead-dark'>
			<th>código curso</th>
			<th>Nombre</th>
			<th>Descripción</th>
			<th>Valor</th>
			<th></th>
			<th></th>
			</thead>
			<tbody>`;
		listCursosDisponibles.forEach(curso => {
		table = table +
			`<tr>
			<td> ${curso.idcurso} </td>
			<td> ${curso.nombre} </td>
			<td> ${curso.descripcion}</td>
			<td> ${curso.valor} </td>
			<td><button class="btn btn-primary" name="idcurso" value="${curso.idcurso}">Inscribirse</button></td>
			</tr>`
		})
		table = table + '</tbody> </table></form>'	
		
		return table
	})