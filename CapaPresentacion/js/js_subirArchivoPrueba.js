$("#botonSubirPdf").on("click", function(){
    datos = {
    	archivo: $("#archivo").val(),
    	opcion: "guardarArchivo"
    }
    var formData = new FormData(document.getElementById('formularioArchivo'));
    formData.append("opcion","guardarArchivo");

    // console.log($("#archivo").val());

	$.ajax({
		url: "ajax/proc_subirArchivoPrueba.php",
		type: "POST",
		dataType: "html",
		data: formData,
        contentType: false,
	    processData: false
	})
	.done(function(respuesta) {
		console.log("done");
		console.log(respuesta);
		$("#linkDescargaPrueba").attr("href", respuesta);
	})
	.fail(function(respuesta){
		console.log("Error");
		console.log(respuesta);
       
	});	
});