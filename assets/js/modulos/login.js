var crr = '';
var conteo = 1;

$(document).ready(function(){

 // $(".modal").modal();
 
 // var animating = false,
 //      submitPhase1 = 1100,
 //      submitPhase2 = 400,
 //      logoutPhase1 = 800,
 //      $login = $(".login"),
 //      $app = $(".app");
  
 //  function ripple(elem, e) {
 //    $(".ripple").remove();
 //    var elTop = elem.offset().top,
 //        elLeft = elem.offset().left,
 //        x = e.pageX - elLeft,
 //        y = e.pageY - elTop;
 //    var $ripple = $("<div class='ripple'></div>");
 //    $ripple.css({top: y, left: x});
 //    elem.append($ripple);
 //  }

    // setTimeout(function(){$("#user").focus();},100);
    
    $("#logF").submit(function(){
         return getIn();
    });

    // $("#changepssw").click(function(){
    //     var val = validarcambio();
    //     if (val == false) {
    //         arr('login',4,'',56,'\"'+$("#vuser").val()+'\",\"'+$("#vclave").val()+'\"','',0,'');
    //         var p = mantenimiento('login',4,arr)[0];
    //         if (p == "[object Object]") {
    //             Materialize.toast(p['ERROR'], 4000, 'red');
    //         }else{
    //             Materialize.toast('Contraseña Cambiada Correctamente', 4000, 'green');
    //             $("#salir").click();
    //             $("#user").focus();
    //         }
    //     }else{
    //         Materialize.toast(val, 4000, 'red');
    //     }
    // });

    // $("#recupss").click(function(){
    //     if ($("#user").val() == '') {
    //         $("#msjrecupss").html('Usuario no existe, por favor verifique los datos e intente de nuevo.');
    //         $("#msjrecupss").addClass('red white-text');
    //         $("#user").focus();
    //     }else{
            
    //         var result = arr('login',4,'',233,'"'+$("#user").val()+'"','',0,'');
    //         if (result[0].length) {
    //             $("#msjrecupss").html('<img src="../assets/img/icon/mail_recovery.svg" width="100px"><br><h5>Recuperar Contraseña</h5><p>Enviar código de recuperación al correo:<br><b class="truncate">'+result[0][0][1]+'</b></p><a href="#!" id="sendrecupss" class="modal-action modal-close waves-effect waves-green btn-flat grey lighten-3">Enviar</a>');
    //             crr = result[0][0][0];
    //             $("#msjrecupss").removeClass('red white-text');
    //         }else{
    //             $("#msjrecupss").html('Usuario no existe, por favor verifique los datos e intente de nuevo.');
    //             $("#msjrecupss").addClass('red white-text');
    //             $("#user").focus(); 
    //         }
    //     }
    // });

//     var user = getCookie('userAPSY');
//     if (user.length) {
//         $("#user").val(user);
//         $("#pass").val(getCookie('pwd'));
//         $("#remember").prop('checked',true);
//         $("#pwd").click().focus();
//     }
});

// $(document).on("click","#sendrecupss",function(){
//     var p = getDatos('',232,'"'+crr+'"',0,0);
//     var bdy = p[0][0][0];
    
//     enviarCorreo(1,crr,'Petición de Cambio de Contraseña',bdy,0,0,0);
// });


$(document).on('mouseover', '#verpass', function() {
    $(".verpass").attr('data-feather', 'eye');
    $(".passs").attr('type', 'text');
    feather.replace();
});

$(document).on('mouseout', '#verpass', function() {
    $(".verpass").attr('data-feather', 'eye-off');
    $(".passs").attr('type', 'password');
    feather.replace();
});

// $(document).on('blur', '#user', function() {
//     var usr = $(this).val();
//     console.log('usr', usr);
// });

// $(document).on("click", "#loging", function() {
//     getIn();
// });

// function validarcambio(){
//     if ($("#vuser").val() == '') {
//         $("#vuser").focus();
//         return "Usuario Requerido";
//     }

//     if ($("#vclave").val() == '') {
//         $("#vclave").focus();
//         return "Contraseña Requerida";
//     }

//     if ($("#clave").val() == '') {
//         $("#clave").focus();
//         return "Repetir Contraseña";
//     }

//     if ($("#vclave").val() != $("#clave").val()) {
//         return "Contraseñas Deben Coincidir";
//     }

//     return false;

// }

function getIn(){
    var salida = true;
    console.log('loging');

    if ($('#user').val() == '') {
        notification('No a Ingresado Usuario', 'danger', 3500);
        $('#user').focus();
        return false;
    }

    if ($('#pass').val() == '') {
        notification('Contraseña no válida', 'danger', 3500);
        $('#pass').focus();
        return false;
    }
    
    var p = mantenimiento('login',3,{user: $('#user').val(), pss: $('#pass').val()});
    console.log('ingreso');
    console.log(p);
    
    if (p.length == 0){
        Materialize.toast('Archivo Conf. Inválido', 4000, 'danger');
        return false;
    }
    if(p[0].length == 2){
        notification(p[0][0], 'danger', 3500);
        $('#pass').select();
        switch(parseInt(p[0][1])){
            case 1:
                console.log('case1');
                notification('Datos incorrectos', 'red', 3500);
                $.getJSON("http://ip-api.com/json", function (data) {
                // <COMMENT>
                // var correo = '';
                // var varibale = $('#user').val();

                // if ($('#user').val().indexOf('@') > 0) {
                //     rs = arr('login',4,'*',92,'correos like \"%'+ $('#user').val() +'%\"',0,0,'');
                //     console.log(rs);
                //     correo = rs[0][0][0];
                //     varibale = rs[0][0][1];
                // }else{
                //     if (conteo % 3 == 0) {
                //         correo = arr('login',4,'mail',1,'user = \"'+ $('#user').val() +'\"',0,0,'')[0][0][0];

                //         if (correo != ''){
                //             var bdy = '<h2>Intento de Ingreso al Sistema</h2><br><b>Usuario:</b> '+ varibale +'<br><b>ISP:</b> ' +data['isp'] + '<br><b>Ubicación:</b> ['+ data['countryCode']+'] ' + data['country'] +', '+ data['regionName'] +', '+ data['city'] +'.<br><b>IP: </b>'+ data['query'] +'<br>';

                //             enviarCorreo(1,correo,'Intento de Acceso al Sistema',bdy,0,0,0);
                //         }
                //     }
                    
                // }
                // </COMMENT>

                });
                salida = false;
            break;
        }
    }
    
    if (salida){
        direccion = window.location.pathname;
        direccion = direccion.substring(direccion.lastIndexOf('/')+1);
        $("#vdir").val(direccion)
        var usr = getCookie('userAPSY');
        if ($("#remember").is(':checked') && !usr){
            setCookie('userAPSY',p[0][0][1],365*24*60*60*1000);
            setCookie('pwd',$("#pass").val(),365*24*60*60*1000);
        }
        else if(!$("#remember").is(':checked'))
            deleteCookie('userAPSY');
    }else
        $("#vdir").val('');
    
    return salida;
}

// ----------------------------------------------------

$('.button .front').click(function() {
    $(this).parents('.flip').toggleClass('flipped');
    if (document.location.pathname.indexOf('fullcpgrid') == -1){
        $(this).parents('.flip').find('input:eq(0)').focus();
    }
    return false;
});
$('.btn-close').click(function(){
$(this).parents('.flip').toggleClass('flipped');
return false;
});


function demo(){
    /***
      Add your demo script here...
    ***/

    setTimeout(function(){
      $('.button .front').click();
    }, 2000);
}

// -----------------------------------------
