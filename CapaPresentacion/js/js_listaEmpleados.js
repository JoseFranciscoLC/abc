$(document).ready(function(){
    $.ajax({
		url: "ajax/proc_listaEmpleados.php",
		type: "POST",
		dataType: "json",
		data: {opcion: "buscar"}		
	})
	.done(function(respuesta){			
        llenarGrid(respuesta);
			
	})
	.fail(function(respuesta){
		
	});	
});

function llenarGrid(arreglo){
 $("#jqxgrid").jqxGrid("clear");
  var estado = 0;
  var generos = function (row, datafield, value){
    if (value == "F"){
      return "&nbsp;Femenino";
    } else {
      return "&nbsp;Masculino";
    }
  };
  var botones = function (row, datafield, value,rowdata){
    var data = $("#jqxgrid").jqxGrid("getrowdata", row);
    var nombre = "";
	nombre = nombre.concat(data.nombre + " " + data.apellidopaterno + " " +data.apellidomaterno);	  
    var btn = "<button id = 'botonActualizar' data-numero = '"+data.id_empleado+"' type = 'button'"+
                 "class = 'btn btn-info btn-sm' data-toggle='modal' data-target='#modalActualizar'>Actualizar</button>";
     
    btn = btn.concat("&nbsp;<button id = 'botonEliminar' data-numero = '"+data.id_empleado+"' data-nombre = '"+nombre+"' type = 'button'"+
                          "class = 'btn btn-danger btn-sm' data-toggle='modal' data-target='#modalEliminar'>Eliminar</button>");
   
    return btn ;
  };

  var source = {
    localdata:arreglo,
    datatype:"array"
  };
  var dataAdapter = new $.jqx.dataAdapter(source, {
    loadComplete: function (arreglo) { },
    loadError: function (xhr, status, error) { }
  });
  $("#jqxgrid").jqxGrid({
    width: "100%",
    autoheight:true,
    pageable: true,
    sortable: true,
  
    pagermode: "simple",
    source: dataAdapter,
    disabled: false,
    columns: [
      {text: "id", datafield: "id_empleado", width:"6%"},
      {text: "Numero de Empleado", datafield: "numero_empleado", width:"20%"},
      {text: "Nombre", datafield: "nombre", width:"10%"},
      {text: "Apellido Paterno", datafield: "apellidopaterno", width:"17%"},
      {text: "Apellido materno", datafield: 'apellidomaterno', width:"17%"},
      {text: "Edad", datafield: "edad", width:"6%"},
      {text: "Genero", datafield: "genero", width:"8%", cellsrenderer: generos},      
      {text: "Opciones", width:"17%",datafield:"",cellsrenderer: botones}
    ]

  });

}

$("#modalEliminar").on("show.bs.modal", function(event){   
    var boton = $(event.relatedTarget); 
    var id = boton.data('numero');
	var nombre = boton.data('nombre');    
    $("#contenidoModalEliminar").html("Seguro que quiere eliminar a " + nombre);	
    $("#inputId").val(id);     
});
$("#btnAceptarModalEliminar").on("click", function(){    
    $.ajax({
		url: "ajax/proc_listaEmpleados.php",
		type: "POST",
		dataType: "json",
		data: {
                 opcion: "eliminar",
                 id: $("#inputId").val()
              }		
	})
    .done(function(respuesta){         
		llenarGrid(respuesta);
		$("#alertaLista").removeClass("alert-danger");
        $("#alertaLista").removeClass("alert-warning");
	    $("#alertaLista").addClass("alert-success");
	    $("#alertaLista").html("El empleado ha sido eliminado");
		$("#alertaLista").removeAttr("hidden");
	    setTimeout(function() {
		    $("#alertaLista").attr("hidden", "true");
	    },2500);    
    })
    .fail(function(respuesta){        
		$("#alertaLista").removeClass("alert-success");
        $("#alertaLista").removeClass("alert-warning");
	    $("#alertaLista").addClass("alert-danger");
	    $("#alertaLista").html("ERROR: No se pudo eliminar el empleado");
        $("#alertaLista").removeAttr("hidden");
	    setTimeout(function() {
		   $("#alertaLista").attr("hidden", "true");
	    },2500);
    });      
});

