<?php

$color = '';

if (sizeof($transaccion) > 0) {
	foreach ($transaccion as $obj) {
	if ($obj[16] == 1) {
	 	$color = 'success';
	}else if ($obj[16] == 2) {
		$color = 'warning';
	}else if ($obj[16] == 3) {
		$color = 'primary';
	}else if ($obj[16] == 6) {
		$color = 'danger';
	}else{
		$color = 'info';
	}
		// <td><input type="checkbox" class="rdItem"></td>
		echo '<tr>
				<td align="left"><span data-feather="printer" class="print" id="'.$obj[18].'"></span></td>
				<td>';
          		if ($obj[2] == 1){ echo '<span class="text-primary">•</span>'; }
          		elseif($obj[2] == 2){ echo '<span class="text-dark">•</span>'; }
          		else{ echo '<span class="text-warning">•</span>'; }

          echo '&nbsp;<a href="#" class="detailOrd" id="o'.$obj[0].'" idpago="'.$obj[18].'" direccion="'.$obj[10].', '.$obj[11].'" data-toggle="modal" data-target="#modal-order"'.
				'fecha="'.$obj[4].'" isexpress="'.$obj[2].'">ORD-#'.$obj[18].'</a></td>
				<td>'.$obj[6].'</td>
				<td>'.$obj[3].'</td>
				<td>'.$obj[15].'</td>
				<td><span class="badge badge-'.$color.'">'.$obj[17].'</span><?php</td>
				<td><span>'.$obj[19].'</span></td>
				<td align="center">';
					if ($obj[20] == 1){ echo '<label style="width:40%; background: #49b863" class="mt-0 r-right d-inline badge text-white text-wrap" style="width: 5rem;">Ef</label>'; }
					elseif($obj[20] == 2){ echo '<label style="width:40%; background: #6610f2" class="mt-0 r-right d-inline badge text-white text-wrap" style="width: 5rem;">T</label>'; }
					else{ echo '<label style="width:40%; background: #FF6D4E" class="mt-0 r-right d-inline badge text-white text-wrap" style="width: 5rem;">SM</label>'; }
					if ($obj[2] == 1){ echo '<label style="width:40%" class="mb-0 r-left d-inline badge text-white bg-primary text-wrap" style="width: 5rem;">Ex</label>'; }
					elseif($obj[2] == 2){ echo '<label style="width:40%" class="mb-0 r-left d-inline badge text-white bg-dark text-wrap" style="width: 5rem;">R</label>'; }
					else{ echo '<label style="width:40%" class="mb-0 r-left d-inline badge bg-warning text-dark text-wrap" style="width: 5rem;">S</label>'; }
				echo '</td>
			</tr>';
	}
}else{ ?>
	<tr>
		<td colspan="6" class="text-center">No hay datos disponibles</td>
	</tr>
<?php } ?>
