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

$("#numeroEmpleado").blur(function(){
	// console.log("Valor de input " + validarInputs());
	if(validarInputs()){
		$("#btnGuardar").removeAttr("disabled");	
        $("#btnAceptarModalActualizar").removeAttr("disabled");		
		console.log("Entro en if numero Empelado");
	}else{
		$("#btnGuardar").attr("disabled", "true");
		$("#btnAceptarModalActualizar").attr("disabled", "true");
		console.log("entro en else numero Empleado");
	}
	
});

$("#nombre").blur(function(){
	if(validarInputs()){
		$("#btnGuardar").removeAttr("disabled");	
        $("#btnAceptarModalActualizar").removeAttr("disabled");			
		console.log("Entro en if nombre");
	}else{
		$("#btnGuardar").attr("disabled", "true");
		$("#btnAceptarModalActualizar").attr("disabled", "true");
		console.log("entro en else nombre");
	}
	
});
$("#apellidoPaterno").blur(function(){
	if(validarInputs()){
		$("#btnGuardar").removeAttr("disabled");		
		$("#btnAceptarModalActualizar").removeAttr("disabled");	
		console.log("Entro en if apellidoPaterno");
	}else{
		$("#btnGuardar").attr("disabled", "true");
		$("#btnAceptarModalActualizar").attr("disabled", "true");
		console.log("entro en else apellidoPaterno");
	}
	
});
$("#apellidoMaterno").blur(function(){
	if(validarInputs()){
		$("#btnGuardar").removeAttr("disabled");	
        $("#btnAceptarModalActualizar").removeAttr("disabled");			
		console.log("Entro en if apellidoMaterno");
	}else{
		$("#btnGuardar").attr("disabled", "true");
		$("#btnAceptarModalActualizar").attr("disabled", "true");
		console.log("entro en else apellidoMaterno");
		
	}
	
});
$("#edad").blur(function(){
	if(validarInputs()){
		$("#btnGuardar").removeAttr("disabled");	
        $("#btnAceptarModalActualizar").removeAttr("disabled");			
		console.log("Entro en if edad");
	}else{
		$("#btnGuardar").attr("disabled", "true");
		$("#btnAceptarModalActualizar").attr("disabled", "true");
		console.log("entro en else edad");
	}
	
});
$("#direccion").blur(function(){
	console.log("Valor de input " + validarInputs());
	if(validarInputs()){
		$("#btnGuardar").removeAttr("disabled");
		$("#btnAceptarModalActualizar").removeAttr("disabled");	
		// console.log(validarInputs());		
		console.log("Entro en if direccion");
	}else{
		// console.log(validarInputs());
		$("#btnGuardar").attr("disabled", "true");
		$("#btnAceptarModalActualizar").attr("disabled", "true");
		console.log("entro en else direccion");
	}
	
});


function validarInputs(){
	let validacion = false;
	if($("#numeroEmpleado").val()!="" && $("#nombre").val()!="" && 
	   $("#apellidoPaterno").val()!="" && $("#apellidoMaterno").val()!=""&& 
	   $("#edad").val()!="" && $("#direccion").val()!=""){
		   validacion = true;
	   }
	   return validacion;
	// if( !$("#numeroEmpleado").val()){
		
	// } else if(!$("#nombre").val()){
	 
	// } else if(!$("#apellidoPaterno").val()){
		
	// } else if(!$("#apellidoMaterno").val()){
		
	// } else if(!$("#edad").val()){
		
	// } else if(!$("#direccion").val()){
		
	// } 
	
	
}