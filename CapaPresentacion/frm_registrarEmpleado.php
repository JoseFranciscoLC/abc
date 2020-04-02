<html>
    <head>
	    <link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap-dialog.css">
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">	

	    <!--<link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap.css">-->		
		<link rel = "stylesheet" href = "../NuevosRecursos/css/estilos.css">
	</head>
	
	<body>
	    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		      <!--<a class="navbar-brand" href="#">Empleados</a>-->
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active navbarInicio" href="index.php">Inicio </a>
                    <a class="nav-item nav-link active  navbarRegistro" href="frm_registrarEmpleado.php">Registro de Empleados</a>
                    <a class="nav-item nav-link active "  href="frm_listaEmpleados.php">Lista de Empleados</a>
                   
                </div>
            </div>
        </nav>
	<div class = "container">
	
	    <div id = "nombreFormulario">
		    <h2>Registrar Empleado</h2>
		</div>        	
		<div id = "alertaRegistrar" class="alert alert-success alert-dismissible fade show" role="alert" hidden>           
           ...
        </div>
		
	    <div id = "containerRegistrar" class = "container ">
            <form>
			    <div class="form-group">
                    <label for = "">Número de Empleado</label>
                    <input type = "number" class = "form-control soloNumeros" id = "numeroEmpleado">   
                    <div id = "alertaNumeroEmpleado" class = "alert alert-warning" hidden>Ingresa un número de empleado</div>
                </div>				
                <div class="form-group">
                    <label for="">Nombre</label>
                    <input type="text" class="form-control soloLetras" id="nombre" > 
                    <div id = "alertaNombre" class="alert alert-warning" hidden>Ingresa un nombre</div>  
                </div>
				<div class="form-group">
                    <label for="">Apellido Paterno</label>
                    <input type="text" class="form-control soloLetras" id="apellidoPaterno" > 
                    <div id = "alertaApellidoPaterno" class="alert alert-warning" hidden>Ingresa un apellido paterno</div>  
                </div>
				<div class="form-group">
                    <label for="">Apellido Materno</label>
                    <input type="text" class="form-control soloLetras" id="apellidoMaterno" >
                    <div id = "alertaApellidoMaterno" class="alert alert-warning" hidden>Ingresa un apellido materno</div>   
                </div>
				<div class="form-group">
                    <label for="">Edad</label>
                    <input type="text" class="form-control soloNumeros" id="edad" > 
                    <div id = "alertaEdad" class="alert alert-warning" hidden>Ingresa una edad</div>  
                </div>
				<div class="form-group">
                    <label for="">Dirección</label>
                    <input type="text" class="form-control letrasNumerosSimbolos" id="direccion" >
                    <div id = "alertaDireccion" class="alert alert-warning" hidden>Ingresa una dirección</div>  
                </div>
				<div class="form-group">
				    <label>Genero</label>
                    <select id="genero" class="form-control">
				        <option value="M">Masculino</option>
				        <option value="F">Femenino</option>
			        </select>
                </div>
               <button type = "button" class="btn btn-primary" id = "btnGuardar">Guardar</button>			    
			   
            </form>
	    </div> 
	</div>
	
	</body>
    <script type = "text/javascript" src = "../NuevosRecursos/js/jquery-3.2.1.min.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap-dialog.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/funciones.js"></script>
	<script type = "text/javascript" src = "js/js_registrarEmpleado.js"></script>
	
	
	
	
</html>
    