Dropzone.autoDiscover = false;
var myDropzone;

$(function(){
	myDropzone = new Dropzone("#img-upload", {
		url: '../upload.php',
		autoProcessQueue:false,
		maxFilesize: 3,
		maxFiles: 1,
		resizeWidth: 850,
		addRemoveLinks:true,
		init: function() {
		  this.on("uploadprogress", function(file, progress) {
		    console.log("File progress", progress);
		  });
		}
	});

	$("#data-table-cuponess").dataTable({
        bFilter: false,
        bScrollInfinite: true,
        bSort: false,
        bLengthChange: false,
        order: [],
        bPaginate: false,
        info: false
    });

	loadCupones();
	$("#entrefechas").click();

    var options = {
		url: "../assets/json/productos.php",
		getValue: "nombre",
		list: {
			match: {
				enabled: true
			},
			onSelectItemEvent: function() {
				var value = $("#vsearchprod").getSelectedItemData().id;
				$("#hidprod").val(value).trigger("change");
				var src = $("#vsearchprod").getSelectedItemData().url;
				$("#hsource").val(src).trigger("change");
			}
		},
		template: {
			type: "iconRight",
			fields: {
				iconSrc: "url"
			}
		},
		theme: "default"
	};

	$("#vsearchprod").easyAutocomplete(options);
});

$(document).on('click', '#cleanPub', function() {
	$("#fdesde").val('');
	$("#tdesde").val('');
	$("#fhasta").val('');
	$("#thasta").val('');
});

$(document).on('click', '#cleanCupo', function() {
	cleanCupo();
});

$(document).on('click', '.sum', function() {
	var idcupo = $("#hidcupo").val() == '' ? 0 : $("#hidcupo").val();
	var idprod = $(this).attr('prod');
	console.log('idcupo', idcupo, '| idprod', idprod);
	var cant = $("#c"+idprod).val();
	console.log('cant', cant);
	cant ++;
	$("#c"+idprod).val(cant);
	if (idcupo != 0 ) {
		console.log(arr('login',4,'',83,'2,0,'+idcupo+','+idprod+','+cant,0,0,0));
	}
});

$(document).on('click', '.rest', function() {
	var idcupo = $("#hidcupo").val() == '' ? 0 : $("#hidcupo").val();
	var idprod = $(this).attr('prod');
	console.log('idcupo', idcupo, '| idprod', idprod);
	var cant = parseInt($("#c"+idprod).val());
	console.log('cant', cant);
	if(cant == 1){
		console.log('validate');
		$("#c"+idprod).val(1);
	}else{
		console.log('non validate');
		cant --;
		$("#c"+idprod).val(cant);
		if (idcupo != 0 ) {
			console.log(arr('login',4,'',83,'2,0,'+idcupo+','+idprod+','+cant,0,0,0));
		}
	}
});

$(document).on('click', '.optpulic', function() {
	var id = $(this).attr('id');
	if (id == 'entrefechas') {
		$("#d"+id).show();
		$("#dpordias").hide();
	}else{
		$("#d"+id).show();
		$("#dentrefechas").hide();
	}
});
// $(document).on('keyup', '#vsearchprod', function() {
// 	var a = arr('login',4,'',29,'"","0,10",@@impresa',0,0,0)[0];
// 	console.log('a',a);
// 	var json = Object.assign({}, a);
// 	console.log('json',json);
// });

$(document).on('click', '.oldcupons', function() {
	$("#oldcupons").modal('show');
	loadCupdesactivados();
	// ACTIVAR O DESACTIVAR CUPONES CON ESTADO 1 - 0, MODIFICAR EL ASIGNAR LA FECHA DE PUBLICACIÓN
});

$(document).on('click', '.activateCupon', function() {
	var idprod = $(this).attr('id');
	var a = arr('login',4,'',98,idprod+',1',0,0,0);
	console.log(a);
	loadCupdesactivados();
	loadCupones();
});

$(document).on('click', '.desactivateCupons', function() {
	var idprod = $(this).attr('id');
	var a = arr('login',4,'',98,idprod+',0',0,0,0);
	console.log(a);
	loadCupdesactivados();
	loadCupones();
});

$(document).on('click', '.imgcupon', function() {
	cleanCupo();
	limpiaPubliCupon();
	var id = $(this).attr('id').substr(1);
	$("#e"+id).prop('checked', true);
	$(".mod").attr('id',id);
	$(".del").attr('id',id);
});