$("#modalActualizar").on("show.bs.modal", function(event){
    var boton = $(event.relatedTarget); 
    var idEmpleado = boton.data('numero');
    $("#idEmpleadoActualizar").val(idEmpleado);	
	 $.ajax({
		url: "ajax/proc_listaEmpleados.php",
		type: "POST",
		dataType: "json",
		data: {
                 opcion: "buscarEmpleado",
                 id: idEmpleado
              }		
	})
    .done(function(respuesta){
		$("#numeroEmpleado").val(respuesta[0].numero_empleado);
		$("#nombre").val(respuesta[0].nombre);
		$("#apellidoPaterno").val(respuesta[0].apellidopaterno);
		$("#apellidoMaterno").val(respuesta[0].apellidomaterno);
		$("#edad").val(respuesta[0].edad);
		$("#direccion").val(respuesta[0].direccion);
		$("#genero").val(respuesta[0].genero);    
    })
    .fail(function(respuesta){

    });
});

$("#btnAceptarModalActualizar").on("click", function (){
	if(validarInputs() == false){
		$("#btnAceptarModalActualizar").removeAttr("data-dismiss");		
		return;
	}
    $("#btnAceptarModalActualizar").attr("data-dismiss", "modal");
	datos = {
		id: $('#idEmpleadoActualizar').val(),
		numeroEmpleado: $('#numeroEmpleado').val(),
		nombre: $('#nombre').val(),
		apellidoPaterno: $('#apellidoPaterno').val(),
		apellidoMaterno: $('#apellidoMaterno').val(),
		edad: $('#edad').val(),
		direccion: $('#direccion').val(),
		genero: $('#genero').val(),
		opcion: "actualizar"
	}
	$.ajax({
		url: "ajax/proc_listaEmpleados.php",
		type: "POST",
		dataType: "json",
		data: datos
	})
	.done(function(respuesta){	
		llenarGrid(respuesta);
        $("#alertaLista").removeClass("alert-danger");
        $("#alertaLista").removeClass("alert-warning");
	    $("#alertaLista").addClass("alert-success");
	    $("#alertaLista").html("Datos del empleado actualizados correctamente");
		$("#alertaLista").removeAttr("hidden");
	    setTimeout(function() {
		    $("#alertaLista").attr("hidden", "true");
	    },2500);
	})
	.fail(function(respuesta){
        $("#alertaLista").removeClass("alert-success");
        $("#alertaLista").removeClass("alert-warning");
	    $("#alertaLista").addClass("alert-danger");
	    $("#alertaLista").html("ERROR: No se pudo actualizar los datos del empleado");
        $("#alertaLista").removeAttr("hidden");
	    setTimeout(function() {
		   $("#alertaLista").attr("hidden", "true");
	    },2500);
	});	
});

$("#botonBuscar"). on("click", function(){
    var estado = 0;	
	$.ajax({
		url: "ajax/proc_listaEmpleados.php",
		type: "POST",
		dataType: "json",
		data: {
			      opcion: "busquedaFiltrada",
				  filtro: $("#inputBuscar").val()
		      }
	})
	.done(function(respuesta){
        if(respuesta == false){
            $("#alertaLista").removeClass("alert-success");
            $("#alertaLista").removeClass("alert-danger");
	        $("#alertaLista").addClass("alert-warning");
	        $("#alertaLista").html("No se encontro el empleado");
            $("#alertaLista").removeAttr("hidden");
            setTimeout(function() {
		      $("#alertaLista").attr("hidden", "true");
	        },2500);
        } else{            
			llenarGrid(respuesta);
        }		 
	})
	.fail(function(respuesta){
	});
	$("#inputBuscar").val("");
});

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

$("#botonBuscarFiltros").on("click", function(){   
	datos = {
		nombre: $("#filtroNombre").val(),
		apellidoPaterno: $("#filtroApellidoPaterno").val(),
		apellidoMaterno: $("#filtroApellidoMaterno").val(),
		opcion: "busquedaFiltradaCompleta"
	}
	$.ajax({
		url: "ajax/proc_listaEmpleados.php",
		type: "POST",
		dataType: "json",
		data: datos
	})
	.done(function(respuesta){
        if(respuesta == false){
            $("#alertaLista").removeClass("alert-success");
            $("#alertaLista").removeClass("alert-danger");
	        $("#alertaLista").addClass("alert-warning");
	        $("#alertaLista").html("No se encontro el empleado");
            $("#alertaLista").removeAttr("hidden");
            setTimeout(function() {
		      $("#alertaLista").attr("hidden", "true");

	        },2500);
        } else {
             
			llenarGrid(respuesta);
        }
		 
	})
	.fail(function(respuesta){
		
	});
});

$("#botonLimpiar").on("click", function(){
	$("#filtroNombre").val("");
	$("#filtroApellidoPaterno").val("");
	$("#filtroApellidoMaterno").val("");
});