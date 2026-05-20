var modal = document.getElementById("miModal");
var abrir = document.getElementById("abrirPDF");
var cerrar = document.querySelector(".close");

// Abrir modal
abrir.onclick = function() {
  modal.style.display = "block";
}

// Cerrar modal
cerrar.onclick = function() {
  modal.style.display = "none";
}

// Cerrar haciendo clic fuera
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
