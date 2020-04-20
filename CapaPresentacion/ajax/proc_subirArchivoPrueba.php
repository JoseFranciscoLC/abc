<?php  
require_once("../../CapaNegocio/Archivos.php");
    $archivo = new Archivos();

switch ($_POST["opcion"]) {
	case "guardarArchivo":
		$temporal = $_FILES["archivo"]["tmp_name"];
		$directorio = "../../NuevosRecursos/pdf";        
		$copiaArchivo = $_FILES["archivo"]["name"];
	    $archivoSeparado = explode(".", $_FILES["archivo"]["name"] );
		$peso = $_FILES["archivo"]["size"];
		$nombre = $archivoSeparado[0];		
		$tipo = $archivoSeparado[1];		
		$url = $directorio . "/" . $copiaArchivo;
		$rutaParaBaseDeDatos = "../NuevosRecursos/pdf/" . $copiaArchivo;

        $archivo->set_nombreArchivo($nombre);
        $archivo->set_pesoArchivo($peso);
        $archivo->set_rutaArchivo($rutaParaBaseDeDatos);        

		if($tipo == "pdf"){
			if(move_uploaded_file($temporal,$url)){
			    $respuesta = $archivo->fun_guardararchivo();
                $respuesta = pg_fetch_array($respuesta);
                if($respuesta[0] == 1){
                    $respuestaBuscar = $archivo->fun_buscarArchivos("");
			        $respuestaBuscar = pg_fetch_all($respuestaBuscar);
                    echo json_encode($respuestaBuscar);
                }
		    } else {
		  	    echo json_encode("Error: no se pudo subir");
		    }
		} else {
			echo json_encode("Error: El formato del archivo no es el correcto");
		}
		
	break;
	case "buscarArchivos":
	     $respuestaBuscar = $archivo->fun_buscarArchivos("");
	     $respuestaBuscar = pg_fetch_all($respuestaBuscar);
         echo json_encode($respuestaBuscar);
	break;
	case "buscarArchivoNombre":
	     $respuestaBuscar = $archivo->fun_buscarArchivos($_POST["filtro"]);
	     $respuestaBuscar = pg_fetch_all($respuestaBuscar);
         echo json_encode($respuestaBuscar);
	break;
	
	default:
		echo "Error";
	break;
}