<?php
    class Conexion
	{
		public $servidor = "10.27.113.159";
		public $puerto = "5432";
		public $usuario = "sysexhibicion";
		public $password = "979fe4c465b2ed68f700ec7079cb120c";
		public $baseDatos = "pruebas";
		
		function conectar(){
			return pg_connect("host = $this->servidor  port = $this->puerto dbname = $this->baseDatos 
			                  user = $this->usuario password = $this->password");
		}
		function consultar($cSql){
			$conexion = $this->conectar();
			return pg_query($conexion, $cSql);
		}
	}

