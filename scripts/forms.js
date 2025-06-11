
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-card form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = form.querySelector('#nome').value;
        const email = form.querySelector('#email').value;
        const mensagem = form.querySelector('#mensagem').value;

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos antes de enviar.');
        } else {
            alert('Obrigado pelo contato, ' + nome + '! Sua mensagem foi recebida.');
            form.reset();
        }
    });
});