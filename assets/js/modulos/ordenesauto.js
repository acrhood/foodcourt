$(function(){
	$("#data-table-ordenesautos").dataTable({
        bFilter: false,
        bScrollInfinite: true,
        bSort: false,
        bLengthChange: false,
        order: [],
        bPaginate: false,
        info: false
    });

	showDatos();
    mostrarContador();
    
    setInterval(function() {
		showDatos();
        mostrarContador();
    }, 30000);


});

function showDatos() {
    var a = arr('login',4,'',28,'2,1,@@impresa',0,0,0);
    console.log(a);
    arr('login',6,'',28,'2,1,@@impresa',0,1,$("#oexpress"));
    
    var b = arr('login',4,'',28,'2,3,@@impresa',0,0,0);
    console.log(b);
    arr('login',6,'',28,'2,3,@@impresa',0,1,$("#oservido"));

    var c = arr('login',4,'',28,'2,2,@@impresa',0,0,0);
    console.log(c);
    arr('login',6,'',28,'2,2,@@impresa',0,1,$("#orecoge"));
}

