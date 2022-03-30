<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title></title>
   {$STY}
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/setting.css">
  </head>
  <body>
  <div class="d-flex" id="wrapper">

  {$NAV}

  <div id="page-content-wrapper">

    {$SIDE}
     <section style="padding: 0% 1%">

    <div class="row" style="display: none">
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <h6 class="card-header">Tipo de Negocio <small><span class="text-muted"> - El tipo de negocio define la configuración de la vista de la aplicación</span></small></h6>
          <div class="card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Tipo</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Seleccione...</option>
                <option value="1">Tienda</option>
                <option value="2">Comida</option>
              </select>
            </div>
          </div>
        </div> <!-- end card -->
      </div> <!-- end col -->
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <h6 class="card-header">Monetario <small><span class="text-muted"> - Configuración de valores monetarios</span></small></h6>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">I.V.I</span>
                  </div>
                  <input type="text" class="form-control text-right" placeholder="13" value="" aria-label="Amount (to the nearest dollar)">
                  <div class="input-group-append">
                    <span class="input-group-text">%</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <span class="text-muted"> - Impuesto de venta general para uso de sistema</span>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- end col -->
    </div> <!-- end row -->
    <br>
    <div class="card-body p-2" style="background: #f8f8f8; border: none">
    <div class="row">
      <input type="hidden" id="hidcatego" value="" tipo="">
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <h6 class="card-header" data-toggle="collapse" href="#collapsecategorias" role="button" aria-expanded="true" aria-controls="collapsecategorias">Categorías <small><span class="text-muted"> - Categorías de productos</span></small></h6>
          <div class="collapse" id="collapsecategorias">
          <div class="card-body">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Categoría" aria-label="Categoría" id="nom_addtipo" aria-describedby="btn_addtipo">
              <div class="input-group-append">
                <button class="btn btn-outline-primary proctipoprod" type="button" id="btn_addtipo">Agregar</button>
              </div>
            </div>
              <div class="list-group">
                <section id="tipoprods">
                <!-- JS -->
                </section>
              </div>
          </div>
        </div> <!-- end collapse -->
        </div> <!-- end card -->
      </div> <!-- end col -->
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <input type="hidden" id="tipoprod">
          <input type="hidden" id="hidsubcatego">
          <h6 class="card-header" data-toggle="collapse" href="#collapsesubcategorias" role="button" aria-expanded="true" aria-controls="collapsesubcategorias">Sub Categorías <small><span class="text-muted"> - Sub categorías de productos</span></small></h6>
          <div class="collapse" id="collapsesubcategorias">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-2" id="opt-img" align="center">
                <a href="#" data-toggle="modal" data-target="#imgCatego">Agregar<br>imagen</a>
                <!-- <img src="" class="img-fluid" alt="Responsive image"> -->
              </div>
              <div class="col-sm-10">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Sub Categoría" aria-label="Sub Categoría" id="nom_addcatego" aria-describedby="btn_addcatego">
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary procsubcatego" type="button" id="btn_addcatego">Agregar</button>
                  </div>
                </div>
              </div>
            </div>
            <ul class="list-group">
              <section id="categorias">
                <!-- JS -->
              </section>
            </ul>
          </div>
          </div> <!-- end collapse -->
        </div> <!-- end card -->
      </div> <!-- end col -->
    </div> <!-- end row -->
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <h6 class="card-header" data-toggle="collapse" href="#collapsehorarios" role="button" aria-expanded="true" aria-controls="collapsehorarios">Horario de trabajo <small><span class="text-muted"> - El formato de la hora debe ser en 24H, fija el horario dentro del cual es posible realizar pedidos a través de la aplicación</span></small></h6>
          <div class="collapse" id="collapsehorarios">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend" style="width: 25%">
                    <div class="input-group-text">
                      <input type="checkbox" class="week_chck" data-toggle="toggle" id="chckmon" day="mon">
                    </div>
                    <span class="input-group-text" style="width: 100%;">Lunes</span>
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Desde</span>
                  </div>
                  <input type="time" class="form-control mon" id="mon_a" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Hasta</span>
                  </div>
                  <input type="time" class="form-control mon" id="mon_c" disabled>
                 </div>
              </div>
              <div class="col-sm-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend" style="width: 25%">
                    <div class="input-group-text">
                      <input type="checkbox" class="week_chck" data-toggle="toggle" id="chcktue" day="tue">
                    </div>
                    <span class="input-group-text" style="width: 100%;">Martes</span>
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Desde</span>
                  </div>
                  <input type="time" class="form-control tue" id="tue_a" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Hasta</span>
                  </div>
                  <input type="time" class="form-control tue" id="tue_c" disabled>
                 </div>
              </div>
              <div class="col-sm-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend" style="width: 25%">
                    <div class="input-group-text">
                      <input type="checkbox" class="week_chck" data-toggle="toggle" id="chckwed" day="wed">
                    </div>
                    <span class="input-group-text" style="width: 100%;">Miércoles</span>
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Desde</span>
                  </div>
                  <input type="time" class="form-control wed" id="wed_a" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Hasta</span>
                  </div>
                  <input type="time" class="form-control wed" id="wed_c" disabled>
                 </div>
              </div>
              <div class="col-sm-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend" style="width: 25%">
                    <div class="input-group-text">
                      <input type="checkbox" class="week_chck" data-toggle="toggle" id="chckthu" day="thu">
                    </div>
                    <span class="input-group-text" style="width: 100%;">Jueves</span>
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Desde</span>
                  </div>
                  <input type="time" class="form-control thu" id="thu_a" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Hasta</span>
                  </div>
                  <input type="time" class="form-control thu" id="thu_c" disabled>
                 </div>
              </div>
              <div class="col-sm-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend" style="width: 25%">
                    <div class="input-group-text">
                      <input type="checkbox" class="week_chck" data-toggle="toggle" id="chckfri" day="fri">
                    </div>
                    <span class="input-group-text" style="width: 100%;">Viernes</span>
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Desde</span>
                  </div>
                  <input type="time" class="form-control fri" id="fri_a" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Hasta</span>
                  </div>
                  <input type="time" class="form-control fri" id="fri_c" disabled>
                 </div>
              </div>
              <div class="col-sm-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend" style="width: 25%">
                    <div class="input-group-text">
                      <input type="checkbox" class="week_chck" data-toggle="toggle" id="chcksat" day="sat">
                    </div>
                    <span class="input-group-text" style="width: 100%;">Sábado</span>
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Desde</span>
                  </div>
                  <input type="time" class="form-control sat" id="sat_a" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Hasta</span>
                  </div>
                  <input type="time" class="form-control sat" id="sat_c" disabled>
                 </div>
              </div>
              <div class="col-sm-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend" style="width: 25%">
                    <div class="input-group-text">
                      <input type="checkbox" class="week_chck" data-toggle="toggle" id="chcksun" day="sun">
                    </div>
                    <span class="input-group-text" style="width: 100%;">Domingo</span>
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Desde</span>
                  </div>
                  <input type="time" class="form-control sun" id="sun_a" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text" style="background: #fafafa">Hasta</span>
                  </div>
                  <input type="time" class="form-control sun" id="sun_c" disabled>
                 </div>
              </div>
            </div>
            <div class="row">
              <div class="container">
                <button class="btn btn-outline-primary float-right" id="addinfohorarios">Actualizar</button>
              </div>
            </div>
            <!-- <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Desde</span>
              </div>
              <input type="time" class="form-control">
              <div class="input-group-prepend">
                <span class="input-group-text">Hasta</span>
              </div>
              <input type="time" class="form-control">
             </div> -->
          </div>
          </div> <!-- end collapse -->
        </div> <!-- end card -->
      </div> <!-- end col -->
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <h6 class="card-header" data-toggle="collapse" href="#collapseferiados" role="button" aria-expanded="true" aria-controls="collapseferiados">Días feriados <small><span class="text-muted"> - En estos días en que la aplicación no permitirá realizar perdidos</span></small></h6>
          <div class="collapse" id="collapseferiados">
          <div class="card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Fecha</span>
              </div>
              <input type="date" class="form-control" id="fdate">
              <input type="text" class="form-control" id="fdesc" placeholder="Descripción">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button" id="addinfoferiados">Agregar</button>
              </div>
             </div>
             <ul class="list-group">
              <section id="feriados">
                <!-- JS -->
              </section>
              </ul>
          </div>
          </div> <!-- end collapse -->
        </div> <!-- end card -->
      </div> <!-- end col -->
    </div> <!-- end row -->
    <br>
    <div class="card p-2" style="background: #f8f8f8; border: none">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <h6 class="card-header" data-toggle="collapse" href="#collapsetarifas" role="button" aria-expanded="true" aria-controls="collapsetarifas">Tarifa Express<small><span class="text-muted"> - La tarifa se define automáticamente al establecer un precio por /km, de no ser así, establezca un precio para el envío de las ordenes por tarifa fija.</span></small></h6>
          <div class="collapse" id="collapsetarifas">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-check">
                  <input type="radio" name="tarifa" class="form-check-input" id="isfijo" value="0">
                  <label class="form-check-label" for="isfijo">Tarifa fija</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">₡</span>
                  </div>
                  <input type="number" placeholder="0" id="pfijo" class="form-control text-right precioenvio">
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-check">
                  <input type="radio" name="tarifa" class="form-check-input" id="isexpress" value="0">
                  <label class="form-check-label" for="isexpress">Tarifa express <span class="text-muted">- (precio /km)</span></label>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-12">
                <p>Rango mínimo de entrega <span class="text-muted">- mínimo de entrega en metros</span></p>
              </div>
              <div class="col-sm-6">
                <div class="input-group mb-3">
                  <input type="number" placeholder="0" id="mindistance" class="form-control text-right">
                  <div class="input-group-prepend">
                    <span class="input-group-text">metros</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
              <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">₡</span>
                  </div>
                  <input type="number" placeholder="0" id="pmin" class="form-control text-right preciominimo">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <p>Precio por kilómetro <span class="text-muted">- kilómetro adicional</span></p>
              </div>
              <div class="col-sm-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">₡</span>
                  </div>
                  <input type="number" placeholder="0" id="pkm" class="form-control text-right precioenvio">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <p>Rango máximo de entrega <span class="text-muted">- máximo de entrega en metros</span></p>
              </div>
              <div class="col-sm-6">
                <div class="input-group mb-3">
                  <input type="number" placeholder="0" id="maxdistance" class="form-control text-right">
                  <div class="input-group-prepend">
                    <span class="input-group-text">metros</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="container">
                <button class="btn btn-outline-primary float-right" id="addprecioenvios">Actualizar</button>
              </div>
            </div>
          </div>
          </div> <!-- end collapse -->
        </div> <!-- end card -->
      </div> <!-- end col -->
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <h6 class="card-header" data-toggle="collapse" href="#collapsenuevo" role="button" aria-expanded="true" aria-controls="collapsenuevo">SINPE Móvil
          </h6>
          <div class="collapse" id="collapsenuevo">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-check">
                  <input type="hidden" id="sinpeestado" value="0">
                  <input type="checkbox" class="form-check-input" id="issinpe" value="0">
                  <label class="form-check-label" for="issinpe" id="txtissinpe">SINPE Móvil</label>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-6">
                <p>Número telefónico</p>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <input type="text" id="sinpetel" class="form-control text-right" placeholder="88881234" value="" disabled>
                </div>
              </div>
              <div class="col-md-6">
                <p>Detalle de compra <span class="text-muted">- (opcional)</span></p>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <input type="text" id="sinpemsj" class="form-control text-right" placeholder="Ej.: Compra online" value="" disabled>
                </div>
              </div>
              </div>
              <div class="row">
                <div class="container">
                  <button class="btn btn-outline-primary float-right" id="addinfosinpe">Actualizar</button>
                </div>
              </div>
            </div>
          </div>
          </div> <!-- end collapse -->
        </div> <!-- end card -->
      </div> <!-- end col -->
    </div> <!-- end row -->
    <br>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <h6 class="card-header" data-toggle="collapse" href="#collapseinfo" role="button" aria-expanded="true" aria-controls="collapseinfo">Información de la empresa <small><span class="text-muted"> - Esta información será la que aparecerá en la factura generada por la aplicación</span></small></h6>
          <div class="collapse" id="collapseinfo">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <p>Nombre Comercio</p>
              </div>
              <div class="col-sm-8">
                <div class="input-group mb-3">
                  <input type="text" placeholder="Nombre de comercio" id="comname" class="form-control">
                </div>
              </div>
              <div class="col-sm-4">
                <p>Cédula</p>
              </div>
              <div class="col-sm-8">
                <div class="input-group mb-3">
                  <input type="text" placeholder="Cédula" id="comced" class="form-control">
                </div>
              </div>
              <div class="col-sm-4">
                <p>Dirección</p>
              </div>
              <div class="col-sm-8">
                <div class="input-group mb-3">
                  <input type="text" placeholder="Dirección del comercio" id="comdir" class="form-control">
                </div>
              </div>
              <div class="col-sm-4">
                <p>Teléfono</p>
              </div>
              <div class="col-sm-8">
                <div class="input-group mb-3">
                  <input type="text" placeholder="Número telefónico" id="comtel" class="form-control">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="container">
                <button class="btn btn-outline-primary float-right" id="addinfosucursal">Actualizar</button>
              </div>
            </div>
          </div>
        </div> <!-- end collapse -->
        </div> <!-- end card -->
      </div> <!-- end col -->
    </div> <!-- end row -->
    </div>

    <br><br>

<!-- MODAL -->
<div class="modal fade" id="imgCatego" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Imagen de categoría</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-12 pt-3" align="center">
            <form action="../upload.php" method="post" id="img-upload" class="dropzone needsclick dz-clickable">
              <input type="hidden" name="idcatego">
            </form>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" id="applyimg">Aplicar</button>
      </div>
    </div>
  </div>
</div>

</section>
</div>
</div>

    {$SCR}
    <script src="../assets/js/modulos/setting.js"></script>
  </body>
</html>
