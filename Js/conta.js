document.addEventListener('DOMContentLoaded', function () {
    // Recuperar dados do usuário do localStorage e preencher os campos
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        document.getElementById('nome').value = userData.firstName + ' ' + userData.lastName;
        document.getElementById('email').value = userData.email;
        document.getElementById('profissao').value = userData.profession;
        document.getElementById('idade').value = userData.age;
        document.getElementById('renda').value = userData.monthlyIncome;
      
    }
});

function alterarDados() {
    // Recuperar dados do usuário do localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Alterar senha e e-mail se fornecido
    const senha = document.getElementById('senha').value;
    const novaSenha = document.getElementById('novaSenha').value;

    // Verificar se a senha atual está correta
    if (userData && senha === userData.password) {
        if (novaSenha) {
            userData.password = novaSenha;
        }

        
        const novoEmail = document.getElementById('email').value;
        if (novoEmail) {
            userData.email = novoEmail;
        }

        // Armazenar os dados atualizados no localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Alterações salvas com sucesso!');
    } else {
        alert('Senha atual incorreta. Tente novamente.');
    }
}