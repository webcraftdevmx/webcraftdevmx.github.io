const Objetos = document.querySelectorAll('.obj');
const Portones = document.getElementById('Portones');
const Puertas = document.getElementById('Puertas');
const Protecciones = document.getElementById('Protecciones');
const Botones = document.querySelectorAll('.but');

Portones.addEventListener('click', () => {

    Botones.forEach((element) => {
        if (element.classList.contains('Active') && element.id != 'Portones'){
            element.classList.remove('Active');
        }
    } )

    Objetos.forEach((element) => {
        if (element.classList.contains('Oculta')){
            element.classList.remove('Oculta');
        }
    } )

    if (Portones.classList.contains('Active')){
        Portones.classList.remove('Active');
    
        /*Objetos.forEach((element) => {
            //console.log(element);
            if (element.classList.contains('Oculta')){
                element.classList.remove('Oculta');
                //console.log(element);
            }
        } )*/

    }
    else
    {
        Portones.classList.add('Active');
        Objetos.forEach((element) => {
            //console.log(element);
            if (!element.classList.contains('portones')){
                element.classList.add('Oculta');
                //console.log(element);
            }
        } )
    }
})

Puertas.addEventListener('click', () => {

    Botones.forEach((element) => {
        if (element.classList.contains('Active') && element.id != 'Puertas'){
            element.classList.remove('Active');
        }
    } )

    Objetos.forEach((element) => {
        if (element.classList.contains('Oculta')){
            element.classList.remove('Oculta');
        }
    } )

    if (Puertas.classList.contains('Active')){
        Puertas.classList.remove('Active');
    
        /*Objetos.forEach((element) => {
            //console.log(element);
            if (element.classList.contains('Oculta')){
                element.classList.remove('Oculta');
                //console.log(element);
            }
        } )*/

    }
    else
    {
        Puertas.classList.add('Active');
        Objetos.forEach((element) => {
            //console.log(element);
            if (!element.classList.contains('puertas')){
                element.classList.add('Oculta');
                //console.log(element);
            }
        } )
    }
})

Protecciones.addEventListener('click', () => {
    Botones.forEach((element) => {
        if (element.classList.contains('Active') && element.id != 'Protecciones'){
            element.classList.remove('Active');
        }
    } )

    Objetos.forEach((element) => {
        if (element.classList.contains('Oculta')){
            element.classList.remove('Oculta');
        }
    } )

    if (Protecciones.classList.contains('Active')){
        Protecciones.classList.remove('Active');
    
        /*Objetos.forEach((element) => {
            //console.log(element);
            if (element.classList.contains('Oculta')){
                element.classList.remove('Oculta');
                //console.log(element);
            }
        } )*/

    }
    else
    {
        Protecciones.classList.add('Active');
        Objetos.forEach((element) => {
            //console.log(element);
            if (!element.classList.contains('protecciones')){
                element.classList.add('Oculta');
                //console.log(element);
            }
        } )
    }
})

