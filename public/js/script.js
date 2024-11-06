document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function (event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (!nome || !email) {
      alert('Por favor, preencha todos os campos.');
      event.preventDefault();
    }
  });
});
