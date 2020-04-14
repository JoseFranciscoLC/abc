<html>
    <head>
	    <link rel = "stylesheet" href = "../NuevosRecursos/js/jqwidgets/styles/jqx.base.css" type = "text/css" />
		<link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap.min.css">
        <link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap.css"> 
        <link rel = "stylesheet" href = "../NuevosRecursos/css/font-awesome.min.css" type = "text/css" /> 
		<link rel = "stylesheet" href = "../NuevosRecursos/css/estilos.css">
	</head>	
	<body>
	    <nav class = "navbar navbar-expand-lg navbar-dark bg-dark">
                <ul class = "navbar-nav mr-auto">
                    <li id = "inicio" class = "nav-item">
                        <a class = "nav-link" href = "index.php">Inicio</span></a>
                    </li>
                    <li id = "registroEmpleados" class = "nav-item">
                        <a class = "nav-link" href = "frm_registrarEmpleado.php">Registro de Empleados</a>
                    </li> 
                    <li id = "listaEmplados" class = "nav-item active">
                        <a class = "nav-link" href = "frm_listaEmpleados.php">Lista de Empleados</a>
                    </li> 	
                     <a class = "nav-item nav-link"  href = "frm_subirArchivoPrueba.php">Archivo</a>				
                </ul>
                <form class = "form-inline my-2 my-lg-0">
                    <input id = "inputBuscar" class="form-control mr-sm-2 soloLetras" type = "search" placeholder = "Buscar Empleado" aria-label = "Search">
                    <button id = "botonBuscar" class="btn btn-outline-success my-2 my-sm-0" type="button">Buscar</button>
                </form>
        </nav>
	    <div class = "container">	
	        <div id = "nombreFormularioLista">
		        <h3> Buscar Empleado</h3>
		    </div>	
            <div id = "alertaLista" class = "alert alert-success alert-dismissible fade show" role="alert" hidden>           
                ...
            </div>	        
            <div> 
                <div class = "inputFiltro">           
                    <label>Nombre</label><br>
                    <input id = "filtroNombre" type = "text" class = "soloLetras">
                </div>
                <div class = "inputFiltro"> 
                    <label>Apellido Paterno</label><br>
                    <input id = "filtroApellidoPaterno" type = "text" class = "soloLetrasNoEspacio">
                </div>
                <div class = "inputFiltro"> 
                    <label>Apellido Materno</label><br>
                    <input id = "filtroApellidoMaterno" type = "text" class = "soloLetrasNoEspacio">
                </div>
                <button id = "botonBuscarFiltros" title = "Buscar" type = "button" class = "btn btn-primary"><i class = "fa fa-search"></i></button>
                <button id = "botonLimpiar" title = "Limpiar" type = "button" class = "btn btn-primary"><i class = "fa fa-eraser"></i></button>                
                <a id = "descarga" href="rpt_empleados.php" title = "Descargar la lista de empleados como pdf"><button id = "botonPdf" class = "btn btn-primary">				                                                                                              <i class = "fa fa-download"></i></button></a>
            </div>            
            <div id = "tituloTabla">
                <h3>Lista de Empleados</h3>
            </div>
			<div id = "jqxgrid">
            </div>            
            <div class = "modal fade" id = "modalEliminar" tabindex = "-1" role = "dialog" aria-labelledby = "exampleModalLabel" aria-hidden = "false">
                <div class = "modal-dialog" role = "document">
                    <div class = "modal-content">
                        <div class = "modal-header">
                            <h5 class = "modal-title" id = "exampleModalLabel">ELIMINAR EMPLEADO</h5>
                            <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close">
                            <span aria-hidden = "true">&times;</span>
                            </button>
                        </div>
                        <div id = "contenidoModalEliminar" class = "modal-body">          
                            El empleado sera eliminado
                        </div>
                        <div class = "modal-footer">
                            <input id = "inputId" hidden></input>
							<input id = "inoutNombre" hidden></input>
                            <button id = "cancelarModal" type = "button" class = "btn btn-secondary" data-dismiss = "modal">Cancelar</button>
                            <button id = "btnAceptarModalEliminar" type = "button" data-dismiss="modal" class = "btn btn-primary">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>		
		    <div class = "modal fade" id = "modalActualizar" tabindex = "-1" role = "dialog" aria-labelledby = "exampleModalLabel" aria-hidden = "false">
                <div class = "modal-dialog" role="document">
                    <div class = "modal-content">
                        <div class = "modal-header">
                            <h5 class = "modal-title" id = "exampleModalLabel">ACTUALIZAR EMPLEADO</h5>
                            <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close">
                            <span aria-hidden = "true">&times;</span>
                            </button>
                        </div>
                        <div id = "contenidoModalActualizar" class = "modal-body">
					        <form>					
			                    <div class = "form-group">
                                    <label class = "EtiquetaCampoActualizar">Número de Empleado</label>
                                    <input type = "number" class = "form-control soloNumeros" id = "numeroEmpleado">
                                    <div id = "alertaNumeroEmpleado" class = "alert alert-warning" hidden>Ingresa un número de empleado</div>   
                                </div>				
                                <div class = "form-group">
                                    <label class = "EtiquetaCampoActualizar">Nombre</label>
                                    <input type = "text" class = "form-control soloLetras" id = "nombre" >
                                    <div id = "alertaNombre" class = "alert alert-warning" hidden>Ingresa un nombre</div>   
                                </div>
				                <div class = "form-group">
                                    <label class = "EtiquetaCampoActualizar">Apellido Paterno</label>
                                    <input type = "text" class = "form-control soloLetrasNoEspacio" id = "apellidoPaterno" > 
                                    <div id = "alertaApellidoPaterno" class = "alert alert-warning" hidden>Ingresa un apellido paterno</div>  
                                </div>
				                <div class = "form-group">
                                    <label class = "EtiquetaCampoActualizar">Apellido Materno</label>
                                    <input type = "text" class = "form-control soloLetrasNoEspacio" id = "apellidoMaterno" > 
                                    <div id = "alertaApellidoMaterno" class = "alert alert-warning" hidden>Ingresa un apellido materno</div>  
                                </div>
				                <div class = "form-group">
                                    <label class = "EtiquetaCampoActualizar">Edad</label>
                                    <input type = "text" class = "form-control soloNumeros" id = "edad" > 
                                    <div id = "alertaEdad" class="alert alert-warning" hidden>Ingresa una edad</div>  
                                </div>
				                <div class = "form-group">
                                    <label class = "EtiquetaCampoActualizar">Dirección</label>
                                    <input type = "text" class = "form-control letrasNumerosSimbolos" id = "direccion" >
                                    <div id = "alertaDireccion" class="alert alert-warning" hidden>Ingresa una dirección</div>   
                                </div>
				                <div class = "form-group">
				                    <label class = "EtiquetaCampoActualizar">Genero</label>
                                    <select id = "genero" class = "form-control">
				                        <option value = "M">Masculino</option>
				                        <option value = "F">Femenino</option>
			                        </select>
                                </div>
                            </form>                           
                        </div>
                        <div class = "modal-footer">
                            <input id = "idEmpleadoActualizar" hidden></input>
                            <button id = "cancelarModal2" type = "button" class = "btn btn-secondary" data-dismiss = "modal">Cancelar</button>
                            <button id = "btnAceptarModalActualizar" type = "button" class = "btn btn-primary" >Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
	</body>   
    <script type = "text/javascript" src = "../NuevosRecursos/js/jquery-3.2.1.min.js"></script>
    <script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap-dialog.js"></script>	
	<script type = "text/javascript" src = "../NuevosRecursos/js/funciones.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/jqwidgets/jqx-all.js"></script>
	<script type = "text/javascript" src = "js/js_listaEmpleados.js"></script>	
</html>
    