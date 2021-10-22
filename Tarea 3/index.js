const url = 'http://www.raydelto.org/agenda.php'
const conte  = document.querySelector('tbody')

let mos=''

const modalcontacto = new bootstrap.Modal(document.getElementById('modalcontacto'))

const formcontacto = document.querySelector('form')

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const telefono = document.getElementById('telefono')



butcrear.addEventListener('click', ()=>
{
	nombre.value = ''
	apellido.value = ''
	telefono.value = ''

	modalcontacto.show()
})


const mostrar = (contacs) => {
	contacs.forEach(contac => {
		
		mos += `<tr>

					<td>${contac.nombre}</td>
					<td>${contac.apellido}</td>
					<td>${contac.telefono}</td>
					
				</tr>
				` 
	})
	conte.innerHTML = mos
	

}

fetch (url)

	.then(response => response.json () )
	.then(data => mostrar(data))


formcontacto.addEventListener('submit', (e)=>{

	e.preventDefault()

	fetch(url, {
		method:'POST',
		
		body: JSON.stringify({
			nombre:nombre.value,
			apellido:apellido.value,
			telefono:telefono.value
		})
	})
	.then(response => response.json())
	.then(data => {
		const nuevocontacto =[]
		nuevocontacto.push(data)
		mostrar(nuevocontacto)

	})

	modalcontacto.hide()
	
})


