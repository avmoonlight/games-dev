// scripts/jogo_interacao.js

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os botões com a classe .botao-neon que tenham o texto "Jogar!"
  const botoesJogar = document.querySelectorAll('.botao-neon');

  botoesJogar.forEach(botao => {
    // Adiciona um evento de clique a cada botão "Jogar!"
    if (botao.querySelector('span').textContent.trim() === 'Jogar!') {
      botao.addEventListener('click', (event) => {
        // Impede que o link padrão (#) seja seguido
        event.preventDefault(); 
        
        // Exibe um alerta simples e amigável
        alert('Lançamento em breve! Fique de olho nas novidades.');
      });
    }
  });
});