$(document).on('click', '.rmimg', function() {
	var id = $(this).attr('id').substr(1);
	var a = arr('login',4,'',88,id,0,0,0);
	console.log(a[0]);
	if (a[0] > 0) {
		$("#img"+id).remove();
		notification('Imagen eliminada correctamente', 'success', 3500);
		$("#img-upload").html('<div class="dz-default dz-message"><span>Arrastre imágenes aquí para subirlas</span></div>');
	}else{
		notification('No se puede eliminar esta imagen', 'danger', 3500);
	}

});

$(document).on("click",".del",function(){
	var vid = $(this).attr('id') == undefined ? 0 : $(this).attr('id');
	if (vid != 0) {
		var a = arr('login',4,'',11,'3,'+vid+',"","",0,0,0,0,"0000-00-00 00:00:00","0000-00-00 00:00:00",0,"",0,@@impresa,0',0,0,0);
		console.log(a);
		loadCupones();
	}else{
		notification('Debe primero seleccionar un producto', 'danger', 3500);
	}
});

$(document).on("click",".mod",function() {
	limpiaPubliCupon();
	var vid = $(this).attr('id') == undefined ? 0 : $(this).attr('id');
	console.log('vid', vid);
	if (vid != 0) {
		var a = arr('login',4,'',86,vid,0,0,0)[0][0];
		// console.log(a);
		var b = arr('login',4,'*',87,'idcupon = '+ vid +' and id > 0',0,0,0)[0];
		console.log('b');
		console.log(b);
		console.log(b[0]);
		console.log(b[0][0]);
		var str =  '<input type="hidden" name="idcupon">'+
					'<div id="img'+b[0][0]+'" class="dz-preview dz-image-preview" align="center">'+
						'<div class="dz-image">'+
							'<img data-dz-thumbnail width="100%" src="'+b[0][2]+'">'+
						'</div>'+
						'<a class="rmimg" style="color: red; cursor: pointer" id="i'+b[0][0]+'" href="#!" data-dz-remove="">Eliminar</a>'+
					'</div>';
		$("#img-upload").html(str);

		if (a[13] == 1) {
			$("#entrefechas").click();
		}else{
			$("#pordias").click();
		}

		var hid_ = a[0];
		var nom_ = a[1];
		var des_ = a[2];
		var pre_ = a[3];
		var imp_ = a[4];
		var imv_ = a[3] * (a[4]/100);
		var tot_ = parseFloat(a[3]) + parseFloat(imv_);
		var ftdesde = a[5];
		var tdesde = a[6];
		var fthasta = a[7];
		var thasta = a[8];
		// var hvidpub = a[11];
		var hvidpub = a[10];

		// console.log('a[12]',a[12]);
		var dias = a[12].split(',');
		if (dias.length > 0) {
			for (var i = 0; i < dias.length; i++) {
				// console.log('dias['+i+']',dias[i]);
				var dia = dias[i].split('_')[0];
				// console.log('dia',dia);
				var horario = dias[i].split('_')[1];
				// console.log('horario',horario);
				var inicio = String(horario).split('-')[0];
				// console.log('inicio',inicio);
				var fin = String(horario).split('-')[1];
				// console.log('fin',fin);
				$("#"+dia+"_a").val(inicio);
				$("#"+dia+"_c").val(fin);

				$(".day"+dia).click();

			}
		}
		console.log('dias',dias);
		console.log('dias.length',dias.length);
		console.log('hvidpub', hvidpub);

		$("#hidcupo").val(hid_);
		$("#nom_cupo").val(nom_);
		$("#desc_cupo").val(des_);
		$("#prec_cupo").val(pre_);
		$("#ivi_cupo").val(imp_);
		$("#imv_cupo").val(imv_);
		$("#tot_cupo").val(tot_);
		$("#fdesde").val(ftdesde);
		$("#tdesde").val(tdesde);
		$("#fhasta").val(fthasta);
		$("#thasta").val(thasta);
		$("#hvidpub").val(hvidpub);

		// CARGA DETALLE CUPON
		arr('login',6,'',85,vid,0,1,$("#listprod"));
		feather.replace();

		$("#addCupo").text('Editar');
		$("#addCupo").removeClass('btn-primary');
		$("#addCupo").addClass('btn-warning');
		$("#addCupo").attr('id','editCupo');
	}else{
		notification('Debe primero seleccionar un producto', 'danger', 3500);
	}

});

