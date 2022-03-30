$(function(){
	$("#data-table-ordeness").dataTable({
        bFilter: false,
        bScrollInfinite: true,
        bSort: false,
        bLengthChange: false,
        order: [],
        bPaginate: false,
        info: false
    });

	showDatos(2,0);

    mostrarContador();
    
    setInterval(function(){
        mostrarContador();
    }, 60000);

});

$(document).on('click', '.print', function() {
    var idpago = $(this).attr('id');
    window.open('ordenes?accion=1&id='+idpago+'"');
});

$(document).on('click', '.tipord', function() {
    var vtipoenvio = $(this).attr('tipo');
    showDatos(2, vtipoenvio)
});

function showDatos(videstado, vtipoenvio) {
    console.log( arr('login',4,'',28,videstado + ',' + vtipoenvio + ',@@impresa',0,0,0) )
    var p = arr('login',6,'',28,videstado + ',' + vtipoenvio + ',@@impresa',0,1,$("#ordenLlegada"));
    console.log(p);
}

function rainbow() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}