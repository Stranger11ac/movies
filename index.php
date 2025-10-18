<?php include 'componentes.php'; ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <?php
            $title = "Inicio";
            headContent($title);
        ?>
    </head>
    <body>
        <section class="d-grid">
            <form class="card" id="formInsertMovies">
                <div class="card-header">
                    <h5 class="card-title text-center">Agregar Peliculas</h5>
                </div>
                <div class="card-body">
                    <!-- formulario de registrar peliculas -out-->
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="nameMovie" class="form-control" />
                        <label class="form-label" for="nameMovie">Nombre:</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="nameAuthor" class="form-control" />
                        <label class="form-label" for="nameAuthor">Director:</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="timeMovie" class="form-control" />
                        <label class="form-label" for="timeMovie">Duracion:</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="genderMovie" class="form-control" />
                        <label class="form-label" for="genderMovie">Genero:</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="dateMovie" class="form-control" />
                        <label class="form-label" for="dateMovie">FechaLanzamiento:</label>
                    </div>
                    <div data-mdb-input-init class="form-outline">
                        <input type="numer" id="levelMovie" class="form-control" />
                        <label class="form-label" for="levelMovie">ClasificacionId:</label>
                    </div>
                </div>
                <div class="card-footer">
                    <!-- Submit button -->
                    <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block">Sign in</button>
                </div>
            </form>
        </section>

        <?php scriptContent() ?>
    </body>
</html>
