const hbs = require('hbs');

hbs.registerHelper('listarCursos', (listCursos) => {
	let table = `<form action="/inscribir" method="post">
	<table class='table table-striped table-hover'> 
			<thead class='thead-dark'>
			<th>código curso</th>
			<th>Nombre</th>
			<th>Descripción</th>
			<th>Valor</th>
			<th></th>
			</thead>
			<tbody>`;
	listCursos.forEach(curso => {
		table = table +
			`<tr>
			<td> ${curso.idCurso} </td>
			<td> ${curso.nombre} </td>
			<td> ${curso.descripcion}</td>
			<td> ${curso.valor} </td>
			<td><button class="btn btn-danger" name="nombre" value="${curso.idCurso}">Eliminar</button></td>
			
			</tr>`
		})
		table = table + '</tbody> </table></form>'	
		
		return table
	})