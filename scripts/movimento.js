window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.animate-scroll-effect');

  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const progress = 1 - rect.top / windowHeight;
      const translateY = Math.max(100 - progress * 100, 0);
      const opacity = Math.min(progress * 1.2, 1);

      element.style.transform = `translateY(${translateY}px)`;
      element.style.opacity = opacity;
    }
  });
});
