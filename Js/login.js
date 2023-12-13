document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('button[type="submit"]');
    loginButton.addEventListener('click', function () {
        const email = document.getElementById('typeEmailX').value;
        const password = document.getElementById('typePasswordX').value;

        // Verifica se os campos estão preenchidos
        if (!email || !password) {
            alert('Por favor, preencha todos os campos antes de fazer login.');
            return; 
        }

        
        const storedUser = JSON.parse(localStorage.getItem('userData'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert('Login bem-sucedido! Redirecionando...');
            window.location.href = 'login.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });
});
