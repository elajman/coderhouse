const name = document.getElementById('username')
const email = document.getElementById('email')
const form = document.getElementById('form')


function alerta(){
 
    if (username.value === '' || email.value === '' || username.value == null || email.value == null){
        alert('Por favor ingrese Nombre y correo Valido, Gracias')
    }   
    else{
        alert(`Gracias ${username.value} por suscribirse a nuestro Newsletter`)
        window.location.href = 'https://elajman.github.io/coderhouse/paginas/promociones.html'
    }       
}
const nombre = document.getElementById('nombre')
const correo = document.getElementById('correo')
const fecha = document.getElementById('fecha')
const telefono = document.getElementById('telefono')


function contacto(){
    if (nombre.value === '' || correo.value === '' || nombre.value == null || correo.value == null){
        alert('Por favor ingrese Nombre y correo Valido, Gracias')
    }   
    else{
        alert(`Gracias ${nombre.value} pronto un asesor se pondra en contacto`)
        window.location.href = 'https://elajman.github.io/coderhouse/paginas/promociones.html'
    }       
}
function ubicacion(){
    if (nombre.value === '' || email.value === '' || nombre.value == null || email.value == null || telefono.value === ''|| fecha.value ==='' || telefono.value == null || fecha.value == null){
        alert('Por favor ingrese Nombre, correo, telefono y fecha de visita Validos, Gracias')
    }   
    else{
        alert(`Gracias ${nombre.value} el dia ${fecha.value} lo estaremos esperando, Gracias`)
        window.location.href = 'https://elajman.github.io/coderhouse/paginas/promociones.html'
    }       
}


/*Validacion con Mensaje*/
/*form.addEventListener('submit', (e) => {
    let meesage = []
    if (username.value === '' || username.value == null) {
        meesage.push('Es requerido un nombre y')
    }
    else{
        meesage.push = alert(`Gracias ${username.value} por susucribirse al Newsletter`)
       
    }
    
    if (meesage.length > 0) {
        e.preventDefault()
        errorElement.innerText = meesage.join(', ')
    }
    
})*/