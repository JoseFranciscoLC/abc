$("#btnGuardar").on("click", function(e){
	if(validarInputs() == false){
		return;
	}
	datos = {
		numeroEmpleado: $("#numeroEmpleado").val(),
		nombre: $("#nombre").val(),
		apellidoPaterno: $("#apellidoPaterno").val(),
		apellidoMaterno: $("#apellidoMaterno").val(),
		edad: $("#edad").val(),
		direccion: $("#direccion").val(),
		genero: $("#genero").val(),
		opcion: "guardar"
	};	
	$.ajax({
		url: "ajax/proc_registrarEmpleado.php",
		type: "POST",
		dataType: "json",
		data: datos
	})
	.done(function(respuesta) {
		limpiarInputs();
		$("#numeroEmpleado").focus();
        $("#alertaRegistrar").removeClass("alert-danger");
	    $("#alertaRegistrar").addClass("alert-success");
	    $("#alertaRegistrar").html("Empleado registrado correctamente");
		$("#alertaRegistrar").removeAttr("hidden");
	    setTimeout(function() {
		    $("#alertaRegistrar").attr("hidden", "true");
	    },2500);
	})
	.fail(function(respuesta){
		limpiarInputs();
        $("#alertaRegistrar").removeClass("alert-success");
	    $("#alertaRegistrar").addClass("alert-danger");
	    $("#alertaRegistrar").html("ERROR: No se pudo registrar al empleado");
        $("#alertaRegistrar").removeAttr("hidden");
	    setTimeout(function() {
		    $("#alertaRegistrar").attr("hidden", "true");
	    },2500);
	});	
});

function limpiarInputs(){
    $("#numeroEmpleado").val("");
    $("#nombre").val("");
    $("#apellidoPaterno").val("");
    $("#apellidoMaterno").val("");
    $("#edad").val("");
    $("#direccion").val("");

		
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
	if($("#edad").val() == "" || $("#edad").val() < 1){
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

$("#edad").on("keypress", function(e){
       // console.log("se presiono una tecla");
         cadena = $("#edad").val();
   if(cadena.length > 2){
         e.preventDefault();
   } else {
        // console.log("Aun esta en el limite");
   }
});