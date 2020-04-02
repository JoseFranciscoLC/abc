// $(document).ready(function(){
	// (".navbarInicio").removeClass("active");
// });

$('#checkboxMasculino').on('click', function(){
	if ($('#checkboxMasculino').prop('checked')){
	       $('#checkboxFemenino').prop('checked', false);
	} 
});

$('#checkboxFemenino').on('click', function(){
	if ($('#checkboxFemenino').prop('checked')){
	       $('#checkboxMasculino').prop('checked', false);
	} 
});

$('#btnGuardar').on('click', function(e){
	//alert($('#genero').val());
	//$('#alertaCorrecta').removeAttr('hidden');
	// e.preventDefault();
	if(validarInputs() == false){
		console.log("Entro en validar inputs " + validarInputs());
		return;
	}
	// console.log("despues de validarInputs " + validarInputs());
	datos = {
		numeroEmpleado: $('#numeroEmpleado').val(),
		nombre: $('#nombre').val(),
		apellidoPaterno: $('#apellidoPaterno').val(),
		apellidoMaterno: $('#apellidoMaterno').val(),
		edad: $('#edad').val(),
		direccion: $('#direccion').val(),
		genero: $('#genero').val(),
		opcion: "guardar"
	};
	
	$.ajax({
		url: "ajax/proc_registrarEmpleado.php",
		type: "POST",
		dataType: "json",
		data: datos
	})
	.done(function(respuesta) {
		console.log("done");
		console.log(respuesta);
		// $("#btnGuardar").attr("disabled", "true");
		limpiarInputs();
		$('#numeroEmpleado').focus();
        $("#alertaRegistrar").removeClass("alert-danger");
	    $("#alertaRegistrar").addClass("alert-success");
	    $("#alertaRegistrar").html(" Empleado registrado correctamente");
		$("#alertaRegistrar").removeAttr("hidden");
	    setTimeout(function() {
		    $("#alertaRegistrar").attr("hidden", "true");
	    },2500);
	})
	.fail(function(respuesta){
		console.log("ERRORRRRRR");
		console.log(respuesta);
        // $("#btnGuardar").attr("disabled", "true");
		limpiarInputs();
        $("#alertaRegistrar").removeClass("alert-success");
	    $("#alertaRegistrar").addClass("alert-danger");
	    $("#alertaRegistrar").html("ERROR: No se pudo registrar el empleado");
        $("#alertaRegistrar").removeAttr("hidden");
	    setTimeout(function() {
		    $("#alertaRegistrar").attr("hidden", "true");
	    },2500);
	});
	
	console.log(datos);
	
});

function limpiarInputs(){
    $('#numeroEmpleado').val("");
    $('#nombre').val("");
    $('#apellidoPaterno').val("");
    $('#apellidoMaterno').val("");
    $('#edad').val("");
    $('#direccion').val("");

		
};

function validarInputs(){	
	if($("#numeroEmpleado").val() == ""){
		$("#alertaNumeroEmpleado").removeAttr("hidden");
		$("#numeroEmpleado").focus();
		return false;
	}
	if($("#nombre").val() == ""){
		$("#alertaNombre").removeAttr("hidden");
		$("#nombre").focus();
		return false; 
	}
	if($("#apellidoPaterno").val() == ""){
		$("#alertaApellidoPaterno").removeAttr("hidden");
		$("#apellidoPaterno").focus();
		return false;
	}
	if($("#apellidoMaterno").val() == ""){
		$("#alertaApellidoMaterno").removeAttr("hidden");
		$("#apellidoMaterno").focus();
		return false;
	}
	if($("#edad").val() == ""){
		$("#alertaEdad").removeAttr("hidden");
		$("#edad").focus();
		return false;
	}
	if($("#direccion").val() == ""){
		$("#alertaDireccion").removeAttr("hidden");
		$("#direccion").focus();
		return false;
	}
		
}

$("#numeroEmpleado").blur(function(){
	if($("#numeroEmpleado").val() != ""){
        $("#alertaNumeroEmpleado").attr("hidden", "true");
        // console.log("if blur entro");
	}	
});

$("#nombre").blur(function(){
	if($("#nombre").val() != ""){
		$("#alertaNombre").attr("hidden", "true");
	}
});
$("#apellidoPaterno").blur(function(){
	if($("#apellidoPaterno").val() != ""){
		$("#alertaApellidoPaterno").attr("hidden", "true");
	}	
});
$("#apellidoMaterno").blur(function(){
	if($("#apellidoMaterno").val() != ""){
		$("#alertaApellidoMaterno").attr("hidden", "true");
	}	
});
$("#edad").blur(function(){
	if($("#edad").val() != ""){
		$("#alertaEdad").attr("hidden", "true");
	}	
});
$("#direccion").blur(function(){
	if($("#direccion").val() != ""){
		$("#alertaDireccion").attr("hidden", "true");
	}
});