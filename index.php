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
                        <input type="text" id="nameMovie" name="nameMovie" value="Movie name 1" class="form-control" />
                        <label class="form-label" for="nameMovie">Nombre:</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="nameAuthor" name="nameAuthor" value="Author movie 1" class="form-control" />
                        <label class="form-label" for="nameAuthor">Director:</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="timeMovie" name="timeMovie" value="120" class="form-control" />
                        <label class="form-label" for="timeMovie">Duracion:</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="genderMovie" name="genderMovie" value="Action" class="form-control" />
                        <label class="form-label" for="genderMovie">Genero:</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="datetime-local" id="dateMovie" name="dateMovie" value="2025-10-22" min="2025-10-20" class="form-control" />
                        <label class="form-label" for="dateMovie">FechaLanzamiento:</label>
                    </div>
                    <div class="form-outline">
                        <select name="clasificacionId" id="clasificacionId" class="form-control">
                            <option value="Selecciona la Clasificacion" disabled selected hidden>Selecciona la Clasificacion</option>
                        </select>
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
