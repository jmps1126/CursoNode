const hbs = require('hbs');

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