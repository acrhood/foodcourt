<?php
require_once 'model/m_login.php';
$log = new _login();

$idorden = 0;
$idprod = '';
$color = '';
$badge = '';
$estado = '';

if (sizeof($transaccion) > 0) {
	foreach ($transaccion as $obj) {
		if ($obj[0] != $idorden) {

			if ($obj[5] == 1) {
				$badge = '<small><label class="badge badge-primary text-white text-wrap" style="width: 3rem;">express</label></small>';
				$estado = '<li class="list-group-item p-1"><a class="asign" href="#" id="e'.$obj[0].'">Enviar</a></li>';
				$color = 'primary';
			}else if ($obj[5] == 2) {
				$badge = '<small><label class="badge badge-dark text-white text-wrap" style="width: 3rem;">recoge</label></small>';
				$estado = '<li class="list-group-item p-1"><a class="asign" href="#" id="i'.$obj[0].'">Entregar</a></li>';
				$color = 'dark';
			}else{
				$badge = '<small><label class="badge badge-warning text-wrap" style="width: 3rem;">servido</label></small>';
				$estado = '<li class="list-group-item p-1"><a class="asign" href="#" id="s'.$obj[0].'">Servir</a></li>';
				$color = 'warning';
			}
			echo '<div class="card mb-3" align="center">
				<h6 class="card-header"># factura: '.$obj[8].'</h6>
				<div class="card-body">
					<h6 class="card-title">'.$obj[2].'<br>
						'.$badge.'
					</h6>
					<ul class="list-group list-group-flush">';
						foreach ($transaccion as $nom) {
							if ($obj[0] == $nom[0]) {
								echo '<li class="list-group-item p-1">
									<div class="row p-0">
										<div class="col col-sm-6 p-0">'.$nom[4].'</div>
										<div class="col col-sm-6 p-0" align="left">'.$nom[3].'</div>
										<div class="col offset-sm-6 col-sm-6 p-0" align="left">'; ?>
										 <?php $options = $log->kamehameha('', 113, $nom[9].',"'.$obj[11].'",@@impresa,'.$nom[10].',2');
											// print_r($options);
											foreach ($options as $optn) {
												echo '<span class="badge badge-light" style="font-weight: 300">'.$optn[0].'</span>';
											}
										?>

										<?php
										echo '</div>
									</div>
								</li>';
							}
						}
					echo '</ul>
				</div>
				<div class="card-footer border-'.$color.' text-center">
					<small class="text-muted">Hace <b id="t'.$obj[0].'" fecha="'.$obj[1].'" class="timeid">123</b></small><br>
					<button class="btn btn-sm btn-outline-primary print" id="'.$obj[8].'">
						<small>IMPRIMIR ORDEN</small>
					</button>
				</div>
			</div>';
			$idorden = $obj[0];
		}
	}
}else{ ?>
    <div align="center">No hay datos disponibles</div>
<?php }


?>
