$('head').append('<title>AUTOSERVICIOS</title>');
$('head').append('<meta charset="UTF-8">');
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
$('head').append('<link rel="icon" type="image/png" href="../img/ITK_ico.png" />');
$('head').append('<link rel="stylesheet" type="text/css" href="../vendor/bootstrap/bootstrap.min.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="../fonts/font-awesome-4.7.0/css/font-awesome.min.css">');

$('head').append('<script src="../vendor/bootstrap/popper.js"></script>');
$('head').append('<script src="../vendor/bootstrap/bootstrap.min.js"></script>');



function muestraTemplate(menu, header, footer) {

    if (!validaEstadoSesion()) {
        return window.location.href = "/index.html";
    }

    if (header) {
        creaHeader();
    }
    if (menu) {
        creaMenu();
    }

    if (footer) {
        creaFooter();
    }
}

function validaEstadoSesion() {
    return true;
}


function creaMenu() {
    $('#menu').html("<h1>Soy Menu</h1>");
}

function creaHeader() {
    $('#header').html("<h1>Soy Header</h1>");
}

function creaFooter() {
    $('#footer').html("<h1>Soy Footer</h1>");
}
