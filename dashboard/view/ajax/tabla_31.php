<?php
	$str = '';
	$badge = '';
	$color = '';
	$pago = '';
	$serv = $entr = $envi = '';
	$acc1 = $acc2 = $acc3 = '';

	if (sizeof($transaccion) > 0) {
		foreach ($transaccion as $obj) {
            if ($obj[16] == 2) {
                $envi = 'Enviar';
                $entr = 'Entregar';
                $serv = 'Servir';
                $acc1 = 'enviar';
                $acc2 = 'entregar';
                $acc3 = 'servir';
            }else if ($obj[16] == 3) {
                $serv = $entr = $envi = 'Completar';
                $acc1 = $acc2 = $acc3 = 'completar';

            }else if ($obj[16] == 4) {
                $serv = $entr = $envi = 'Finalizar';
                $acc1 = $acc2 = $acc3 = 'finalizar';
            }

						if ($obj[19] == 2) {
							$pago = '<label style="background: #6610f2" class="badge text-white text-wrap" style="width: 5rem;">Tarjeta</label>';
						} else if ($obj[19] == 1) {
							$pago = '<label style="background: #49b863" class="badge text-white text-wrap" style="width: 5rem;">Efectivo</label>';
						} else {
							$pago = '<label style="background: #FF6D4E" class="badge text-white text-wrap" style="width: 5rem;">Sinpe Móvil</label>';
						}

            if ($obj[2] == 1) {
                $badge = '<label class="badge badge-primary text-white text-wrap" style="width: 3rem;">express</label> '.$pago;
                $estado = '<a class="asign" href="#" id="e'.$obj[0].'" accion="'.$acc1.'">'.$envi.'</a></p></div>';
                $color = '#007bff';
            }else if ($obj[2] == 2){
                $badge = '<label class="badge badge-dark text-white text-wrap" style="width: 3rem;">recoge</label> '.$pago;
                $estado = '<a class="asign" href="#" id="i'.$obj[0].'" accion="'.$acc2.'">'.$entr.'</a></p></div>';
                $color = '#343a40';
            }else{
                $badge = '<label class="badge badge-warning text-wrap" style="width: 3rem;">servido</label> '.$pago;
                $estado = '<a class="asign" href="#" id="s'.$obj[0].'" accion="'.$acc3.'">'.$serv.'</a></p></div>';
                $color = '#ffc107';
            }

            if ($obj[16] == 2) {

							echo '<div class="media text-muted pt-3" id="d'.$obj[0].'"><svg class="mr-2 rounded" width="32" height="32" focusable="false"><rect id="s'.$obj[0].'" width="100%" height="100%" fill="'.$color.'"></rect></svg><p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><strong class="d-block text-dark">'.$obj[6].'</strong><b>Nº: <a id="z'.$obj[0].'" isexpress="'.$obj[2].'" idpago="'.$obj[17].'" fecha="'.$obj[4].'" class="detailOrd" data-toggle="modal" data-target="#modal-order" href="#!">'.$obj[17].'</a> | </b> | </b> <b>Telefono:</b> '.$obj[7].'</b> | ';
						if ($obj[2] == 1) { echo '<b>Direccion:</b> '.$obj[10].', '.$obj[11].' | <b>Distancia:</b> '.$obj[14].'kms | '; }
							echo '<b>Total</b>: '.$obj[15].' | '. $badge.' | Hace <b id="t'.$obj[0].'" fecha="'.$obj[4].'" class="timeid"></b> | '.$estado;
            }else if ($obj[16] == 3 || $obj[16] == 4) {
                echo '<div class="media text-muted pt-3" id="d'.$obj[0].'"><svg class="mr-2 rounded" width="32" height="32" focusable="false"><rect id="s'.$obj[0].'" width="100%" height="100%" fill="'.$color.'"></rect></svg><p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><strong class="d-block text-dark">'.$obj[6].'</strong><b>Nº: '.$obj[17].' | </b> <b>Telefono:</b> '.$obj[8].'</b> | <b>Direccion:</b> '.$obj[10].', '.$obj[11].' | <b>Distancia:</b> '.$obj[14].'kms | <b>Total</b>: '.$obj[15].' | '. $badge.' | Hace <b id="t'.$obj[0].'" fecha="'.$obj[4].'" class="timeid"></b> | '.$estado;
            }

		}
	}else{ ?>
        <div align="center">No hay datos disponibles</div>
    <?php }

 ?>
