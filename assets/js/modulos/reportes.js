$(function() {

});

$(document).on('click', '#doreport', function() {
  var fecha_ini = $("#vfecha_ini").val() == '' ? '1010-10-10' : $("#vfecha_ini").val();
  var fecha_fin = $("#vfecha_fin").val() == '' ? '1010-10-10' : $("#vfecha_fin").val();
  console.log(fecha_ini, fecha_fin);
  var report = arr('login',4,'',134,'"' + fecha_ini + '","' + fecha_fin + '",@@impresa',0,0,0);
  console.log(report);
  if (report['succed']) {
    var total = report[0][0][0];
    var subtotal = report[0][0][1];
    var express = report[0][0][2];
    var efectivo = report[0][0][3];
    var tarjeta = report[0][0][4];
    var sinpe = report[0][0][5];

    $("#total").val(total);
    $("#subtotal").val(subtotal);
    $("#express").val(express);
    $("#efectivo").val(efectivo);
    $("#tarjeta").val(tarjeta);
    $("#sinpe").val(sinpe);
  }
});