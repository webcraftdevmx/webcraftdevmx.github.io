//Declaracion de botones
const menu = document.querySelector("#Menu");
const btnAbrir = document.querySelector("#btnAbrir");
const btnCerrar = document.querySelector("#btnCerrar");
//Eventos para abrir y cerrar
btnAbrir.addEventListener("click", () => {
  menu.classList.add("visible");
});

btnCerrar.addEventListener("click", () => {
  menu.classList.remove("visible");
});