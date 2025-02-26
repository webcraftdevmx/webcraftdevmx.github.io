const nombre = document.getElementById("Nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("Mensaje");
const mensajeForm = document.getElementById("mensajeForm");
const K_MENSAJE_ENV = "¡Tu mensaje ha sido enviado!";
const K_MENSAJE_ERR = "¡Hubo un error al enviar el mensaje!";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (isValidEmail(email.value)) {
      emailjs
        .send(API_KEY_MAIL, API_KEY_TEMPLATE, {
          from_name: nombre.value,
          from_email: email.value,
          to_name: "Daniel",
          message: mensaje.value,
        })
        .then(
          function (response) {
            if (response.status === 200)
              createMessage("#25dac5", "success", K_MENSAJE_ENV);
          },
          function (error) {
            console.error("Error al enviar el correo:", error);
            createMessage("#da3125", "error", K_MENSAJE_ERR);
          }
        );
      cleanInputs();
    } else {
      createMessage(
        "#da3125",
        "error",
        `El correo: ${email.value} no es valido!`
      );
    }
  });

function cleanInputs() {
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
}

function createMessage(color, evento, mensaje) {
  mensajeForm.style.backgroundColor = color;
  mensajeForm.classList.remove("Ocultar");
  mensajeForm.classList.add(evento);
  mensajeForm.textContent = mensaje;
  setTimeout(() => {
    mensajeForm.classList.add("Ocultar");
    mensajeForm.classList.remove(evento);
  }, 3000);
}

function isValidEmail(email) {
  return emailRegex.test(email);
}