$(document).on('change', '.week_chck', function() {
	var day = $(this).attr('day');
	// console.log('day', day);
	if ( $(this).prop('checked') == true ) {
		$("."+day+"").attr('disabled', false);
	}else{
		$("."+day+"").attr('disabled', true);
		$("."+day+"").val('');
	}
});

$(document).on('click', '.optpulic', function() {
	var opt = $(this).val();
	$("#hchkcupon").val(opt);
});

$(document).on('click', '#addCupo', function() {
	var dias = [];
	var optpub = $("#hchkcupon").val();

	var nom_ = $("#nom_cupo").val();
	var des_ = $("#desc_cupo").val();
	var pre_ = $("#prec_cupo").val();
	var imp_ = $("#ivi_cupo").val() == '' ? 0 : $("#ivi_cupo").val();
	var fdesde = $("#fdesde").val() == '' ? '0000-00-00' : $("#fdesde").val();
	var fhasta = $("#fhasta").val() == '' ? '0000-00-00' : $("#fhasta").val();
	var tdesde = $("#tdesde").val() == '' ? '00' : $("#tdesde").val();
	var thasta = $("#thasta").val() == '' ? '00' : $("#thasta").val();
	var ftdesde = fdesde + " " + tdesde + ':00';
	var fthasta = fhasta + " " + thasta + ':00';

	// mon +'/'+ $("#mon_a").val() +'-'+ $("#mon_c").val();
	// tue +'/'+ $("#tue_a").val() +'-'+ $("#tue_c").val();
	// wed +'/'+ $("#wed_a").val() +'-'+ $("#wed_c").val();
	// thu +'/'+ $("#thu_a").val() +'-'+ $("#thu_c").val();
	// fri +'/'+ $("#fri_a").val() +'-'+ $("#fri_c").val();
	// sat +'/'+ $("#sat_a").val() +'-'+ $("#sat_c").val();
	// sun +'/'+ $("#sun_a").val() +'-'+ $("#sun_c").val();
	// HACER ESTO EN APP
	$(".week_chck").each(function(index){
		var dia = $(this).attr('day')
		$(this).is(':checked') ? dias.push(dia+'_'+$("#"+dia+"_a").val()+'-'+$("#"+dia+"_c").val()) : 1;
	});// CARGA SOLO LOS SELECCIONADOS
	console.log(dias);

	console.log('optpub', optpub);

	var valAddCupo = validaAddCupo();
	if (!valAddCupo) {
		console.log('1,0,"'+nom_+'","'+des_+'",'+pre_+','+imp_+',0,0,"'+ftdesde+'","'+fthasta+'",0,'+dias+',@@impresa');
		// CAMBIAR TODO CUPONES A PRODUCTO
		var a = arr('login',4,'',11,'1,0,"'+nom_+'","'+des_+'",'+pre_+','+imp_+',0,0,"'+ftdesde+'","'+fthasta+'",0,"'+dias+'",'+optpub+',@@impresa,0',0,0,0);
		console.log('insert 11:', a);
		if (a['succed']) {
			$(".listprod").each( function() {
				var idprod = $(this).attr('id').substr(2);
				console.log('id', idprod);
				var cant = $("#c"+idprod).val();
				console.log('cant'+idprod, cant);
				var b = arr('login',4,'',83,'1,0,'+a[0][0][0]+','+idprod+','+cant,0,0,0);
				console.log('b', b);
				// if (b['succed']) {
				// 	$("#listprod").html('<div class="col-12 text-center p-2 mjsempty">No hay datos disponibles</div>');
				// }else{
				// 	notification('Problemas al guardar los productos relacionados al cupón', 'danger', 3500);
				// }
			});

			if ($(".dz-preview").length > 0) {
			console.log('SI IMG');
			console.log('IMG', $(".dz-preview").length);
				console.log('a', a[0][0][0]);
				// CONSOLE REVISAR ID EN NEGATIVO
				$("input[name='idcupon']").val(a[0][0][0]);
				myDropzone.processQueue();
				$("#img-upload").html('<div class="dz-default dz-message"><span>Arrastre imágenes aquí para subirlas</span></div>');
			}else{
				notification('No se subió la imagen!', 'danger', 3500);
			}
	    	cleanCupo();
	    	notification('Producto agregado correctamente', 'success', 3500);
			loadCupones();
		} else {
			notification('No se pudo agregar este producto', 'danger', 3500);
			console.log(a['error']);
		}
	}else{
		notification(valAddCupo, 'danger', 3500);
	}
});

