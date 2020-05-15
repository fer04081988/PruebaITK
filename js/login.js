// ==================================================================
//                        Registro de SW
// ==================================================================
var url = window.location.href;
var swLocation = '/twittor/sw.js'; // Indicar nombre de la aplicación

if (navigator.serviceWorker) {
    if (url.includes('localhost')) {
        swLocation = '/sw.js';
    }
    //navigator.serviceWorker.register(swLocation);
}

// ==================================================================
//                   Evento para inicio de sesión
// ==================================================================

$("#InicioSesion").click(() => {
    //fetch('')
    var datosRequeridos = true;
    if (!validaCampoVacio($("#usuario"))) { datosRequeridos = false; }
    if (!validaCampoVacio($("#pass"))) { datosRequeridos = false; }

    if (!datosRequeridos) { return false; }


    var sesion = {
        usuarioId: '850195',
        password: 'italika',
        conn: ""
    };

    fetch('http://10.89.136.90:8080/portal/rest/login?usuarioId=850195&password=italika&conn=', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        //body: $.param(sesion)
    }).then(res => console.log);


    //return window.location.href = "/pages/ArbolNavegacion.html";
});

function validaCampoVacio(input) {
    if (input.val().trim() == '') {
        muestraAlerta(input);
        return false;
    }
    return true;
}

function muestraAlerta(input) {
    var thisAlert = input.parent();
    $(thisAlert).addClass('alert-validate');
}

function ocultaAlerta(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
}

// Oculta alerta cuando se hace foco en control
$('.validate-form .input100').each(function () {
    $(this).focus(function () {
        ocultaAlerta(this);
    });
});

// evita hacer el postback en la pagina
$('.validate-form').on('submit', function () { return false; });

//valida si campo esta vacio para maximizar el titulo del campo
$('.input100').each(function () {
    $(this).on('blur', function () {
        if ($(this).val().trim() != "") {
            $(this).addClass('has-val');
        }
        else {
            $(this).removeClass('has-val');
        }
    })
})