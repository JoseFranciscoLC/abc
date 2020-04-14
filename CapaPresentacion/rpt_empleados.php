<?php

require_once("../CapaDatos/Conexion.php");
require_once("../NuevosRecursos/lib/fpdf.php");

$consultaSql = new Conexion();
$sentenciaSql = "SELECT * FROM fun_buscarempleados2jose()";
$consulta = $consultaSql-> consultar($sentenciaSql);
// $empleado = new Empleados();
// $datos = array();
// $datos = $_REQUEST['pdf'];
$pdf = new FPDF();

// $datos = $empleado->fun_buscarEmpleados();

$pdf->AddPage();
$pdf->SetFont('Arial', 'B',16);
$pdf->Cell(50, 5,'', 0, 0, 'C', 0);
$pdf->Cell(100, 5,'LISTA DE EMPLEADOS', 0, 0, 'C', 0);
$pdf->LN(15);
$pdf->SetFont('Arial', 'B',11);
// $pdf->Cell(40,10,"prueba 12");
$pdf->Cell(20, 10, utf8_decode('Número'), 1, 0, 'C', 0);
$pdf->Cell(26, 10, 'Nombre', 1, 0, 'C', 0);
$pdf->Cell(38, 10, 'Apellido Paterno', 1, 0, 'C', 0);
$pdf->Cell(38, 10, 'Apellido Materno', 1, 0, 'C', 0);
$pdf->Cell(13, 10, 'Edad', 1, 0, 'C', 0);
$pdf->Cell(17, 10, 'Genero', 1, 0, 'C', 0);
$pdf->Cell(45, 10, utf8_decode('Dirección'), 1, 1, 'C', 0);

$pdf->SetFont('Arial', '',9);
while ($row = pg_fetch_array($consulta)) {
	$pdf->Cell(20, 10,$row['numero_empleado'], 1, 0, 'L', 0);
	$pdf->Cell(26, 10, utf8_decode($row['nombre']), 1, 0, 'L', 0);
	$pdf->Cell(38, 10, utf8_decode($row['apellidopaterno']), 1, 0, 'L', 0);
	$pdf->Cell(38, 10, utf8_decode($row['apellidomaterno']), 1, 0, 'L', 0);
	$pdf->Cell(13, 10, $row['edad'], 1, 0, 'L', 0);
	$pdf->Cell(17, 10, utf8_decode($row['genero']), 1, 0, 'L', 0);
	$pdf->Cell(45, 10, utf8_decode($row['direccion']), 1, 1, 'L', 0);
}

$pdf->Output('EmpleadosPrueba.pdf', 'D');
