$(document).ready(function () {
    $(".menudesplegable, #izqimgs, #izqreseñas").hide();
    $('#faq1, #faq2, #faq3, #faq1t, #faq2t, #faq3t, #faq1m, #faq2m, #faq3m').hide();
    
    $('#vision').addClass('vision')
$('#valores').addClass('valores')
$('.textomvv2').hide()
$('.textomvv3').hide()

$('#vision2').addClass('vision')
$('#valores2').addClass('valores')


    $('#desplegable').on('click', function () {
        $('.menudesplegable').slideToggle(400);
    });

    var totalImgs = $('#carruselimgs .cartaitem').length; // cuantos items hay en el carrusel
    var posImgs = 0; // posicion inicial
    var indiceImgs = 0; // en q imagen estamos

    var totalReseñas = $('#carruselreseñas .card-reseña').length; // cuantas reseñas hay 
    var posReseñas = 0; // posicion inicial reseñas
    var indiceReseñas = 0; // en q reseña estamos

    $('#derimgs').on('click', function () { // flecha dcha imagenes
        if (indiceImgs < totalImgs - 1) { // q no sea la ultima
            indiceImgs++; // siguiente imagen
            posImgs -= 87; // mueve 87vw pa la izq
            $('#carruselimgs').css('transform', 'translateX(' + posImgs + 'vw)'); // aplica el movimiento
            $('#izqimgs').show(); // muestra flecha izq porq ya no estamos al principio
        }
    });

    $('#izqimgs').on('click', function () { // flecha izq imagenes
        if (indiceImgs > 0) { // q no sea la primera
            indiceImgs--; // imagen anterior
            posImgs += 87; // mueve 87vw pa la dcha
            $('#carruselimgs').css('transform', 'translateX(' + posImgs + 'vw)'); // aplica
            if (indiceImgs === 0) $('#izqimgs').hide(); // si volvemos al principio oculta la flecha
        }
    });

    $('#derreseñas').on('click', function () { // flecha dcha reseñas
        if (indiceReseñas < totalReseñas - 1) { // q no sea la ultima
            indiceReseñas++; // siguiente reseña
            posReseñas -= 270; // mueve 270px pa la izq
            $('#carruselreseñas').css('transform', 'translateX(' + posReseñas + 'px)'); // aplica
            $('#izqreseñas').show(); // muestra flecha izq
        }
    });

    $('#izqreseñas').on('click', function () { // flecha izq reseñas
        if (indiceReseñas > 0) { // q no sea la primera
            indiceReseñas--; // reseña anterior
            posReseñas += 270; // mueve 270px pa la dcha
            $('#carruselreseñas').css('transform', 'translateX(' + posReseñas + 'px)'); // aplica
            if (indiceReseñas === 0) $('#izqreseñas').hide(); // si volvemos al ppio oculta flecha
        }
    });

    $('.estrella1').on('click', function () { // click estrella 1
        $(this).addClass('girando'); // animacion giro
        setTimeout(function () { $('.estrella1').removeClass('girando'); }, 400); // quita anim despues de 400ms
        $('.estrella1').css('background-image', 'url(../images/estrellas/rellena.svg)'); // rellena la 1
        $('.estrella2, .estrella3, .estrella4, .estrella5').css('background-image', 'url(../images/estrellas/hueca.svg)'); // las demas vacias
    });
    $('.estrella2').on('click', function () { // click estrella 2
        $(this).addClass('girando'); // anim giro
        setTimeout(function () { $('.estrella2').removeClass('girando'); }, 400); // quita anim
        $('.estrella1, .estrella2').css('background-image', 'url(../images/estrellas/rellena.svg)'); // rellena 1 y 2
        $('.estrella3, .estrella4, .estrella5').css('background-image', 'url(../images/estrellas/hueca.svg)'); // resto vacias
    });
    $('.estrella3').on('click', function () { // click estrella 3
        $(this).addClass('girando'); // anim giro
        setTimeout(function () { $('.estrella3').removeClass('girando'); }, 400); // quita anim
        $('.estrella1, .estrella2, .estrella3').css('background-image', 'url(../images/estrellas/rellena.svg)'); // rellena 1 2 y 3
        $('.estrella4, .estrella5').css('background-image', 'url(../images/estrellas/hueca.svg)'); // resto vacias
    });
    $('.estrella4').on('click', function () { // click estrella 4
        $(this).addClass('girando'); // anim giro
        setTimeout(function () { $('.estrella4').removeClass('girando'); }, 400); // quita anim
        $('.estrella1, .estrella2, .estrella3, .estrella4').css('background-image', 'url(../images/estrellas/rellena.svg)'); // rellena 1 2 3 y 4
        $('.estrella5').css('background-image', 'url(../images/estrellas/hueca.svg)'); // ultima vacia
    });
    $('.estrella5').on('click', function () { // click estrella 5
        $(this).addClass('girando'); // anim giro
        setTimeout(function () { $('.estrella5').removeClass('girando'); }, 400); // quita anim
        $('.estrella1, .estrella2, .estrella3, .estrella4, .estrella5').css('background-image', 'url(../images/estrellas/rellena.svg)'); // rellena todas
    });

    $('form').on('submit', function (e) { // al enviar el form
        e.preventDefault(); // pa q no recargue la pag
        $('#comentario').val(''); // borra lo escrito
        $('.estrella1, .estrella2, .estrella3, .estrella4, .estrella5').css('background-image', 'url(../images/estrellas/hueca.svg)'); // resetea estrellas
        $('.mensajeenvio').fadeIn(300); // aparece el msj de gracias
        setTimeout(function () {
            $('.mensajeenvio').fadeOut(300); // desaparece a los 3seg
        }, 3000);
    });


    $('#togglefaq1').on('click', function () { $('#faq1').slideToggle(300); }); // abre/cierra preg 1
    $('#togglefaq2').on('click', function () { $('#faq2').slideToggle(300); }); // preg 2
    $('#togglefaq3').on('click', function () { $('#faq3').slideToggle(300); }); // preg 3
    $('#togglefaq1t').on('click', function () { $('#faq1t').slideToggle(300); }); // tablet preg 1
    $('#togglefaq2t').on('click', function () { $('#faq2t').slideToggle(300); }); // tablet preg 2
    $('#togglefaq3t').on('click', function () { $('#faq3t').slideToggle(300); }); // tablet preg 3
    $('#togglefaq1m').on('click', function () { $('#faq1m').slideToggle(300); }); // movil preg 1
    $('#togglefaq2m').on('click', function () { $('#faq2m').slideToggle(300); }); // movil preg 2
    $('#togglefaq3m').on('click', function () { $('#faq3m').slideToggle(300); }); // movil preg 3


    $('#mision').click(function(){
        $('#vision').addClass('vision')
        $('#valores').addClass('valores')
        $('#mision').removeClass('mision')
        $('.textomvv1').fadeIn(200)
        $('.textomvv2').fadeOut(200)
        $('.textomvv3').fadeOut(200)
        
    })


    $('#vision').click(function(){
        $('#mision').addClass('mision')
        $('#valores').addClass('valores')
        $('#vision').removeClass('vision')
        $('.textomvv2').fadeIn(200)
        $('.textomvv1').fadeOut(200)
        $('.textomvv3').fadeOut(200)
        
    })

    $('#valores').click(function(){
        $('#mision').addClass('mision')
        $('#vision').addClass('vision')
        $('#valores').removeClass('valores')
        $('.textomvv3').fadeIn(200)
        $('.textomvv1').fadeOut(200)
        $('.textomvv2').fadeOut(200)
        
    })
    
    $('#mision').click(function(){
    $('#vision').addClass('vision')
    $('#valores').addClass('valores')
    $('#mision').removeClass('mision')
    $('.textomvv1').fadeIn(200)
    $('.textomvv2').fadeOut(200)
    $('.textomvv3').fadeOut(200)
})

$('#vision').click(function(){
    $('#mision').addClass('mision')
    $('#valores').addClass('valores')
    $('#vision').removeClass('vision')
    $('.textomvv2').fadeIn(200)
    $('.textomvv1').fadeOut(200)
    $('.textomvv3').fadeOut(200)
})

$('#valores').click(function(){
    $('#mision').addClass('mision')
    $('#vision').addClass('vision')
    $('#valores').removeClass('valores')
    $('.textomvv3').fadeIn(200)
    $('.textomvv1').fadeOut(200)
    $('.textomvv2').fadeOut(200)
})

$('#mision2').click(function(){
    $('#vision2').addClass('vision')
    $('#valores2').addClass('valores')
    $('#mision2').removeClass('mision')
    $('.textomvv1').fadeIn(200)
    $('.textomvv2').fadeOut(200)
    $('.textomvv3').fadeOut(200)
})

$('#vision2').click(function(){
    $('#mision2').addClass('mision')
    $('#valores2').addClass('valores')
    $('#vision2').removeClass('vision')
    $('.textomvv2').fadeIn(200)
    $('.textomvv1').fadeOut(200)
    $('.textomvv3').fadeOut(200)
})

$('#valores2').click(function(){
    $('#mision2').addClass('mision')
    $('#vision2').addClass('vision')
    $('#valores2').removeClass('valores')
    $('.textomvv3').fadeIn(200)
    $('.textomvv1').fadeOut(200)
    $('.textomvv2').fadeOut(200)
})

$('#mision3').click(function(){
    $('#vision3').addClass('vision')
    $('#valores3').addClass('valores')
    $('#mision3').removeClass('mision')
    $('.textomvv1').fadeIn(200)
    $('.textomvv2').fadeOut(200)
    $('.textomvv3').fadeOut(200)
})

$('#vision3').click(function(){
    $('#mision3').addClass('mision')
    $('#valores3').addClass('valores')
    $('#vision3').removeClass('vision')
    $('.textomvv2').fadeIn(200)
    $('.textomvv1').fadeOut(200)
    $('.textomvv3').fadeOut(200)
})

$('#valores3').click(function(){
    $('#mision3').addClass('mision')
    $('#vision3').addClass('vision')
    $('#valores3').removeClass('valores')
    $('.textomvv3').fadeIn(200)
    $('.textomvv1').fadeOut(200)
    $('.textomvv2').fadeOut(200)
})



    
});