<?php  
require_once("../../CapaNegocio/Archivos.php");
    $archivoSubir = new Archivos();

switch ($_POST["opcion"]) {
	case "guardarArchivo":
		$temporal = $_FILES["archivo"]["tmp_name"];
		$directorio = "../../NuevosRecursos/pdf";        
		$archivo = $_FILES["archivo"]["name"];
	    $archivoSeparado = explode(".", $_FILES["archivo"]["name"] );
		$peso = $_FILES["archivo"]["size"];
		$nombre = $archivoSeparado[0];		
		$tipo = $archivoSeparado[1];		
		$url = $directorio . "/" . $archivo;
		$rutaParaBaseDeDatos = "../NuevosRecursos/pdf/" . $archivo;

        
        $archivoSubir->set_nombreArchivo($nombre);
        $archivoSubir->set_pesoArchivo($peso);
        $archivoSubir->set_rutaArchivo($rutaParaBaseDeDatos);
        

		if($tipo == "pdf"){
			if(move_uploaded_file($temporal,$url)){
			    $respuesta = $archivoSubir->fun_guardararchivo();
                $respuesta = pg_fetch_array($respuesta);
                if($respuesta[0] == 1){
                    $respuestaBuscar = $archivoSubir->fun_buscarArchivos("");
			        $respuestaBuscar = pg_fetch_all($respuestaBuscar);
                    echo json_encode($respuestaBuscar);
                }
		    } else {
		  	    echo json_encode("Error: no se pudo subir");
		    }
		} else {
			echo json_encode("Error: el formato del archivo no es el correcto");
		}
		
	break;
	case "buscarArchivos":
	     $respuestaBuscar = $archivoSubir->fun_buscarArchivos("");
	     $respuestaBuscar = pg_fetch_all($respuestaBuscar);
         echo json_encode($respuestaBuscar);
	break;
	
	default:
		echo "Error";
	break;
}