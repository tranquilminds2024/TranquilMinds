document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário para validar os dados

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validação dos campos
        if (!email || !password) {
            messageElement.textContent = 'Por favor, preencha todos os campos.';
            messageElement.style.color = 'red';
            return;
        }

        // Aqui você pode adicionar uma validação adicional para o formato do email, se necessário

        // Verifica se as credenciais estão corretas
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            // Se tudo estiver correto, exibe uma mensagem de sucesso e redireciona
            messageElement.textContent = 'Login bem-sucedido!';
            messageElement.style.color = 'green';

            // Após um pequeno atraso, redireciona para a página principal
            setTimeout(() => {
                window.location.href = 'principal.html'; // Redireciona para a página principal
            }, 2000); // 2000ms = 2 segundos
        } else {
            messageElement.textContent = 'Email ou senha incorretos.';
            messageElement.style.color = 'red';
        }
    });
});
