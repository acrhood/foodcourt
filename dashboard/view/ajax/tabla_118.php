<?php
if (sizeof($transaccion) > 0) {
	foreach ($transaccion as $obj) {
		echo '<li class="list-group-item d-flex justify-content-between align-items-center list_prices"
		db="1" name="'.$obj[1].'" price="'.$obj[2].'">
			<span>'.$obj[1].' - ¢'.$obj[2].'</span>
			<span data-feather="x-circle" id="p'.$obj[0].'" class="text-danger pointer delete_price" style="font-size: 1px"></span>
		</li>';
	}
} else {
	echo '<p>No hay precios agregados</p>';
} ?>
