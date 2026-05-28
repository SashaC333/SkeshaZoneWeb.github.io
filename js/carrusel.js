const slideIndexes = {
  carrusel1: 1,
  carrusel2: 1,
  carrusel3: 1
};

// inicializar todos
showSlides("carrusel1");
showSlides("carrusel2");
showSlides("carrusel3");

function plusSlides(n, carrusel) {
  slideIndexes[carrusel] += n;
  showSlides(carrusel);
}

function showSlides(carrusel) {

  let container = document.querySelector("." + carrusel);

  if (!container) return; // 👈 evita errores si el nombre está mal

  let slides = container.getElementsByClassName("mySlides");

  if (slides.length === 0) return;

  if (slideIndexes[carrusel] > slides.length) {
    slideIndexes[carrusel] = 1;
  }

  if (slideIndexes[carrusel] < 1) {
    slideIndexes[carrusel] = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexes[carrusel] - 1].style.display = "block";
}