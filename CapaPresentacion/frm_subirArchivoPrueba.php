<html>
    <head>
	    <link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap-dialog.css">			
        <link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap.min.css">
	    <link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap.css">	
        <link rel = "stylesheet" href = "../NuevosRecursos/css/font-awesome.min.css" type = "text/css" /> 	
		<link rel = "stylesheet" href = "../NuevosRecursos/css/estilos.css">
	</head>	
	<body>
	    <nav class = "navbar navbar-expand-lg navbar-dark bg-dark">
                <div class = "navbar-nav">
                    <a class = "nav-item nav-link" href = "index.php">Inicio </a>
                    <a class = "nav-item nav-link " href = "frm_registrarEmpleado.php">Registro de Empleados</a>
                    <a class = "nav-item nav-link"  href = "frm_listaEmpleados.php">Lista de Empleados</a>
                    <a class = "nav-item nav-link active"  href = "frm_subirArchivoPrueba.php">Archivos</a>                   
                </div>
        </nav>
	    <div class = "container">	
	    <div id = "alertaSubirArchivos" class = "alert alert-success alert-dismissible fade show" role="alert" hidden="">           
            Se subio el archivo
        </div>
		<div id = "subirBuscarArchivos">
		    
	        <form id="formularioArchivo">
                <!-- <fieldset id = "fieldsetArchivo" class = "border p-3">-->
                    <legend class = "w-auto">Seleccione un archivo PDF</legend>
                    <input id = "archivo" name="archivo" type="file">
				    <br><br>
                    <input id = "botonSubirPdf" class = "btn btn-primary" type="button" value="Subir">
                <!--</fieldset>-->  
                <!-- <a id="linkDescargaPrueba" href="" download="ArchivoPrueba.pdf">prueba</a> -->				
            </form>
		
			<div id = "buscarArchivos">

			      <!-- <fieldset id = "fieldsetArchivo" class = "border p-3">-->
                    <legend class = "w-auto">Buscar  </legend>
                    <input id = "nombreArchivo"  type="text" placeholder = "Nombre del archivo">
			
                   <button id = "botonBuscarFiltros" title = "Buscar" type = "button" class = "btn btn-primary"><i class = "fa fa-search"></i></button>
                   <br>
                   <br>
                   <br>

                <!--</fieldset>-->   
			</div>
        
		</div>
	
		<div id = "tituloTablaArchivos">
		    <h3>Archivos</h3>
		</div>
	    <div id = "conteinerListaArcivos">
            <table class = "table">
		        <thead class="thead-dark">
                    <tr>
                        <th scope = "col">id</th>
					    <th scope = "col">Nombre</th>
						<th scope = "col">Tamaño</th>
						<th scope = "col"></th>						
					</tr>
				</thead>
				<tbody id = "contenidoTablaArchivos">
				    
				</tbody>
			
			</table>		
		    
	    </div>
	</div>	
	</body>
    <script type = "text/javascript" src = "../NuevosRecursos/js/jquery-3.2.1.min.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap-dialog.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/funciones.js"></script>
	<script type = "text/javascript" src = "js/js_subirArchivoPrueba.js"></script>	
</html>
    