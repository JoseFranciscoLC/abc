<html>
    <head>
	    
	
	    <link rel="stylesheet" href="../NuevosRecursos/js/jqwidgets/styles/jqx.base.css" type="text/css" />
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">	
			<link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap-dialog.css">
		<link rel = "stylesheet" href = "../NuevosRecursos/css/estilos.css">
	</head>
	
	<body>
	    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php">Inicio</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="frm_registrarEmpleado.php">Registro de Empleados</a>
                    </li> 
                    <li class="nav-item active">
                        <a class="nav-link" href="frm_listaEmpleados.php">Lista de Empleados</a>
                    </li> 					
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input id = "inputBuscar" class="form-control mr-sm-2 soloLetras" type="search" placeholder="Buscar Empleado" aria-label="Search">
                    <button id = "botonBuscar" class="btn btn-outline-success my-2 my-sm-0" type="button">Buscar</button>
                </form>
            </div>
        </nav>
	    <div class = "container">
	
	        <div id = "nombreFormulario">
		        <h3> Empleados</h3>
		    </div>	
            <div id = "alertaLista" class="alert alert-success alert-dismissible fade show" role="alert" hidden>           
                ...
            </div>
	        <div id = "containerLista" class = "container">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Número Empleado</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido Paterno</th>
					     	<th scope="col">Apellido Materno</th>
						    <th scope="col">Dirección</th>
						    <th scope="col">Genero</th>
						    <th scope="col">Edad</th>
						    <th scope="col"></th>
						    <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id = "tablaC">
              
    
                    </tbody>
                </table>           
	        </div> 
			<div id="jqxgrid">
            </div>
            <!-- Button trigger modal -->
            <button type="button" id = "grid" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            <!-- Modal -->
            <div class="modal fade" id="modalEliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ELIMINAR EMPLEADO</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id = "contenidoModalEliminar" class="modal-body">
          
                            El empleado sera eliminado
                        </div>
                        <div class="modal-footer">
                            <input id = "inputId" hidden></input>
							<input id = "inoutNombre" hidden></input>
                            <button id = "cancelarModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button id = "btnAceptarModalEliminar" type="button" data-dismiss="modal" class="btn btn-primary">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
		
		    <div class="modal fade" id="modalActualizar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ACTUALIZAR EMPLEADO</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id = "contenidoModalActualizar" class="modal-body">
					        <form>					
			                    <div class="form-group">
                                    <label for="">Número de Empleado</label>
                                    <input type="number" class="form-control soloNumeros" id="numeroEmpleado">   
                                </div>				
                                <div class="form-group">
                                    <label for="">Nombre</label>
                                    <input type="text" class="form-control soloLetras" id="nombre" >   
                                </div>
				                <div class="form-group">
                                    <label for="">Apellido Paterno</label>
                                    <input type="text" class="form-control soloLetras" id="apellidoPaterno" >   
                                </div>
				                <div class="form-group">
                                    <label for="">Apellido Materno</label>
                                    <input type="text" class="form-control soloLetras" id="apellidoMaterno" >   
                                </div>
				                <div class="form-group">
                                    <label for="">Edad</label>
                                    <input type="text" class="form-control soloNumeros" id="edad" >   
                                </div>
				                <div class="form-group">
                                    <label for="">Dirección</label>
                                    <input type="text" class="form-control letrasNumerosSimbolos" id="direccion" >   
                                </div>
				                <div class="form-group">
				                    <label>Genero</label>
                                    <select id="genero" class="form-control">
				                        <option value="M">Masculino</option>
				                        <option value="F">Femenino</option>
			                        </select>
                                </div>

                            </form>
                           
                        </div>
                        <div class="modal-footer">
                            <input id = "idEmpleadoActualizar" hidden></input>
                            <button id = "cancelarModal2" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button id = "btnAceptarModalActualizar" type="button" data-dismiss="modal" class="btn btn-primary">Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	
	</body>
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
   
    <script type = "text/javascript" src = "../NuevosRecursos/js/jquery-3.2.1.min.js"></script>
    <script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap-dialog.js"></script>
	
	<script type = "text/javascript" src = "../NuevosRecursos/js/funciones.js"></script>
	<script type="text/javascript" src="../NuevosRecursos/js/jqwidgets/jqx-all.js"></script>
	<script type = "text/javascript" src = "js/js_listaEmpleados.js"></script>
	
	
	
	
	
</html>
    