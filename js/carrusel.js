const slideIndexes = {
  carrusel1: 1,
  carrusel2: 1
};

showSlides("carrusel1");
showSlides("carrusel2");

function plusSlides(n, carrusel) {
  slideIndexes[carrusel] += n;
  showSlides(carrusel);
}

function showSlides(carrusel) {

  let container = document.querySelector("." + carrusel);

  let slides = container.getElementsByClassName("mySlides");

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