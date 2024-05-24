
/*
* Funcion para generar titulos Animados
*/
function animateTitle(Title = "GYM Title", delay = 300) {
    let counter = 0;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if (counter == false)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        newtitle = (counter == 0) ? Title : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)
}

/*
* Funcion para recuperar el titulo de una pagina
 */
function obtenerTitulo() {
    return document.title;
}


/*
* Funcion para ejecutar de manera automatica al cargar
*/
(function () {
    animateTitle( obtenerTitulo(),  150 );
})();