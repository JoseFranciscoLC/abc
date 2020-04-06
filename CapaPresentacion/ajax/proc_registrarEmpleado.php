<?php
    require_once("../../CapaNegocio/Empleados.php");
    $empleado = new Empleados();
	
	switch ($_POST["opcion"]) {
		case "guardar":
		    $empleado->set_numeroEmpleado($_POST["numeroEmpleado"]);
			$empleado->set_nombre($_POST["nombre"]);
			$empleado->set_apellidoPaterno($_POST["apellidoPaterno"]);
			$empleado->set_apellidoMaterno($_POST["apellidoMaterno"]);
			$empleado->set_edad($_POST["edad"]);
			$empleado->set_direccion($_POST["direccion"]);
			$empleado->set_genero($_POST["genero"]);		
			$respusta = $empleado->fun_guardarEmpleado();			
			$respusta = pg_fetch_array($respusta);			
			if($respusta[0] == 1){
				echo json_encode("Empleado Registrado");
			} else{
				echo json_encode("Error: No se pudo registrar el empleado");
			}			
		break;
		default:
		break;		
	}
