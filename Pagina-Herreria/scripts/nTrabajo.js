const Objetos = document.querySelectorAll('.obj');
const Botones = document.querySelectorAll('.but');

const Act = 'Active';
const Ocul = 'Oculta';

function RemueveOculta(){
    Objetos.forEach((element) => {
        if (element.classList.contains(Ocul)){
            element.classList.remove(Ocul);
        }
    } )
}

function EventoClick(objeto){

    Botones.forEach((element) => {
        if (element.classList.contains(Act) && element.id != objeto.id){
            element.classList.remove(Act);
        }
    } )
    
    RemueveOculta();

    let Elementos = document.getElementById(objeto.id);

    if (Elementos.classList.contains(Act)){
        Elementos.classList.remove(Act);
        RemueveOculta();
    }
    else
    {
        Elementos.classList.add(Act);
        Objetos.forEach((element) => {
            let valorminusculas = "";
            valorminusculas = objeto.id;
            if (!element.classList.contains(valorminusculas.toLowerCase())){
                element.classList.add(Ocul);
            }
        } )
    }
}