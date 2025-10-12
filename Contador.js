// Elementos del HTML
const boton =
document.getElementById('botonIncrementar');
const spanContador = document.getElementById('contador');
let clics = 0; // Variable para almacenar el conteo
// manejador de evento para el evento 'click'
boton.addEventListener('click', function() {
 // Incrementamos la variable
 clics++;

 // nuevo valor
 spanContador.textContent = clics;

 // en la consola para depuración
 console.log(`¡Se ha hecho clic! El contador es:
${clics}`);
});