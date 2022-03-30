$(function(){
	$("#data-table-orderhistorys").dataTable({
        bFilter: false,
        bScrollInfinite: true,
        bSort: false,
        bLengthChange: false,
        order: [],
        bPaginate: false,
        info: false
    });

    var orderhistory = arr('login',6,'',32,'"","",@@impresa',0,1,$("#orderhistory"));
    console.log(orderhistory);
    feather.replace();

});

$(document).on("keyup","#vsearch",function(){
	var vsearch = $(this).val();

	var p = arr('login',6,'',32,'"'+vsearch+'","",@@impresa',0,1,$("#orderhistory"));
    console.log(p);
});

$(document).on("change","#vsearchdate",function(){
	var vsearchdate = $(this).val();

	var a = arr('login',6,'',32,'"","'+vsearchdate+'",@@impresa',0,1,$("#orderhistory"));
    console.log(a);
});

$(document).on("click",".detailOrd",function(){
	var id = $(this).attr('id').substr(1);
	var idpago = $(this).attr('idpago');
	var fecha = $(this).attr('fecha');
	var isexpress = $(this).attr('isexpress');
	var direnv = $(this).attr('direccion');
	var badge = '';

	if (isexpress == 1) {
		badge = '<span class="badge badge-primary">express</span>'
	}else if (isexpress == 2) {
		badge = '<span class="badge badge-dark">recoge</span>'
	}else{
		badge = '<span class="badge badge-warning">servido</span>'
	}

	$("#numOrd").html(idpago);
	$("#fechaOrd").html(fecha);
	$("#isexpress").html(badge);
	$("#direnv").html(direnv);


	console.log(arr('login',4,'',34,id,0,0,0));
	var orderhistory = arr('login',6,'',34,id,0,1,$("#detalleOrd"));
});

$(document).on('click', '.print', function() {
    var idpago = $(this).attr('id');
    window.open('orderhistory?accion=1&id='+idpago+'"');
});

function validar (varreglo,vmodulo) {

	var salida = {}

		/*VALIDACION FRONT END*/

	switch(vmodulo['modulo']) {
		case 'orderhistory':
			if (vmodulo['tip'] == '') {
				err = validarorderhistory();
				if ( err ) {
					return err;
				}
			}

			break;
		default:
			return 'Módulo no Existente';
			break;
	}

	salida = odin(varreglo,"f"+vmodulo['modulo']+"s");
	return salida;

}

function validarorderhistory() {


	return false;
}

function endDetail(vid,vacc,modulo){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'orderhistory':
			vmodulo['sel'] = '';
			vmodulo['tbl'] = 3;
			vmodulo['where'] ='';
			break;
		default:
			return 'Módulo no Existente';
			break;
	}

	return vmodulo;
}

function cargarSintax(){
	var arr = {}

	arr['sel'] = '';
	arr['tbl'] = 4;
	arr['where'] = '';

	return arr;
}
