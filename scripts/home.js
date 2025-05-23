document.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll('.galeria-container img');

  imagens.forEach(img => {
    img.addEventListener('mouseenter', () => {
      imagens.forEach(i => {
        if (i !== img) {
          i.classList.add('dimmed');
        }
      });
      img.classList.add('hovered');
    });

    img.addEventListener('mouseleave', () => {
      imagens.forEach(i => {
        i.classList.remove('dimmed', 'hovered');
      });
    });
  });
});
