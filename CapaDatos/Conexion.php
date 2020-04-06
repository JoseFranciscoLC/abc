<?php
    class Conexion
	{
		public $servidor = "localhost";
		public $puerto = "5432";
		public $usuario = "postgres";
		public $password = "123";
		public $baseDatos = "postgres";		
		function conectar(){
			return pg_connect("host = $this->servidor  port = $this->puerto dbname = $this->baseDatos user = $this->usuario password = $this->password");
		}
		function consultar($cSql){
			$conexion = $this->conectar();
			return pg_query($conexion, $cSql);
		}
	}

