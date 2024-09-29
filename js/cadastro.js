document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário para validar os dados

        const nome = document.getElementById('nome').value.trim();
        const sobrenome = document.getElementById('sobrenome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

        // Validação dos campos
        if (!nome || !sobrenome || !email || !senha || !confirmarSenha) {
            messageElement.textContent = 'Por favor, preencha todos os campos.';
            messageElement.style.color = 'red';
            return;
        }

        if (senha !== confirmarSenha) {
            messageElement.textContent = 'As senhas não coincidem.';
            messageElement.style.color = 'red';
            return;
        }

        // Se tudo estiver correto, exibe uma mensagem de sucesso e redireciona
        messageElement.textContent = 'Cadastro realizado com sucesso!';
        messageElement.style.color = 'green';

        // Após um pequeno atraso, redireciona para a tela inicial
        setTimeout(() => {
            window.location.href = 'inicial.html'; // Redireciona para a página inicial
        }, 2000); // 2000ms = 2 segundos
    });
});