$(document).on('click', '#editCupo', function() {
	var dias = [];
	var optpub = $("#hchkcupon").val();

	var vid = $("#hidcupo").val();
	var nom_ = $("#nom_cupo").val();
	var des_ = $("#desc_cupo").val();
	var pre_ = $("#prec_cupo").val();
	var imp_ = $("#ivi_cupo").val() == '' ? 0 : $("#ivi_cupo").val();
	var ftdesde = $("#fdesde").val()+" "+$("#tdesde").val()+':00';
	var fthasta = $("#fhasta").val()+" "+$("#thasta").val()+':00';
	var estado = 0;
	var hvidpub = $("#hvidpub").val() == '' ? 0 : $("#hvidpub").val();

	$(".week_chck").each(function(index){
		var dia = $(this).attr('day')
		$(this).is(':checked') ? dias.push(dia+'_'+$("#"+dia+"_a").val()+'-'+$("#"+dia+"_c").val()) : 1;
	});// CARGA SOLO LOS SELECCIONADOS
	console.log(dias);
	console.log('hvidpub', hvidpub);
	var valAddCupo = validaAddCupo();
	if (!valAddCupo) {
		if ($(".dz-preview").length > 0) {
			$("input[name='idcupon']").val(vid);
			myDropzone.processQueue();
		}else{
			notification('No se subió la imagen!', 'danger', 3500);
		}
		console.log('2,'+vid+',"'+nom_+'","'+des_+'",'+pre_+','+imp_+',0,'+hvidpub+',"'+ftdesde+'","'+fthasta+'",0,@@impresa');
		var a = arr('login',4,'',11,'2,'+vid+',"'+nom_+'","'+des_+'",'+pre_+','+imp_+',0,'+hvidpub+',"'+ftdesde+'","'+fthasta+'",1,"'+dias+'",'+optpub+',@@impresa,0',0,0,0);
		console.log(a);
		if (a['succed']) {

		    // EDITAR DETALLE CUPON
		    var detail = arr('login',4,'',85,vid,0,0,0)[0];
		    console.log('detail', detail);

		    $(".listprod").each( function() {
				var idprod = $(this).attr('id').substr(2);
				var b = arr('login',4,'',89,vid+','+idprod,0,0,0)[0][0];
				console.log('b', b);
	    		if (idprod != b) {
	    			console.log('AGREGO', idprod);
	    			var cant = $("#c"+idprod).val();
					console.log('cant'+idprod, cant);
					var c = arr('login',4,'',83,'1,0,'+vid+','+idprod+','+cant,0,0,0);
					console.log('c', c);
	    		}
			});

		    // Guardar productos nuevos en detallecupon
			$("#editCupo").text('Agregar');
			$("#editCupo").removeClass('btn-warning');
			$("#editCupo").addClass('btn-primary');
			$("#editCupo").attr('id','addCupo');
		    cleanCupo();
			notification('Cupón editado correctamente', 'success', 3500);
			loadCupones();
		}else{
			notification('Hubo un problema al editar la información de este cupón', 'danger', 3500);
			console.log('ERROR:', a['error']);
		}

	}else{
		notification(valAddCupo, 'danger', 3500);
	}
});

$(document).on('click', '#addprod', function() {
	var id = $("#hidprod").val() == '' ? 0 : $("#hidprod").val();
	var source = $("#hsource").val().substr(36) == '' ? 0 : $("#hsource").val().substr(36);
	var idcupo = $("#hidcupo").val() == '' ? 0 : $("#hidcupo").val();
	// console.log('id',id);
	// console.log('source',source);
	var nameprod = $("#vsearchprod").val();
	var estado = 0;

	if (id != 0) { //VALIDA SI HAY PRODUCTO ASIGNADO
			if ($(".listprod").length <= 0) {
				$(".mjsempty").hide();
				addLineProd(id, source, nameprod);
			}else{
				$(".listprod").each( function() {
					var idprod = $(this).attr('id').substr(2);
					console.log(id, idprod);
					if (id == idprod) {
						console.log('SUMO A PROD');
						estado = 1;
						return false;
					}else{
						console.log('AGREGO PRODUCTO');
						estado = 0;
					}
				});

				if (estado == 1) {
					$("#s"+id).click();
				}else{
					addLineProd(id, source, nameprod);
				}
			}
	}else{
		notification('Debe seleccionar al menos un producto para agregarlo', 'danger', 3500);
		$("#vsearchprod").focus();
	}
});

