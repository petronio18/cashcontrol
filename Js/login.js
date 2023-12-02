document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('button[type="submit"]');
    loginButton.addEventListener('click', function () {
        const email = document.getElementById('typeEmailX').value;
        const password = document.getElementById('typePasswordX').value;

        // Simulando dados do usuário armazenados no localStorage
        const storedUser = JSON.parse(localStorage.getItem('userData'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert('Login bem-sucedido! Redirecionando...');
             window.location.href = 'index.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });
});