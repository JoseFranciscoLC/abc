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
	for(let i = 0; i < informacion.length; i++){	
		datos += "<tr>"+
		             "<td>"+ informacion[i]["id_archivo"] +"</td>"+
			         "<td>"+ informacion[i]["nombre_archivo"] +"</td>"+
					 "<td>"+ informacion[i]["peso_archivo"] +" bytes</td>"+			         
					 "<td><a href = '"+ informacion[i]['ruta_archivo'] +"' "+
					 "download = '"+ informacion[i]["nombre_archivo"] +".pdf' >Descargar </a></tr>";
		}
		$("#contenidoTablaArchivos").html(datos);
	
}

$("#botonSubirPdf").on("click", function(){
    if($("#archivo").val() == ""){
		return;
	}
    var formData = new FormData(document.getElementById('formularioArchivo'));
    formData.append("opcion","guardarArchivo");
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
			$("#alertaSubirArchivos").removeClass("alert-warning");
            $("#alertaSubirArchivos").removeClass("alert-danger");
	        $("#alertaSubirArchivos").addClass("alert-success");
	        $("#alertaSubirArchivos").html("Se ha subido el archivo");
            $("#alertaSubirArchivos").removeAttr("hidden");
            setTimeout(function() {
		      $("#alertaSubirArchivos").attr("hidden", "true");
	        },2500);
		    llenarTabla(respuesta);	
		} else {
			$("#alertaSubirArchivos").removeClass("alert-success");
            $("#alertaSubirArchivos").removeClass("alert-warning");
	        $("#alertaSubirArchivos").addClass("alert-danger");
	        $("#alertaSubirArchivos").html(respuesta);
            $("#alertaSubirArchivos").removeAttr("hidden");
            setTimeout(function() {
		      $("#alertaSubirArchivos").attr("hidden", "true");
	        },2500);
		}		
	})
	.fail(function(respuesta){
		console.log("Error");
		console.log(respuesta);
       
	});	
	$("#archivo").val("");
});

$("#botonBuscarArchivo").on("click", function(){
	$.ajax({
		url: "ajax/proc_subirArchivoPrueba.php",
		type: "POST",
		dataType: "json",
		data: {
			      opcion: "buscarArchivoNombre",
				  filtro: $("#nombreArchivo").val()
		      }
	})
	.done(function(respuesta){
		console.log("Done");
		console.log(respuesta);
        if(respuesta == false){
            $("#alertaSubirArchivos").removeClass("alert-success");
            $("#alertaSubirArchivos").removeClass("alert-danger");
	        $("#alertaSubirArchivos").addClass("alert-warning");
	        $("#alertaSubirArchivos").html("No se encontro el archivo");
            $("#alertaSubirArchivos").removeAttr("hidden");
            setTimeout(function() {
		      $("#alertaSubirArchivos").attr("hidden", "true");
	        },2500);
        } else{            
			llenarTabla(respuesta);
        }		 
	})
	.fail(function(respuesta){
		console.log(respuesta);
	});
	$("#nombreArchivo").val("");
});