$(document).on('click', '.delprod', function() {
	var idcupo = $("#hidcupo").val() == '' ? 0 : $("#hidcupo").val();
	var idprod = $(this).attr('id').substr(1);
	$("#li"+idprod).remove();
	console.log('length', $(".listprod").length);
	if ($(".listprod").length == 0) {
		$(".mjsempty").show();
	}
	if (idcupo != 0) {
		console.log(arr('login',4,'',83,'3,0,'+idcupo+','+idprod+',0',0,0,0));
	}
});

$(document).on("keyup","#vsearch",function(){
	var vsearch = $(this).val();
	var extc = arr('login',4,'',82,'"'+vsearch+'","0,10", @@impresa',0,0,0);
    console.log(extc);
    extc = extc[0];
    if (extc.length > 0) {
        var tabla = $("#data-table-cuponess").DataTable();
        tabla.destroy();
        arr('login',6,'',82,'"'+vsearch+'","0,10", @@impresa',0,1,$("#contcupons"));

		$("#data-table-cuponess").DataTable();
    }else{
        arr('login',6,'',82,'"'+vsearch+'","0,10", @@impresa',0,1,$("#contcupons"));
    }
});

$(document).on('keyup', '#prec_cupo', function() {
	console.log('CLICK PREC CUPO', $(this).val());
	var ivi = $("#ivi_cupo").val() == '' ? 13 : parseInt($("#ivi_cupo").val());
	var precio = $(this).val() == '' ? 0 : parseInt($(this).val());
	var impuesto = $("#imv_cupo").val() == '' ? 0 : parseInt($("#imv_cupo").val());
	var total = $("#tot_cupo").val() == '' ? 0 : parseInt($("#tot_cupo").val());
	totalizar(precio,impuesto,ivi,total);
});

$(document).on('keyup', '#imv_cupo', function() {
	var ivi = $("#ivi_cupo").val() == '' ? 13 : parseInt($("#ivi_cupo").val());
	var precio = $("#prec_cupo").val() == '' ? 0 : parseInt($("#prec_cupo").val());
	var impuesto = $(this).val() == '' ? 0 : parseInt($(this).val());
	var total = $("#tot_cupo").val() == '' ? 0 : parseInt($("#tot_cupo").val());
	totalizar(precio,impuesto,ivi,total);
});

$(document).on('keyup', '#ivi_cupo', function() {
	var ivi = $(this).val() == '' ? 13 : parseInt($(this).val());
	var precio = $("#prec_cupo").val() == '' ? 0 : parseInt($("#prec_cupo").val());
	var impuesto = $("#imv_cupo").val() == '' ? 0 : parseInt($("#imv_cupo").val());
	var total = $("#tot_cupo").val() == '' ? 0 : parseInt($("#tot_cupo").val());
	totalizar(precio,impuesto,ivi,total);
});

$(document).on('keyup', '#tot_cupo', function() {
	var ivi = $("#ivi_cupo").val() == '' ? 13 : parseInt($("#ivi_cupo").val());
	var precio = $("#prec_cupo").val() == '' ? 0 : parseInt($("#prec_cupo").val());
	var impuesto = $("#imv_cupo").val() == '' ? 0 : parseInt($("#imv_cupo").val());
	var total = $(this).val() == '' ? 0 : parseInt($(this).val());
	totalizar(precio,impuesto,ivi,total);
});

$(document).on('change', '#chkivi_cupo', function() {
	var ivi = $("#ivi_cupo").val() == '' ? 13 : parseInt($("#ivi_cupo").val());
	var precio = $("#prec_cupo").val() == '' ? 0 : parseInt($("#prec_cupo").val());
	var impuesto = $("#imv_cupo").val() == '' ? 0 : parseInt($("#imv_cupo").val());
	var total = $("#tot_cupo").val() == '' ? 0 : parseInt($("#tot_cupo").val());
	totalizar(precio,impuesto,ivi,total);
});

