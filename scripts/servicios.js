$(document).ready(function () {
    $('#formmayoristas, #formrestaurantes, #formcatering, #izqentrantes, #izqprincipales, #izqpostres').hide();


    var posEntrantes = 0; // posicion inicial entrantes
    var posPrincipales = 0; // posicion inicial principales
    var posPostres = 0; // posicion inicial postres

    $('#togglemayoristas').on('click', function () { // click boton mayoristas
        $('#formmayoristas').slideToggle(300); // abre/cierra el form
    });
    $('#togglerestaurantes').on('click', function () { // click boton restaurantes
        $('#formrestaurantes').slideToggle(300); // abre/cierra el form
    });
    $('#togglecatering').on('click', function () { // click boton catering
        $('#formcatering').slideToggle(300); // abre/cierra el form
    });






    $('#derentrantes').on('click', function () { // flecha dcha entrantes
        var anchoTotal = $('#carruselentrantes')[0].scrollWidth; // ancho total de todos los items
        var anchoVisible = $('#carruselentrantes').parent().width(); // ancho del contenedor visible
        var maximo = anchoTotal - anchoVisible; // lo maximo q se puede mover
        if (Math.abs(posEntrantes) < maximo) { // si todavia quedan items por ver
            posEntrantes -= 270; // mueve 270px pa la izq
            $('#carruselentrantes').css('transform', 'translateX(' + posEntrantes + 'px)'); // aplica
            $('#izqentrantes').show(0); // muestra flecha izq
        }
    });
    $('#izqentrantes').on('click', function () { // flecha izq entrantes
        if (posEntrantes < 0) { // si no estamos al principio
            posEntrantes += 270; // mueve 270px pa la dcha
            $('#carruselentrantes').css('transform', 'translateX(' + posEntrantes + 'px)'); // aplica
            if (posEntrantes === 0) $('#izqentrantes').hide(0); // si volvimos al principio oculta flecha
        }
    });









    $('#derprincipales').on('click', function () { // flecha dcha principales
        var anchoTotal = $('#carruselprincipales')[0].scrollWidth; // ancho total
        var anchoVisible = $('#carruselprincipales').parent().width(); // ancho visible
        var maximo = anchoTotal - anchoVisible; // maximo desplazamiento
        if (Math.abs(posPrincipales) < maximo) { // si quedan items
            posPrincipales -= 270; // mueve 270px izq
            $('#carruselprincipales').css('transform', 'translateX(' + posPrincipales + 'px)'); // aplica
            $('#izqprincipales').show(0); // muestra flecha izq
        }
    });
    $('#izqprincipales').on('click', function () { // flecha izq principales
        if (posPrincipales < 0) { // si no estamos al principio
            posPrincipales += 270; // mueve 270px dcha
            $('#carruselprincipales').css('transform', 'translateX(' + posPrincipales + 'px)'); // aplica
            if (posPrincipales === 0) $('#izqprincipales').hide(0); // oculta flecha si volvimos al principio
        }
    });








    $('#derpostres').on('click', function () { // flecha dcha postres
        var anchoTotal = $('#carruselpostres')[0].scrollWidth; // ancho total
        var anchoVisible = $('#carruselpostres').parent().width(); // ancho visible
        var maximo = anchoTotal - anchoVisible; // maximo desplazamiento
        if (Math.abs(posPostres) < maximo) { // si quedan items
            posPostres -= 270; // mueve 270px izq
            $('#carruselpostres').css('transform', 'translateX(' + posPostres + 'px)'); // aplica
            $('#izqpostres').show(0); // muestra flecha izq
        }
    });
    $('#izqpostres').on('click', function () { // flecha izq postres
        if (posPostres < 0) { // si no estamos al principio
            posPostres += 270; // mueve 270px dcha
            $('#carruselpostres').css('transform', 'translateX(' + posPostres + 'px)'); // aplica
            if (posPostres === 0) $('#izqpostres').hide(0); // oculta flecha si volvimos al principio
        }
    });
});