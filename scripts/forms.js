// /scripts/forms.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o formulário
    const form = document.querySelector('.form-card form');

    // 2. Adiciona um "escutador" para o evento de envio
    form.addEventListener('submit', (event) => {
        // Impede que a página recarregue
        event.preventDefault();

        // 3. Pega os valores dos campos
        const nome = form.querySelector('#nome').value;
        const email = form.querySelector('#email').value;
        const mensagem = form.querySelector('#mensagem').value;

        // 4. Verifica se algum campo está vazio
        if (nome === '' || email === '' || mensagem === '') {
            // Se estiver vazio, mostra um alerta de erro
            alert('Por favor, preencha todos os campos antes de enviar.');
        } else {
            // Se estiver tudo preenchido, mostra um alerta de sucesso
            alert('Obrigado pelo contato, ' + nome + '! Sua mensagem foi recebida.');
            // Limpa o formulário
            form.reset();
        }
    });
});