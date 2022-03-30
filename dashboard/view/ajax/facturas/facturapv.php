<?php $config = $kakaroto->kamehameha('',99,'@@impresa');?>
<!DOCTYPE html>
<html>
<head>
  <link rel="icon" type="image/png" href="../assets/img/favicon.ico">
  <link href="https://fonts.googleapis.com/css2?family=Muli:wght@500&display=swap" rel="stylesheet">
  <title>Factura</title>
<style>
  *{
      font-size: 1em;
      font-family: 'Muli', sans-serif;
  }

<?php if ($config[0][8] == 2) { ?>
@media print {
  .print{
    display: none;
  }

  *{
    font-family: 'Muli', sans-serif;
    /*font-size: 12px;*/
  }

  .container{

      /**margin: 1px !important;**/
  }

  *{
        margin: 0% !important;
        font-size: 20px;

  }

  @page {
    margin: 0;
  }
}
<?php }else{ ?>
@media print {
  .print{
    display: none;
  }

  *{
    font-family: 'Muli', sans-serif;
    font-size: 12px;
  }

  .container{
    margin: 1px !important;
  }

<?php if ($config[0][9] == 0) { ?>
  body{
    margin-left: 0% !important;
    margin-right: 0% !important;
  }
<?php }else{ ?>
  body{
    margin-left: 9% !important;
    margin-right: 9% !important;
  }
<?php } ?>
}

<?php } ?>
</style>
</head>

<body style="margin-left: 35%; margin-right: 35%;><?php
  echo '<div class="container">
          <br><br>
        <table align="center">';

if($miscelaneos[3] != '')

echo '<tr align="center">
     <td>
        <div align="center"><b> '.$miscelaneos[1].' </b><br> Ced. '.$miscelaneos[21].'
         <br> Telf. '.$miscelaneos[19].'<br>
        </div>
     </td>
  </tr>
</table>
<table style="width: 100% !important;">
</table>
<br>
<table>
  <tr>
    <td align="right"><b>Orden N°</b>&nbsp;&nbsp;</td>
    <td>'.$datos[8].'</td>
  </tr>
  <tr>
    <td align="right"><b>Fecha:</b>&nbsp;&nbsp;</td>
    <td>'.$datos[3].'</td>
  </tr>
  <tr>
    <td align="right"><b>Cliente:</b>&nbsp;&nbsp;</td>
    <td>'.$datos[9].'</td>
  </tr>
  <tr>
    <td width="50%" align="right"><b>Tipo:<b>&nbsp;&nbsp;</td>
    <td>'.$datos[10].'</td>
  </tr>
</table>
<hr>';

// if ($config[0][10] == 1) {
//   echo "hola";
// }else{
echo '<table style="width: 100% !important;">
  <tr>
    <td align="center" width="20%"><b>CANT</b></td>
    <td align="center" width="50%"><b>ARTICULO</b></td>
    <td align="center" width="30%"><b>PRECIO</b></td>
  </tr>
  <tr>
    <td colspan="4"></td>
  </tr>';


    foreach ($transaccion as $obj) {

    echo '<tr>
      <td align="center" width="20%">'.$obj[1].'</td>
      <td align="center" width="50%">
      <div class="row">
        <div class="col-sm-12">'.$obj[0].'</div>
        <div class="col-sm-12">';
        $options = $kakaroto->kamehameha('', 113, $obj[12].',"'.$obj[13].'",@@impresa,'.$obj[11].',2');
        foreach ($options as $optn) {
          echo '<span style="font-size: 14px; background: #fafafa; display: inline-block">'.$optn[0].'</span> ';
        }
        echo '</div>';
      echo '</td>';
      echo '<td align="center" width="30%">'.$obj[2].'</td>';
    }

  // }
  //<td align="center" width="15%">'.number_format(str_replace(',', '', $obj[20])*str_replace(',', '', $obj[18]).'</td></tr>
echo '
<tr>
    <td colspan="4" style="border-bottom: 1px dashed #A0A0A0;"></td>
  </tr>
  <tr>
    <td colspan="4" style="border-bottom: 1px dashed white;"></td>
  </tr>
</table>
<table style="width: 92%;">
  <tr>
    <td colspan="4"></td>
  </tr>
  <tr>
    <td width="75%" align="right" colspan="3"><b>Sub-Total:</b></td>
    <td width="25%;" align="right">₡ '.$obj[7].'</td>
  </tr>
  <tr>
    <td width="75%" align="right" colspan="3"><b>Envío:</b></td>
    <td width="25%;" align="right">₡ '.$obj[6].'</td>
  </tr>
  <tr>
    <td width="75%"  style="font-size: 1.2em" align="right" colspan="3"><b>TOTAL:</b></td>
    <td width="25%;" style="font-size: 1.2em"  align="right"><b>₡ '.$obj[4].'</b></td>
  </tr>
</table>';
echo '<hr>
<div style="text-align: center;'.$oc.'" id="resolucion"></div><br><br><br>';
echo '<button class="print" onclick="print()"
style=" cursor: pointer;
        position:fixed;
        padding: 10px;
        color: #1883ba;
        width: 30%;
        border-radius: 6px;
        border: 2px solid #1883ba
">Imprimir</button>';

 ?>
 <script src="../assets/js/jquery.js?v=10.0.0.49"></script>
 <script src="../assets/js/materialize.js?v=10.0.0.49"></script>
 <script src="../assets/js/asgard.js?v=10.0.0.49"></script>
 <script type="text/javascript">
   $(function(){
      var config0 = $("#config0").val()
      var config9 = parseInt($("#config9").val());
      if (parseInt(config0)){
        $(".fe").removeClass('hide');
        $("#resolucion").html('<span class="ncontado" style="display:none">Renuncio mi domicilio y los trámites de inicio ejectivo. Al mismo tiempo doy por aceptadas las condiiones del codigo del comercio según artículo 460. Todo reclamo debe hacerse antes de 5 días hábiles.</span>Este Documento no Tiene Validéz Tributaria');
      }
      else{
        $("#resolucion").html('<span class="ncontado" style="display:none">Renuncio mi domicilio y los trámites de inicio ejectivo. Al mismo tiempo doy por aceptadas las condiciones del codigo del comercio según artículo 460. Todo reclamo debe hacerse antes de 5 días hábiles.</span>AUTORIZADO MEDIANTE RESOLUCION No. 11-97 del la D.G.T.D');
      }

      if ($("#ttipo").val() != 1) {
        $(".ncontado").show();
      }

      if (config9) {
        $(".recibo").show();
      }

      param = getParameterByName('fp');
      param = param == '' ? 0 : parseInt(param) ;

      window.onafterprint = function(){
       window.close();
     }

      if(parseInt(param)){
        window.print();
      }
   })
 </script>
 </body>
 </html>
