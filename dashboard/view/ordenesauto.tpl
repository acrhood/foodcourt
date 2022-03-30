<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title></title>
   {$STY}
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/ordenesauto.css">
  </head>
  <body>
    <div class="d-flex" id="wrapper">

    {$NAV}

    <div id="page-content-wrapper">

      {$SIDE}
       <section style="padding: 2% 1%">
        <div class="d-flex align-items-center p-3 bg-light rounded shadow-sm">
          <div class="lh-100">
            <h6 class="mb-0 lh-100">Ordenes en preparación</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 text-center p-2 bg-light rounded text-primary">Express</div>
          <div class="col-md-4 text-center p-2 bg-light rounded text-warning">Servido</div>
          <div class="col-md-4 text-center p-2 bg-light rounded text-dark">Recoge</div>
        </div>
        <br>
        <div class="row">
        <div class="col-md-4" id="oexpress">
          <!-- JS -->
        </div>
        <div class="col-md-4" id="oservido">
          <!-- JS -->
        </div>
        <div class="col-md-4" id="orecoge">
          <!-- JS -->
        </div>

        </div>

    	</section>
    </div>
    </div>

    {$SCR}
    <script src="../assets/js/modulos/ordenesauto.js"></script>
  </body>
</html>
