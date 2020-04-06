<?php
    require_once("../../CapaDatos/Conexion.php");	
	class Empleados
	{
		private $numeroEmpleado;
		private $nombre;
		private $apellidoPaterno;
		private $apellidoMaterno;
		private $direccion;
		private $genero;
		private $edad;
		private $estado;
		
		function __construct(){
			$numeroEmpleado = 0;
			$nombre = "";
			$apellidoPaterno = "";
			$apellidoMaterno = "";
			$direccion = "";
			$genero = "";
			$edad = 0;
			$estado = 0;
		}
		
		function set_numeroEmpleado($valor){
			$this->numeroEmpleado = $valor;
		}
		function set_nombre($valor){
			$this->nombre = $valor;
		}
		function set_apellidoPaterno($valor){
			$this->apellidoPaterno = $valor;
		}
		function set_apellidoMaterno($valor){
		    $this->apellidoMaterno = $valor;
		}
		function set_direccion($valor){
			$this->direccion = $valor;
		}
		function set_genero($valor){
			$this->genero = $valor;
		}
		function set_edad($valor){
			$this->edad = $valor;
		}
		function set_estado($valor){
			$this->estado = $valor;
		}
		
		private function sql($cSql){
			$objetoConsultaSql = new Conexion();
			return $objetoConsultaSql-> consultar($cSql);
		}
		public function fun_guardarEmpleado(){
			$datos = get_object_vars($this);
			$datos = json_encode($datos);
			$consulta = "SELECT * FROM fun_guardarempleadojose($$".$datos."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarEmpleados(){
			$consulta = "SELECT * FROM fun_buscarempleados2jose()";
			return $this->sql($consulta);
		}
        public function fun_eliminarEmpleado($id){
            $consulta = "SELECT * FROM fun_eliminarempleadojose($$".$id."$$)";
            return $this->sql($consulta);
        }
		public function fun_obtenerDatosEmpleado($id){
			$consulta = "SELECT * FROM fun_obtenerdatosempleadojose($$".$id."$$)";
			return $this->sql($consulta);
		}
		public function fun_actualizarDatos($id){
			$datos = get_object_vars($this);
			$datos = json_encode($datos);
			$consulta = "SELECT * FROM fun_actualizardatosempleadojose($$".$id."$$, $$".$datos."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarEmpladoNombreApellidos($filtro){
			$consulta = "SELECT * FROM fun_buscarempleadopornombreoapellidosjose($$".$filtro."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarEmpleadoNombre($filtro){
			$consulta = "SELECT * FROM fun_buscarempleadopornombrejose($$".$filtro."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarEmpleadoApellidoPaterno($filtro){
			$consulta = "SELECT * FROM fun_buscarempleadoporapellidopaternojose($$".$filtro."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarEmpleadoApellidoMaterno($filtro){
			$consulta = "SELECT * FROM fun_buscarempleadoporapellidomaternojose($$".$filtro."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarEmpleadoActivoNombreApellidos($nombre, $apellidoP, $apellidoM){
			$consulta = "SELECT * FROM fun_buscarempleadoactivopornombreapellidosjose($$".$nombre."$$, $$".$apellidoP."$$, $$".$apellidoM."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarEmpleadoActivoNombreApellidoPaterno($nombre, $apellidoP){
			$consulta = "SELECT * FROM fun_buscarempleadoactivopornombreapellidopaternojose($$".$nombre."$$, $$".$apellidoP."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarEmpleadoActivoNombreApellidoMaterno($nombre, $apellidoM){
			$consulta = "SELECT * FROM fun_buscarempleadoactivopornombreapellidomaternojose($$".$nombre."$$, $$".$apellidoM."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarEmpleadoActivoApellidos($apellidoP, $apellidoM){
			$consulta = "SELECT * FROM fun_buscarempleadoactivoporapellidosjose($$".$apellidoP."$$, $$".$apellidoM."$$)";
			return $this->sql($consulta);
		}
	}