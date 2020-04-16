<?php
    require_once("../../CapaDatos/Conexion.php");	
	class Archivos
	{
		private $nombreArchivo;
		private $pesoArchivo;
		private $rutaArchivo;
		private $estadoArchivo;
		
		function __construct(){
			$nombreArchivo = "";
			$pesoArchivo = 0;
			$rutaArchivo = "";
			$estadoArchivo = 1;
		}
		
		function set_nombreArchivo($valor){
			$this->nombreArchivo = $valor;			
		}
		function set_pesoArchivo($valor){
			$this->pesoArchivo = $valor;
		}
		function set_rutaArchivo($valor){
			$this->rutaArchivo = $valor;
		}
		function set_estado($valor){
			$this->estadoArchivo = $valor;
		}
		private function sql($cSql){
			$objetoConsultaSql = new Conexion();
			return $objetoConsultaSql->consultar($cSql);
		}

		public function fun_guardarArchivo(){
			$datos = get_object_vars($this);
			$datos = json_encode($datos);
			$consulta = "SELECT * FROM fun_guardararchivojose($$".$datos."$$)";
			return $this->sql($consulta);
		}
		public function fun_buscarArchivos($filtro){
			$consulta = "SELECT * FROM fun_buscararchivojose($$".$filtro."$$)";
			return $this->sql($consulta);
		}
	}