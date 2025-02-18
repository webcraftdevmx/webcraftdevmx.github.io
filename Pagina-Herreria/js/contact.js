const nombre = document.getElementById("Nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("Mensaje");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    /* emailjs
      .send("service_6i9j3yn", "template_gtbqyea", {
        from_name: nombre.value,
        from_email: email.value,
        to_name: "Daniel",
        message: mensaje.value,
      })
      .then(
        function (response) {
          console.log("Correo enviado con éxito:", response);
          alert("¡Tu mensaje ha sido enviado!");
        },
        function (error) {
          console.error("Error al enviar el correo:", error);
          alert("Ocurrió un error. Intenta nuevamente.");
        }
      );*/

    alert("¡Tu mensaje ha sido enviado!");
    cleanInputs();
  });

function cleanInputs() {
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
}
