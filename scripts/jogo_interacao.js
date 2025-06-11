
document.addEventListener('DOMContentLoaded', () => {
  const botoesJogar = document.querySelectorAll('.botao-neon');

  botoesJogar.forEach(botao => {
    if (botao.querySelector('span').textContent.trim() === 'Jogar!') {
      botao.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        alert('Lançamento em breve! Fique de olho nas novidades.');
      });
    }
  });
});