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
		$("#btnGuardar").attr("disabled", "true");
		limpiarInputs();
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
        $("#btnGuardar").attr("disabled", "true");
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

// $("#alertaRegistrar").fadeIn();
    // setTimeout(function() {
		// $("#alertaRegistrar").fadeOut();
	// },2000);

$("#btnAlerta").on("click", function(){
	// console.log("boton prueba alerta");
	// // $("#alertaRegistrar").fadeIn();
	// $("#alertaRegistrar").removeAttr("hidden");
	 // setTimeout(function() {
		// // $("#alertaRegistrar").fadeOut();
		// $("#alertaRegistrar").attr("hidden", "true");
	// },2000);
	// let contenidoAlerta = $("#alertaRegistrar").html();
	$("#alertaRegistrar").removeClass("alert-danger");
	$("#alertaRegistrar").addClass("alert-success");
	// console.log($("#alertaRegistrar").html(" Empleado registrado correctamente"));
	
});
$("#btnAlerta2").on("click", function(){
	$("#alertaRegistrar").removeClass("alert-success");
	$("#alertaRegistrar").addClass("alert-danger");
	// console.log($("#alertaRegistrar").html("ERROR: No se pudo registrar al empleado"));
});
	
	
// $(".navbarRegistro").on("click", function(){
	// $(this).addClass("active");
// });

/*function tiempo(){
	for(let i = 0; i<=1000; i++){
		console.log(i);
	}
	$('#alertaCorrecta').attr('hidden',"");
	
	 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
	
}*/


