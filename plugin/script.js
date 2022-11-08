const name = document.getElementById('username')
const email = document.getElementById('email')
const form = document.getElementById('form')


function alerta(){
 
    if (username.value === '' || email.value === '' || username.value == null || email.value == null){
        alert('Por favor ingrese Nombre y correo Valido, Gracias')
    }   
    else{
        alert(`Gracias ${username.value} por susucribirse a nuestro Newsletter`)
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