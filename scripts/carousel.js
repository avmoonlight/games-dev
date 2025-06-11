
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(-' + currentIndex * slideWidth + 'px)';
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 3) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });


  setInterval(() => {
    if (currentIndex < slides.length - 3) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }, 3000); 


  slides.forEach(slide => {
    const img = slide.querySelector('img');
    img.addEventListener('mouseover', () => {
      img.classList.add('hovered');
      slides.forEach(otherSlide => {
        const otherImg = otherSlide.querySelector('img');
        if (otherImg !== img) {
          otherImg.classList.add('dimmed');
        }
      });
    });

    img.addEventListener('mouseout', () => {
      img.classList.remove('hovered');
      slides.forEach(slide => {
        const otherImg = slide.querySelector('img');
        otherImg.classList.remove('dimmed');
      });
    });
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});
