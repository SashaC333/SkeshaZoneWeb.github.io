// INICIALIZAR EMAILJS
emailjs.init("TU_PUBLIC_KEY");

const contact_form =
document.getElementById("contact_form");

const contact_message =
document.getElementById("contact_message");

const contact_button =
document.getElementById("contact_button");

contact_form.addEventListener("submit", function(e){

    e.preventDefault();

    contact_button.disabled = true;
    contact_button.innerText = "Enviando...";

    const templateParams = {

        correo:
        document.getElementById("contact_correo").value,

        usuario:
        document.getElementById("contact_usuario").value,

        gmail:
        document.getElementById("contact_gmail").value,

        peticion:
        document.getElementById("contact_peticion").value,

        servicio:
        document.getElementById("contact_servicio").value,

        descripcion:
        document.getElementById("contact_descripcion").value

    };

    emailjs.send(
        "TU_SERVICE_ID",
        "TU_TEMPLATE_ID",
        templateParams
    )
    .then(function(){

        contact_message.innerText =
        "¡Mensaje enviado correctamente!";

        contact_message.className =
        "contact_message contact_success";

        contact_form.reset();

    })
    .catch(function(error){

        contact_message.innerText =
        "Ocurrió un error al enviar.";

        contact_message.className =
        "contact_message contact_error";

        console.log(error);

    })
    .finally(function(){

        contact_button.disabled = false;
        contact_button.innerText = "Enviar";

    });

});