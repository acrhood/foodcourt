var suc_madre = 1;

$(function(){
	'use strict'
  	feather.replace();

    generarSucc();

    $("#mchange").change(function(){
        mantenimiento('main',3,$(this).val());
        mantenimiento('login', 13, '');
        notification('Se cambío la sucursal por ' + $("option:selected", this).text(), 'info', 3500);
        setTimeout(function(){ location.reload() }, 1000);
        // var currentLocation = window.location;
        // console.log('currentLocaton', currentLocation);
        // window.location.href = 'http://localhost/foodcourt_server/dashboard/main';
    });

    // obtener direccion
    var dir = window.location.href
    dir = dir.split('/');
    dir = dir[5];

    switch(dir) {
    	case 'main':
    	case 'ordenes':
			case 'ordenesauto':
			case 'orderhistory':
    	case 'allordenes':
    	case 'orderhistory':
    	case 'productos':
			case 'cupones':
			case 'setting':
    	case 'reportes':
    		$(".nav-link").removeClass('bg-light');
    		$("a.nav-link[href='"+dir+"']").addClass('bg-primary text-white');
    		break;
    	default:
    		$(".nav-link").removeClass('bg-primary text-white');
    		break;
    }

		$('[data-toggle="tooltip"]').tooltip();

}); //END FUNCTION

	$(document).on('click', '#menu-toggle', function(e) {
			e.preventDefault();
			$("#wrapper").toggleClass("toggled");
	});

    $(document).ready( function() {
        var a = arr('login',4,'nombre',5,'id = @@usr',0,0,0)[0][0];
        // console.log('usuario', a);
        $("#nuser").html(a);
    });


function generarSucc() {
    arr('login',6,'id, nombre',39,'madre_sucursales = ' + suc_madre,0,1,$("#mchange"));
    var impresa = mantenimiento('login', 13, '')[0]['ERROR'];
    $("#mchange").val(impresa);
}
