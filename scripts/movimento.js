window.addEventListener('scroll', () => {
    const element = document.querySelector('.animate-scroll-effect');
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Verifica se o elemento está visível na tela
    if (rect.top < windowHeight && rect.bottom > 0) {
      const progress = 1 - rect.top / windowHeight; // 0 a 1 conforme entra
      const translateY = Math.max(100 - progress * 100, 0); // move de 100px até 0
      const opacity = Math.min(progress * 1.2, 1); // aumenta opacidade até 1

      element.style.transform = `translateY(${translateY}px)`;
      element.style.opacity = opacity;
    }
  });

