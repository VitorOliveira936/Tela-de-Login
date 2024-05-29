document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = 'Ocultar';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = 'Mostrar';
    }
  });