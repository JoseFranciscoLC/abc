<?php  

switch ($_POST["opcion"]) {
	case "guardarArchivo":
		$temp = $_FILES["archivo"]["tmp_name"];
		$directorio = "../../NuevosRecursos/pdf";
        
		$nombre = $_FILES["archivo"]["name"];
		$url = $directorio . "/" . $nombre;
		$directorioParaBaseDeDatos = "../NuevosRecursos/pdf/" . $nombre;
		if(move_uploaded_file($temp,$url)){
			echo $directorioParaBaseDeDatos;
		} else {
			echo "Error: no se pudo guardar";
		}
	break;
	
	default:
		# code...
		break;
}