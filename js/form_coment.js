const showFormBtn = document.getElementById("showFormBtn");

const comentForm = document.getElementById("comentForm");

const comentBtnContainer = document.getElementById("comentBtnContainer");

const comentContainer = document.querySelector(".form_coment_container");

/* MOSTRAR FORMULARIO */
showFormBtn.addEventListener("click", () => {

  comentForm.style.display = "block";

  comentBtnContainer.style.display = "none";
});

/* ENVIAR FORMULARIO */
comentForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const nombre = document.getElementById("nombre").value;

  const puntuacion = document.getElementById("puntuacion").value;

  const comentario = document.getElementById("comentario").value;

  /* CREAR NUEVO COMENTARIO */
  const nuevoComentario = document.createElement("div");

  nuevoComentario.classList.add("form_coment_card");

  nuevoComentario.innerHTML = `
  
    <div class="form_coment_header">

      <h3 class="form_coment_user">${nombre}</h3>

      <div class="form_coment_score">
        ${puntuacion}
      </div>

    </div>

    <p class="form_coment_text">
      ${comentario}
    </p>
  `;

  /* AGREGAR COMENTARIO */
  comentContainer.prepend(nuevoComentario);

  /* LIMPIAR FORMULARIO */
  comentForm.reset();

  /* VOLVER A FASE 1 */
  comentForm.style.display = "none";

  comentBtnContainer.style.display = "block";
});