<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title></title>
   {$STY}
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/reportes.css">
  </head>
  <body>
    <div class="d-flex" id="wrapper">

    {$NAV}

    <div id="page-content-wrapper">

      {$SIDE}
       <section style="padding: 2% 1%">

      <h4>Ventas por fecha</h4>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="input-group">
            <input type="date" class="form-control" id="vfecha_ini">
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="input-group">
            <input type="date" class="form-control" id="vfecha_fin">
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="input-group">
            <button class="btn btn-primary" id="doreport" type="button"><span data-feather="search"></span></button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 mb-2">
          <label for="total">Total</label>
          <input type="text" class="form-control" id="total" placeholder="" value="" required="" disabled>
        </div>
        <div class="col-md-2 mb-2">
          <label for="subtotal">Subtotal</label>
          <input type="text" class="form-control" id="subtotal" placeholder="" value="" required="" disabled>
        </div>
        <div class="col-md-2 mb-2">
          <label for="express">Express</label>
          <input type="text" class="form-control" id="express" placeholder="" value="" required="" disabled>
        </div>
        <div class="col-md-2 mb-2">
          <label for="efectivo">Efectivo</label>
          <input type="text" class="form-control" id="efectivo" placeholder="" value="" required="" disabled>
        </div>
        <div class="col-md-2 mb-2">
          <label for="tarjeta">Tarjeta</label>
          <input type="text" class="form-control" id="tarjeta" placeholder="" value="" required="" disabled>
        </div>
        <div class="col-md-2 mb-2">
          <label for="sinpe">Sinpe</label>
          <input type="text" class="form-control" id="sinpe" placeholder="" value="" required="" disabled>
        </div>
      </div>

    </section>
    </div>
    </div>

    {$SCR}
    <script src="../assets/js/modulos/reportes.js"></script>
  </body>
</html>
