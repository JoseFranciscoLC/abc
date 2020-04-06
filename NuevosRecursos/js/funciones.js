$(".NoModificable").on("cut paste contextmenu dragover drop", function(e) {
    e.preventDefault();
});
$(".soloNumeros").on('keypress', function(e) {
    var valorIngresado = e.originalEvent.key;
    if ( !valorIngresado.match(/^[0-9]*$/) ) {
        if (valorIngresado != "Backsapce") {
            e.preventDefault();
        }
    }
});	
$(".letrasNumeros").on('keypress', function(e) {
    var valorIngresado = e.originalEvent.key;
    if ( !valorIngresado.match(/^[a-zA-ZñÑ0-9\u00C1\u00E1\u00C9\u00E9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00DC\u00FC\u00D1\u00F1.,:;-_¿?¡!=\s]+$/) ) {
        if (valorIngresado != "Backsapce") {
            e.preventDefault();
        }
    }
});
$(".letrasNumerosSimbolos").on('keypress', function(e) {
    var valorIngresado = e.originalEvent.key;
    if ( valorIngresado.match(/^['&]+$/) ) {
        e.preventDefault();        
    }
});	
$(".soloLetras").on('keypress', function(e) {
    var valorIngresado = e.originalEvent.key;
    if ( !valorIngresado.match(/^[a-zA-ZáÁéÉíÍóÓúÚüñÑ\s]*$/) ) {
        if (valorIngresado != "Backsapce") {
            e.preventDefault();
        }
    }
});	
$(".soloLetrasNoEspacio").on('keypress', function(e) {
    var valorIngresado = e.originalEvent.key;
    if ( !valorIngresado.match(/^[a-zA-ZáÁéÉíÍóÓúÚüñÑ]*$/) ) {
        if (valorIngresado != "Backsapce") {
            e.preventDefault();
        }
    }
}); 