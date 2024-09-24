document.getElementById('btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email').value;
    const nomeUsuario = emailInput.split('@')[0]; // Pega a parte antes do '@'
    alert("Bem-vindo(a), " + nomeUsuario + "!");

    // Redireciona para a página desejada após um pequeno delay
    setTimeout(function() {
        window.location.href = 'principal.html'; // Altere para a página que deseja redirecionar
    }, 1000); // 1 segundo de delay
});