function totalizar(pre, imv, ivi, tot) {
	var chkivi = $("#chkivi_cupo").is(':checked') ? 1 : 0;
	console.log(pre, imv, ivi, tot, chkivi);
	var impuesto = pre * (ivi/100);
	var total = 0;
	if (chkivi == 1) {
		$("#ivi_cupo").attr('disabled', false);
		console.log('impuesto: ' + impuesto);
		$("#imv_cupo").val(impuesto);
	}else{
		$("#ivi_cupo").attr('disabled', true);
		$("#imv_cupo").val('');
	}
	total = chkivi != 0 ? pre + impuesto : pre;
	console.log('total: ' + total);
	$("#tot_cupo").val(total);
}

$(document).on('change', '#ivi_cupo', function() {
	var id = $(this).is(':checked');
});

function validaAddCupo() {

	if ($("#nom_cupo").val() == '') {
		$("#nom_cupo").focus();
		return 'Nombre de producto requerido';
	}

	if ($("#desc_cupo").val() == '') {
		$("#desc_cupo").focus();
		return 'Descripción de producto requerida';
	}

	if ($("#prec_cupo").val() == '') {
		$("#prec_cupo").focus();
		return 'Precio de producto requerido';
	}

	if ($("#imgurl").val() == '') {
		return 'Imagen de producto requerida';
	}

	return false;
}

function cleanCupo() {
	$("#hidcupo").val('');
	$("#fdesde").val('');
	$("#tdesde").val('');
	$("#fhasta").val('');
	$("#thasta").val('');
	$("#nom_cupo").val('');
	$("#desc_cupo").val('');
	$("#prec_cupo").val('');
	$("#imv_cupo").val('');
	$("#tot_cupo").val('');
	$("#ivi_cupo").val('');
	$("#ivi_cupo").attr('disabled', true);
	$("#chkivi_cupo").prop('checked', false);
	$(".imgcupon").prop('checked', false);
	$("#img-upload").html('<div class="dz-default dz-message"><span>Arrastre imágenes aquí para subirlas</span></div>');
	$(".mod").attr('id',0);
	$(".del").attr('id',0);
	$("#listprod").html('<div class="col-12 text-center p-2 mjsempty">No hay datos disponibles</div>');
	$("#entrefechas").click();
}

function limpiaPubliCupon() {
	$(".week_chck").prop('checked', false);
	$(".mon").val('');
	$(".mon").prop('disabled', true);
	$(".tue").val('');
	$(".tue").prop('disabled', true);
	$(".wed").val('');
	$(".wed").prop('disabled', true);
	$(".thu").val('');
	$(".thu").prop('disabled', true);
	$(".fri").val('');
	$(".fri").prop('disabled', true);
	$(".sat").val('');
	$(".sat").prop('disabled', true);
	$(".sun").val('');
	$(".sun").prop('disabled', true);
}

function loadCupones() {
	var a = arr('login',6,'',82,'"","0,10", @@impresa',0,1,$("#contcupons"));
	console.log(a);
}

function loadCupdesactivados() {
	var a = arr('login',6,'',97,'0,@@impresa',0,1,$("#cont-cupondesactivado"));
	console.log(a);
}

function addLineProd(vid, vsource, vnameprod) {
	$("#listprod").append('<li id="li'+vid+'" class="list-group-item d-flex justify-content-between align-items-center listprod">'+
	  '<div class="col-sm-7">'+
	  '<img src="../assets/imgs/'+vsource+'" alt="Avatar" class="imgprod">'+
	  '<span class="ml-2">'+vnameprod+'</span>'+
	  '</div>'+
	  '<div class="input-group input-group-sm col-sm-4">'+
	    '<div class="input-group-append rest" id="r'+vid+'" prod="'+vid+'">'+
	      '<span class="input-group-text bg-light">'+
	        '<span data-feather="minus"></span>'+
	      '</span>'+
	    '</div>'+
	    '<input type="text" class="form-control text-center cantprod" value="1" id="c'+vid+'">'+
	    '<div class="input-group-prepend sum" id="s'+vid+'" prod="'+vid+'">'+
	      '<span class="input-group-text bg-light">'+
	        '<span data-feather="plus"></span>'+
	      '</span>'+
	    '</div>'+
	  '</div>'+
	  '<span data-feather="x-circle" class="pointer delprod" style="color: #FC3F46" id="d'+vid+'">x</span>'+
	'</li>');
	feather.replace();
	$("#vsearchprod").val('');
	$("#hidprod").val('');
}
