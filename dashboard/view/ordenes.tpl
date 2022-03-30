<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title></title>
   {$STY}
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/ordenes.css">
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
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" class="tipord text-dark" tipo="0">Todas</a></li>
              <li class="breadcrumb-item"><a href="#" class="tipord text-dark" tipo="1">Express <span class="text-primary">•</span></a></li>
              <li class="breadcrumb-item"><a href="#" class="tipord text-dark" tipo="2">Recoge <span class="text-dark">•</span></a></li>
              <li class="breadcrumb-item"><a href="#" class="tipord text-dark" tipo="3">Servido <span class="text-warning">•</span></a></li>
            </ol>
          </nav>
        <br>
        <div class="card-columns" id="ordenLlegada">
            <!-- card-deck -->
            <!-- JS -->
        </div>

      </section>
    </div>
  </div>
    {$SCR}
    <script src="../assets/js/modulos/ordenes.js"></script>
  </body>
</html>
