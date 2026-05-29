// =========================
// ELEMENTOS
// =========================

const contact_form = document.getElementById("contact_form");
const contact_message = document.getElementById("contact_message");
const contact_button = document.getElementById("contact_button");

// =========================
// ENVIAR FORMULARIO
// =========================

contact_form.addEventListener("submit", function (e) {
  e.preventDefault();

  // VALIDACIÓN BÁSICA
  if (!contact_form.checkValidity()) return;

  // BOTÓN EN ESTADO LOADING
  contact_button.disabled = true;
  contact_button.innerText = "Enviando...";

  // DATOS PARA EMAILJS
  const templateParams = {
    nombre: document.getElementById("contact_nombre").value,
    usuario: document.getElementById("contact_usuario").value,
    gmail: document.getElementById("contact_gmail").value,
    peticion: document.getElementById("contact_peticion").value,
    servicio: document.getElementById("contact_servicio").value,
    descripcion: document.getElementById("contact_descripcion").value
  };

  // ENVIAR EMAIL
  emailjs.send(
    "service_pzelt9u",
    "template_oq14tde",
    templateParams
  )
  .then(function (response) {

    contact_message.innerText = "¡Mensaje enviado correctamente!";
    contact_message.className = "contact_message contact_success";

    contact_form.reset();

    console.log("SUCCESS:", response);

  })
  .catch(function (error) {

    contact_message.innerText = "Ocurrió un error al enviar.";
    contact_message.className = "contact_message contact_error";

    console.log("ERROR:", error);

  })
  .finally(function () {

    contact_button.disabled = false;
    contact_button.innerText = "Enviar";

  });
});