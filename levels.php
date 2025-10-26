<?php include 'componentes.php'; ?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <?php
            $title = "Clasificaiones";
            headContent($title);
        ?>
    </head>
    <body>
        <section class="d-grid">
            <form class="card" id="formInsertLeves">
                <div class="card-header">
                    <h5 class="card-title">Agregar Clasificaciones</h5>
                </div>
                <div class="card-body">
                    <!-- formulario de registrar peliculas -out-->
                    <div data-mdb-input-init class="form-outline">
                        <input type="text" id="levelName" class="form-control" />
                        <label class="form-label" for="levelName">Clasificacion:</label>
                    </div>
                </div>
                <div class="card-footer">
                    <!-- Submit button -->
                    <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block">Sign in</button>
                </div>
            </form>
        </section>

        <!-- MDB -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/9.2.0/mdb.umd.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="src/main.js"></script>
    </body>
</html>
