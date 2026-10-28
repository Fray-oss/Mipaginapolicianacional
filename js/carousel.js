/**
 * =========================================================
 * MÓDULO: CARRUSELES
 * Lógica de carruseles interactivos con autoplay y pausa
 * =========================================================
 */

function initCarousels() {
  document.querySelectorAll('.carousel').forEach((carousel) => {
    const imagesContainer = carousel.querySelector('.carousel-images');
    if (!imagesContainer) return;

    const slides = imagesContainer.querySelectorAll('img');
    const total = slides.length;
    if (total === 0) return;

    let index = 0;
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    function showSlide(n) {
      index = (n + total) % total;
      imagesContainer.style.transform = `translateX(${-index * 100}%)`;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(index - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(index + 1);
      });
    }

    // Auto-avance cada 3 segundos
    let timer = setInterval(() => showSlide(index + 1), 3000);

    // Pausar auto-avance al pasar el mouse por encima
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', () => {
      clearInterval(timer);
      timer = setInterval(() => showSlide(index + 1), 3000);
    });

    // Iniciar en la primera imagen
    showSlide(0);
  });
}

document.addEventListener('DOMContentLoaded', initCarousels);
