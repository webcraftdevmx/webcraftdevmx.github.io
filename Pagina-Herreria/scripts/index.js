//Declaracion de botones
const menu = document.querySelector("#Menu");
const btnAbrir = document.querySelector("#btnAbrir");
const btnCerrar = document.querySelector("#btnCerrar");
//Eventos para abrir y cerrar
btnAbrir.addEventListener("click", ()=>{
    console.log('enter a abrir');
    menu.classList.add("visible");
});

btnCerrar.addEventListener("click", () =>{
    console.log('enter a cerrar');
    menu.classList.remove("visible");
});