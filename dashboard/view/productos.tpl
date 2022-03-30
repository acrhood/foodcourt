<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Productos</title>
   {$STY}
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/productos.css">
  </head>
  <body>
    <div class="d-flex" id="wrapper">

    {$NAV}

    <div id="page-content-wrapper">

      {$SIDE}
       <section style="padding: 2% 1%">
        <input type="hidden" id="hidprod" value="">
        <input type="hidden" id="estadoprod" value="0">
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="row pb-2">
              <div class="col col-sm-12">
                <h6>Lista de productos</h6>
              </div>
            </div>
            <div class="row">
              <div class="col col-sm-12">
                <div class="input-group mb-3">
                  <input type="text" id="vsearch" class="form-control" placeholder="Buscar">
                  <select class="form-select custom-select" id="selcatego" value="0" required="">
                    <!-- JS -->
                  </select>
                  <select class="form-select custom-select" id="selsubcatego" value="0" required="" disabled>
                    <!-- JS -->
                  </select>
                  <button class="btn btn-primary" id="btnbuscaprod" type="button"><span data-feather="search"></span></button>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table" id="data-table-productoss">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Precio</th>
                  </tr>
                </thead>
                <tbody id="getProductos">
                  <!-- JS -->
                </tbody>
              </table>
            </div>

          </div>

          <div class="col-md-6 mb-3">
            <div class="row">
              <div class="btn-group mb-2" role="group">
                <button type="button" class="btn btn-light mod">
                  Editar &nbsp;
                  <span data-feather="edit-3"></span>
                </button>
                <button type="button" class="btn btn-light del">
                  Borrar &nbsp;
                  <span data-feather="x"></span>
                </button>
                <button type="button" class="btn btn-light optn">
                  Opciones &nbsp;
                  <span data-feather="box"></span>
                </button>
                <button type="button" class="btn btn-light prices">
                  Precios &nbsp;
                  <span data-feather="dollar-sign"></span>
                </button>
              </div>
            </div>
            <div class="row">
            <div class="col-md-6 mb-3">
              <label for="nom_prod">Nombre</label>
              <input type="text" class="form-control" id="nom_prod" placeholder="" value="" required="">
            </div>
            <div class="col-md-6 mb-3">
              <label for="desc_prod">Descripción</label>
              <textarea type="text" class="form-control" id="desc_prod" placeholder="" value="" required=""></textarea>
            </div>
            <div class="col-md-6 mb-3">
              <label for="tipo_prod">Categoría</label>
              <select class="custom-select d-block w-100" id="tipo_prod" value="0" required="">
                <!-- JS -->
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label for="sub_catego">Sub Categoría</label>
              <select class="custom-select d-block w-100" id="sub_catego" value="0" required="" disabled>
                <!-- JS -->
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label for="prec_prod">Precio</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">₡</span>
                </div>
                <input type="text" class="form-control" id="prec_prod">
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="form-check p-4">
                <input class="form-check-input" type="checkbox" value="" id="chngestado">
                <label class="form-check-label" for="chngestado">
                  Agotado
                  <span class="text-muted">- Activar en caso de que se agote el producto</span>
              </label>
            </div>
          </div>
            <div class="col-md-6 mb-3" style="display: none">
              <label for="ivi_prod">I.V.I</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="checkbox" id="chkivi_prod" aria-label="Checkbox I.V.I">
                  </div>
                </div>
                <input type="text" class="form-control" id="ivi_prod" placeholder="13%" value="" aria-label="I.V.I" disabled>
              </div>
              <!-- <label class="form-check-label">
                <input type="checkbox" class="form-check-input" id="chkivi_prod" style="margin-left: 15%">I.V.I
              </label>
              <label for="ivi_prod"></label>
              <input type="number" class="form-control" id="ivi_prod" placeholder="13%" value="" required=""> -->
            </div>
            <div class="col-md-6 mb-3" style="display: none">
              <label for="imv_prod">Impuesto</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">₡</span>
                </div>
                <input type="text" class="form-control" id="imv_prod">
              </div>
            </div>
            <div class="col-md-6 mb-3" style="display: none">
              <label for="tot_prod">Total</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">₡</span>
                </div>
                <input type="text" class="form-control" id="tot_prod">
              </div>
            </div>
            <div class="col-md-12 d-inline">
              <!-- <form action="../upload.php" method="post" id="producto-upload" class="dropzone needsclick dz-clickable">
                <input type="hidden" name="idproducto">
              </form> -->
              <!-- <div class="form-group">
              <div class="input-group">
                  <span class="input-group-btn">
                      <button class="btn btn-light btn-file">
                          Elegir... <input type="file" class="form-control" name="productImage" id="productImage">
                      </button>
                  </span>
                  <input type="text" class="form-control" id="imgurl" readonly>
              </div>
              </div> -->
            <!-- </div>
            <div class="col-md-6 d-inline" align="center"> -->
              <!-- <img id='img-upload' /> -->
              <form action="../upload.php" id="img-upload" method="post" class="dropzone needsclick dz-clickable">
                <input type="hidden" name="idproducto">
              </form>
              <small><label class="text-muted">Dimensión recomendada: 350 × 350 px | Cantidad máxima de archivos: 5</label></small>
            </div>
            <div class="col-md-12 mb-3 mt-5 btn-group" role="group">
              <button type="button" class="btn btn-primary col-sm-10" id="addProd">Agregar</button>
              <button type="button" class="btn btn-light col-sm-2" id="cleanProd">Limpiar</button>
            </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="videoPreview" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <!-- <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div> -->
              <div class="modal-body">
                  <video controls preload="auto">
                    <source class="_video" src="" type="video/mp4">
                    <p>Video description</p>
                  </video>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="modal_producto_detail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Opciones del producto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-8 pipe-validator v-category">
                        <label>Categoria</label>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control pipe-validate" id="text_category" pipe-type="text" pipe-mssg="Categoria">
                          <div class="input-group-append">
                            <button type="button" class="btn btn-outline-primary" id="add_category">Agregar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row ml-1 mt-2">
                      <input type="hidden" id="hidden_category" value="">
                      <input type="hidden" id="hidden_price" value="">
                      <ul class="list-group w-100" id="list_categories">
                        <!-- <li class="list-group-item">
                          Cras justo odio
                          <span data-feather="x" class="der"></span>
                        </li> -->
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-10">
                        <div class="form-group">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="multiple_option" disabled>
                            <label class="form-check-label" for="multiple_option">
                              Opción múltiple <small><span class="text-muted"> - Permite que el usuario seleccione varias opciones al mismo tiempo, de lo contrario se asignará una selección única de las opciones</span></small>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <span class="badge badge-light">Producto</span>
                        <div class="row" align="right">
                           <span>&nbsp;₡&nbsp;<span id="product_price"></span></span>
                           <span class="badge badge-success" style="font-size: 0.9em; font-weight: 500;">+₡&nbsp;<span id="total_price">0</span></span>
                        </div>
                      </div>
                    </div>
                    <div class="row v-subcategory">
                      <div class="col-md-5">
                        <label>Opcion</label>
                        <input type="text" class="form-control pipe-validate" id="text_option" pipe-type="text" pipe-mssg="Opción" disabled>
                      </div>
                      <div class="col-md-6">
                        <label>Valor</label>
                        <div class="input-group mb-5">
                          <div class="input-group-prepend">
                            <span class="input-group-text">₡</span>
                          </div>
                          <input type="text" class="form-control pipe-validate" id="text_value" pipe-type="text" pipe-mssg="Valor" disabled="">
                          <input type="hidden" id="hiddetail" value="">
                          <input type="hidden" id="hmultiple" value="">
                          <input type="hidden" id="ischecked" value="">
                          <div class="input-group-append">
                            <button type="button" class="btn btn-outline-primary" id="add_subcategory" disabled>Agregar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row ml-1 mt-2">
                      <ul class="list-group w-100" id="list_subcategories">

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="save_categories">Agregar detalle</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="modal_prices" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Precios por producto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body container">
                <div class="row">
                  <div class="col-md-8">
                    <div class="row">
                      <div class="col-md-5">
                        <label>Nombre</label>
                        <input type="text" class="form-control pipe-validate" id="price_name" pipe-type="text" pipe-mssg="Opción">
                        <input type="hidden" id="hidproduct_price" value="0">
                      </div>
                      <div class="col-md-6">
                        <label>Valor</label>
                        <div class="input-group mb-5">
                          <div class="input-group-prepend">
                            <span class="input-group-text">₡</span>
                          </div>
                          <input type="text" class="form-control pipe-validate" id="price_value" pipe-type="text" pipe-mssg="Valor">
                          <div class="input-group-append">
                            <button type="button" class="btn btn-outline-primary" id="add_price">Agregar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row ml-1 mt-2">
                  <ul class="list-group w-50" id="list_prices">

                  </ul>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="save_prices">Agregar</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
    </div>
    {$SCR}
    <script src="../assets/js/modulos/productos.js"></script>
  </body>
</html>
