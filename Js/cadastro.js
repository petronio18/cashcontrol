document.addEventListener('DOMContentLoaded', function () {
    const cadastroButton = document.querySelector('button[data-mdb-ripple-color="dark"]');
    
    cadastroButton.addEventListener('click', function () {
        const firstName = document.getElementById('form3Examplev2').value;
        const lastName = document.getElementById('form3Examplev3').value;
        const email = document.getElementById('form3Examplea9').value;
        const profession = document.getElementById('form3Examplea12').value;
        const age = document.getElementById('form3Examplev5').value;
        const monthlyIncome = document.getElementById('form3Examplev11').value;
        const password = document.getElementById('form3ExamplePassword').value;

        // Verifica se os campos obrigatórios estão preenchidos
        if (!firstName || !lastName || !email || !age || !monthlyIncome || !password) {
            alert('Por favor, preencha todos os campos obrigatórios antes de cadastrar.');
            return; // Impede a execução do código abaixo se os campos obrigatórios não estiverem preenchidos
        }

        // Simular armazenamento de informações do usuário no localStorage 
        const userData = {
            firstName,
            lastName,
            email,
            profession,
            age,
            monthlyIncome,
            password,
        };

        // Armazenar informações do usuário no localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Cadastro realizado com sucesso! Redirecionando...');
        window.location.href = 'login.html';
    });
});
