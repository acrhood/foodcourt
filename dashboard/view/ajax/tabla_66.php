<?php
if (sizeof($transaccion) > 0) {
  echo '<li class="list-group-item d-flex">
      <div class="row" style="width: 100%">
        <div class="col-sm-2">
          <div class="form-check" align="center">
            <input type="checkbox" class="form-check-input" id="allcatego" value="0">
            <!-- <label class="form-check-label" for="allcatego">Habilitar opción: <b>Todos</b></label> -->
          </div>
        </div>
        <div class="col-sm-10">
          <label for="allcatego">Todos</label>
        </div>';
            echo '<div class="col-sm-6 text-right">
            </div>
          </div>
      </li>';
    foreach ($transaccion as $obj) {
        echo '<li class="list-group-item d-flex">
        		<div class="row" style="width: 100%">
        			<div class="col-sm-2">';
	                if ($obj[2] != null) {
	                	echo '<img src="'.$obj[2].'" class="img-fluid" alt="Responsive image">';
	                } else {
	                	echo 'No imagen';
	                }

	                echo '</div>
	                <div class="col-sm-4">'
	                	.$obj[1].
	                '</div>
	                <div class="col-sm-6 text-right">
	                	<span data-feather="edit-3" class="pointer editcatego" tprod="'.$obj[3].'" id="s'.$obj[0].'" ></span>
	                	<span data-feather="x-circle" class="pointer delcatego" style="color: #FC3F46" tprod="'.$obj[3].'" id="s'.$obj[0].'" ></span>
	                </div>
                </div>
            </li>';
    }
}else{ ?>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        No hay datos diponibles
    </li>
<?php }
?>
