$(document).ready(function () {
    // #######################################################################
    // Insertar niveles ######################################################
    $("#formInsertMovies").on("submit", function (event) {
        event.preventDefault();
        submitLevels($(this));
    });

    $.ajaxSetup({
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
    });

    function submitLevels(form) {
        const levelVal = $(form).find("#levelName").val();

        const nivelData = {
            ClasificacionDesc: levelVal,
        };

        $.ajax({
            url: "http://127.0.0.1:8220/registrar_clasificaciones",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(nivelData),
            success: function (response) {
                const msg = response.mensaje || "Mensaje";
                console.log("Respuesta del servidor:", response);
                toast(msg, "success", 5000, "top-end");
                variableIndefinida = 1;
            },
            error: function (xhr, status, error) {
                toast(error, "error", 8000, "top-center");
                console.error("Error:", error);
            },
            complete: function () {
                console.log("Petición finalizada.");
            },
        });
    }

    // #######################################################################
    // Obtener niveles #######################################################
    const levelsContainer = $("#levesDatas #image");
    if (levelsContainer.length > 0) {
        getLevels(levelsContainer);
    }

    function getLevels($container) {
        $.ajax({
            url: "http://127.0.0.1:8220/obtener_clasificaciones",
            type: "GET",
            contentType: "application/json",
            success: function (response) {
                console.log("Respuesta del servidor:", response);
                $container.empty();
                $($container).append(
                    response.data.map(
                        (level) => `<div class="level-item">
                                        <h3>${level.ClasificacionDesc}</h3>
                                    </div>`
                    )
                );
            },
            error: function (xhr, status, error) {
                toast(error, "error", 8000, "top-center");
                console.error("Error:", error);
            },
            complete: function () {
                console.log("Petición finalizada.");
            },
        });
    }

    function toast(titleToast, iconToast, timeToast, positionToast) {
        const Toast = Swal.mixin({
            toast: true,
            position: positionToast,
            showConfirmButton: false,
            timer: timeToast,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
        });
        Toast.fire({
            icon: iconToast,
            title: titleToast,
        });
    }

    // #######################################################################
    // Instrucciones extra ###################################################
    // #######################################################################

    // toast("Hola", "success", 5000, "top-end");
    // setTimeout(() => {
    //     toast("Adios", "error", 5000, "top-start");
    // }, 6000);

    // const fName = "salvador";
    // const numOne = 1;
    // const lName = "Hernandez";
    // const numeTwo = "2";
    // const numTree = 3;

    // let operation;

    // operation = `${numOne , numeTwo}`
    // console.log(numOne , numeTwo);

    // toast(operation, "info", 8000, "center")
});
