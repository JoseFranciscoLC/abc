$(document).ready(function(){
	// var fe = "mueble";
// $("#TablaC").html("<td> casa</td>");
	
	datos = [
		{
			nombre: "jose",
			casa: "en un ligar"
		},
		{
			nombre: "fran",
			casa: "casaFRA"
		}
	]
	
    $.ajax({
		url: "ajax/proc_listaEmpleados.php",
		type: "POST",
		dataType: "json",
		data: {opcion: "buscar"}
		
	})
	.done(function(respuesta){
		// var res = respuesta;
		console.log("Done");
		// console.log(respuesta);
		// console.log(respuesta);
		// let datos = "";
		// for(var i = 0; i < respuesta.length; i++){
		// $("#tablaC").html("<tr><td>casa</td></tr>");
		// datos += "<tr>"+
		             // "<td>"+ respuesta[i]["id_empleado"] +"</td>"+
			         // "<td>"+ respuesta[i]["numero_empleado"] +"</td>"+
					 // "<td>"+ respuesta[i]["nombre"] +"</td>"+
			         // "<td>"+ respuesta[i]["apellidoPaterno"] +"</td>"+
					 // "<td>"+ respuesta[i]["apellidoMaterno"] +"</td>"+
			         // "<td>"+ respuesta[i]["direccion"] +"</td>"+
					 // "<td>"+ respuesta[i]["genero"] +"</td>"+
			         // "<td>"+ respuesta[i]["edad"] +"</td>"
			     // +"</tr>";
		    
		
		// }
		// $("#tablaC").html(datos);
		
		
		// console.log(respuesta["nombre"]);
		
		// console.log(datos);
		llenarTabla(respuesta);
        llenarGrid(respuesta);
		console.log(respuesta);
		
		
	
	})
	.fail(function(respuesta){
		console.log("ERROR");
		console.log(respuesta);
	});
	
});

function llenarTabla(informacion){
	let datos="";
	for(var i = 0; i < informacion.length; i++){
		// $("#tablaC").html("<tr><td>casa</td></tr>");
		datos += "<tr>"+
		             "<td>"+ informacion[i]["id_empleado"] +"</td>"+
			         "<td>"+ informacion[i]["numero_empleado"] +"</td>"+
					 "<td>"+ informacion[i]["nombre"] +"</td>"+
			         "<td>"+ informacion[i]["apellidopaterno"] +"</td>"+
					 "<td>"+ informacion[i]["apellidomaterno"] +"</td>"+
			         "<td>"+ informacion[i]["direccion"] +"</td>"+
					 "<td>"+ informacion[i]["genero"] +"</td>"+
			         "<td>"+ informacion[i]["edad"] +"</td>"+
					 "<td><button id = 'botonActualizar' data-numero = '"+informacion[i]["id_empleado"]+"' type = 'button'"+
                          "class = 'btn btn-info' data-toggle='modal' data-target='#modalActualizar'>Actualizar</button></td>"+				 
					 
					 "<td><button id = 'botonEliminar' data-numero = '"+informacion[i]["id_empleado"]+"' type = 'button'"+
                          "class = 'btn btn-danger' data-toggle='modal' data-target='#modalEliminar'>Eliminar</button></td>"
			     +"</tr>";
		    
		
		}
		$("#tablaC").html(datos);
		// console.log(datos);
}

// $(document).on('click', '#botonEliminar', function(){
	// // alert("Funciona");
	// // let elemento = this.parentElement.parentElement;
    // // let id = $(elemento).attr("idEmpleado", "casa");
	
    // // $(this).attr("data-numero", 2);
	
// console.log("click boton");
	
// });


$("#modalEliminar").on("show.bs.modal", function(event){
    // $("#contenidoModal").html("no se pudo guraar");
    var boton = $(event.relatedTarget); // Button that triggered the modal
    var id = boton.data('numero');
	var nombre = boton.data('nombre');
      // console.log(lo.data('numero'));
    $("#contenidoModalEliminar").html("Seguro que quiere eliminar a " + nombre);
	console.log(nombre);
	
    $("#inputId").val(id);
     // console.log("llllllll");
    // console.log("show.bs.modal");
});

