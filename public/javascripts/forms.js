// Simula el envío de los formularios (no hay backend todavía)
var form = document.querySelector('.form');
var message = document.querySelector('.form-message');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    message.textContent = form.dataset.message;
    message.hidden = false;
    form.reset();
  });
}