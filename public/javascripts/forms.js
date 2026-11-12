// Simula el envío del formulario (todavía no hay backend)
var formulario = document.querySelector('form');
var mensaje = document.querySelector('.message');

if (formulario) {
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    mensaje.hidden = false;
    formulario.reset();
  });
}