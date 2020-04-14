<html>
    <head>
	    <link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap-dialog.css">			
        <link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap.min.css">
	    <link rel = "stylesheet" href = "../NuevosRecursos/css/bootstrap.css">		
		<link rel = "stylesheet" href = "../NuevosRecursos/css/estilos.css">
	</head>	
	<body>
	    <nav class = "navbar navbar-expand-lg navbar-dark bg-dark">
                <div class = "navbar-nav">
                    <a class = "nav-item nav-link" href = "index.php">Inicio </a>
                    <a class = "nav-item nav-link " href = "frm_registrarEmpleado.php">Registro de Empleados</a>
                    <a class = "nav-item nav-link"  href = "frm_listaEmpleados.php">Lista de Empleados</a>
                    <a class = "nav-item nav-link active"  href = "frm_subirArchivoPrueba.php">Archivo</a>                   
                </div>
        </nav>
	<div class = "container">	
	    <form id="formularioArchivo">
         <fieldset>
                 <legend>Seleccione el pdf</legend>
                 <input id = "archivo" name="archivo" type="file">
                 <input id = "botonSubirPdf" type="button" value="subir">
         </fieldset>   
        </form>
        <a id="linkDescargaPrueba" href="" download="ArchivoPrueba.pdf">prueba</a>
	</div>	
	</body>
    <script type = "text/javascript" src = "../NuevosRecursos/js/jquery-3.2.1.min.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/bootstrap-dialog.js"></script>
	<script type = "text/javascript" src = "../NuevosRecursos/js/funciones.js"></script>
	<script type = "text/javascript" src = "js/js_subirArchivoPrueba.js"></script>	
</html>
    