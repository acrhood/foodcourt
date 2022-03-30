<?php
require_once 'model/m_login.php';
$log = new _login();

	if (sizeof($transaccion) > 0) {

		foreach ($transaccion as $obj) {
			echo '	<li class="list-group-item p-1">
		      <div class="row p-0">
		        <div class="col col-sm-4 p-0" align="center">'.$obj[4].'
		        <div class="col p-0" align="center">'; ?>
					<?php $options = $log->kamehameha('', 113, $obj[8].',"'.$obj[10].'",@@impresa,'.$obj[9].','.$obj[7]);
						foreach ($options as $optn) {
							echo '<span class="badge badge-light" style="font-weight: 300">'.$optn[0].'</span>';
						}
					?>

					<?php
					echo '</div>
		        </div>
		        <div class="col col-sm-4 p-0" align="center">'.$obj[5].'</div>
		        <div class="col col-sm-4 p-0" align="center">'.$obj[6].'</div>
		      </div>
		    </li>';
		}

	}

 ?>