$("#btnAceptarModalEliminar").on("click", function(){
	// $("#contenidoModal").html("no se pudo guraar");
	// window.location = "frm_listaEmpleados.php";
	// console.log("boton modal");
    // let idEmpleado = $("#inputId").val();
    // $("#contenidoModal").html(idEmpleado);
    
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
        console.log("Correcto en eliminar");
        llenarTabla(respuesta); 
		llenarGrid(respuesta);
		$("#alertaLista").removeClass("alert-danger");
        $("#alertaLista").removeClass("alert-warning");
	    $("#alertaLista").addClass("alert-success");
	    $("#alertaLista").html("Se eliminó el empleado");
		$("#alertaLista").removeAttr("hidden");
	    setTimeout(function() {
		    $("#alertaLista").attr("hidden", "true");
	    },2500);
    
    })
    .fail(function(respuesta){
        console.log("ERROR En el modal");
        console.log(respuesta);
		$("#alertaLista").removeClass("alert-success");
        $("#alertaLista").removeClass("alert-warning");
	    $("#alertaLista").addClass("alert-danger");
	    $("#alertaLista").html("ERROR: No se pudo eliminar el empleado");
        $("#alertaLista").removeAttr("hidden");
	    setTimeout(function() {
		   $("#alertaLista").attr("hidden", "true");
	    },2500);
    });
    // $("#exampleModal").modal('dispose');
       
});

function llenarGrid(arreglo){
 $("#jqxgrid").jqxGrid('clear');
  var estado = 0;
  var generos = function (row, datafield, value) {
    if (value == 'F'){
      return "&nbsp;Femenino";
    } else {
      return "&nbsp;Masculino";
    }
  };
  var botones = function (row, datafield, value,rowdata) {
    var data = $('#jqxgrid').jqxGrid('getrowdata', row);
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
    width: '100%',
    autoheight:true,
    pageable: true,
    sortable: true,
    selectionmode: '',
    editmode: 'click',
    pagermode: 'simple',
    source: dataAdapter,
    disabled: false,
    columns: [
      {text: 'id', datafield: 'id_empleado', width:'6%'},
      {text: 'Numero de Empleado', datafield: 'numero_empleado', width:'20%'},
      {text: 'Nombre', datafield: 'nombre', width:'20%'},
      {text: 'Apellido Paterno', datafield: 'apellidopaterno', width:'17%'},
      {text: 'Apellido materno', datafield: 'apellidomaterno', width:'17%'},
      {text: 'Edad', datafield: 'edad', width:'6%'},
      {text: 'Genero', datafield: 'genero', width:'10%', cellsrenderer: generos},      
      {text: 'Opciones', width:'18%',datafield:'',cellsrenderer: botones}
    ]

  });

}

$("#modalActualizar").on("show.bs.modal", function(event){
    // $("#contenidoModal").html("no se pudo guraar");
    var boton = $(event.relatedTarget); // Button that triggered the modal
    var idEmpleado = boton.data('numero');
      // console.log(lo.data('numero'));
    // $("#contenidoModal").html(id);
    $("#idEmpleadoActualizar").val(idEmpleado);
     // console.log("llllllll");
    // console.log("show.bs.modal");
	
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
        console.log("Correcto en actualizar");
        console.log(respuesta); 
		$("#numeroEmpleado").val(respuesta[0].numero_empleado);
		$("#nombre").val(respuesta[0].nombre);
		$("#apellidoPaterno").val(respuesta[0].apellidopaterno);
		$("#apellidoMaterno").val(respuesta[0].apellidomaterno);
		$("#edad").val(respuesta[0].edad);
		$("#direccion").val(respuesta[0].direccion);
		$("#genero").val(respuesta[0].genero);
    
    })
    .fail(function(respuesta){
        console.log("ERROR En el modal");
        console.log(respuesta);
    });
});



$("#btnAceptarModalActualizar").on("click", function (){
	if(validarInputs() == false){
		$("#btnAceptarModalActualizar").removeAttr("data-dismiss");
		console.log("Entro en validar inputs " + validarInputs());
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
		console.log("Correcto en actualizar");
		llenarTabla(respuesta);
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
		console.log("ERROR en Actualizar");
		console.log(respuesta);
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
	console.log($("#inputBuscar").val());
    var estado = 0;//no en uso borrar despues
	
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
		console.log("Correcto en Busqueda Filtrada");
		console.log(respuesta);
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
            llenarTabla(respuesta);  
			llenarGrid(respuesta);
        }
		 
	})
	.fail(function(respuesta){
		console.log("ERROR en Busqueda Filtrada");
		console.log(respuesta);
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