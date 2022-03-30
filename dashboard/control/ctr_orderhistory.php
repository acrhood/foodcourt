<?php
	    require_once 'model/m_general.php';
	    $kakaroto = new _general();

	    if (!isset($_REQUEST['accion'])) {
	   	require '../_config/mySmarty.php';

	   	$smarty  = new mySmarty();
	   	$smarty->setModule('dashboard');
			$pg = $smarty->fetch('../view/navbar.php');
			$nav = $smarty->fetch('../view/sidebar.php');
			$sty = $smarty->fetch('../view/styles.php');
			$scr = $smarty->fetch('../view/scripts.php');

			$smarty->assign('SIDE',$pg);
			$smarty->assign('NAV',$nav);
			$smarty->assign('STY',$sty);
			$smarty->assign('SCR',$scr);
	   	$smarty->display('orderhistory.tpl');
	   }else{
	   $pagina = 0;
	   	switch ($_REQUEST['accion']) {
	   		case 1:
	   			$pagina = 1;
	   			$miscelaneos = $kakaroto->kamehameha('',99,'@@impresa')[0];
	   			$transaccion = $kakaroto->kamehameha('',19,'"'.$_REQUEST['id'].',@@impresa');
	   			$datos = $transaccion[0];
	   			$ocultar = '';
	   			$oc = '';
	   			$repetir = 0;//isset($_REQUEST['x'])
	   			require_once 'view/ajax/facturas/facturapv.php';
	   			break;
	   	}
		if(!$pagina){
		   	if (is_array($transaccion)){
				$marcas = $transaccion;
				$succed = 1;
				}else{
					$marcas = array('ERROR'=>$transaccion);
					$succed = 0;
				}

				$salida = array('succed'=>$succed);
				array_push($salida, $marcas);
				print_r(json_encode($salida));

		   }
	    }

?>
