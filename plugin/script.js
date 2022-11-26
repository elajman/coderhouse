const name = document.getElementById('username');
const form = document.getElementById('form');

    const inputmail = document.querySelector('#email');
    const inputname = document.querySelector('#username');
    const fechaServicio = document.getElementById('fecha')
   

    function veryfyEmail(){

    if (!inputmail.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi) || inputname.value === '' || inputname.value == null) {
        alert(`Por favor complete Nombre y Correo`);
        return false;

      }else {
        alert(`Gracias ${inputname.value} por suscribirse a nuestro Newsletter`);
        window.location.href = 'https://elajman.github.io/coderhouse/paginas/promociones.html'
        return true;
      }
    }
    function veryfyServicio(){

        if (!inputmail.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi) || inputname.value === '' || inputname.value == null || fecha.value === ''|| fecha.value == null) {
            alert(`Por favor complete Nombre, Correo y fecha de Service`);
            return false;
    
          }else {
            alert(`Gracias ${inputname.value} el dia ${fecha.value} lo estaremos esperando para realizar servicio a su reloj, Gracias`)
            window.location.href = 'https://elajman.github.io/coderhouse/paginas/promociones.html'
            return true;
          }
    }
    function veryContacto(){

        if (!inputmail.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi) || inputname.value === '' || inputname.value == null) {
            alert(`Por favor complete Nombre y Correo`);
            return false;
    
          }else {
            alert(`Gracias ${inputname.value} Nos pondremos en contacto a la brevedad`);
            window.location.href = 'https://elajman.github.io/coderhouse/paginas/promociones.html'
            return true;
          }
        }









