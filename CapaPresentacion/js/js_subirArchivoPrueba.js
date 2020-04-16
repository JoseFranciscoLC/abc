$(document).ready(function(){
    $.ajax({
		url: "ajax/proc_subirArchivoPrueba.php",
		type: "POST",
		dataType: "json",
		data: {opcion: "buscarArchivos"}		
	})
	.done(function(respuesta){			
        llenarTabla(respuesta);      
			
	})
	.fail(function(respuesta){
		
	});	
});

function llenarTabla(informacion){
	let datos="";
	for(var i = 0; i < informacion.length; i++){
		// $("#tablaC").html("<tr><td>casa</td></tr>");
		datos += "<tr>"+
		             "<td>"+ informacion[i]["id_archivo"] +"</td>"+
			         "<td>"+ informacion[i]["nombre_archivo"] +"</td>"+
					 "<td>"+ informacion[i]["peso_archivo"] +" bytes</td>"+			         
					 "<td><a href = '"+ informacion[i]['ruta_archivo'] +"' "+
					 "download = '"+ informacion[i]["nombre_archivo"] +"'.pdf >Descargar </a></tr>";	
		}
		$("#contenidoTablaArchivos").html(datos);
		// console.log(datos);
}

$("#botonSubirPdf").on("click", function(){
    // datos = {
    // 	archivo: $("#archivo").val(),
    // 	opcion: "guardarArchivo"
    // }
    var formData = new FormData(document.getElementById('formularioArchivo'));
    formData.append("opcion","guardarArchivo");

    // console.log($("#archivo").val());

	$.ajax({
		url: "ajax/proc_subirArchivoPrueba.php",
		type: "POST",
		dataType: "json",
		data: formData,
        contentType: false,
	    processData: false
	})
	.done(function(respuesta) {
		console.log("done");
		console.log(respuesta);
		console.log(typeof(respuesta));
		if(typeof(respuesta) == "object"){
		    llenarTabla(respuesta);	
		} else {
			
		}
		
		// console.log(respuesta);

		// $("#linkDescargaPrueba").attr("href", respuesta);
	})
	.fail(function(respuesta){
		console.log("Error");
		console.log(respuesta);
       
	});	
});


