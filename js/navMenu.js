const toggler = document.getElementById("navToggler");
const sidepanel = document.getElementById("mySidepanel");
const sidepanelClose = document.getElementById("sidepanelClose");

// Abre el sidepanel
toggler.addEventListener("click", () => {
  sidepanel.classList.add("open");
});

// Cierra el sidepanel
sidepanelClose.addEventListener("click", () => {
  sidepanel.classList.remove("open");
});

// Cierra al hacer clic en el fondo oscuro
sidepanel.addEventListener("click", (e) => {
  if (e.target === sidepanel) {
    sidepanel.classList.remove("open");
  }
});