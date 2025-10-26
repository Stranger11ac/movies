$(document).ready(function () {
    const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTdHJhbmdlcjExIiwiZXhwIjoxNzYxODg2NTA0fQ.ut0eTVIEQTSuUjrZo6z4VULAFsJJ-dWWKoXkSgIGxkM";
    // #######################################################################
    // Insertar niveles ######################################################
    $("#formInsertLeves").on("submit", function (event) {
        event.preventDefault();
        submitLevels($(this));
    });
    $("#formInsertMovies").submit(function (event) {
        event.preventDefault();
        submitMovies($(this));
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
            headers: {
                Authorization: "Bearer " + myToken,
            },
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

    function submitMovies(form) {
        const formData = new FormData(form[0]);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        console.log(jsonData);

        // $.ajax({
        //     url: "http://127.0.0.1:8220/registrar_clasificaciones",
        //     type: "POST",
        //     contentType: "application/json",
        //     data: JSON.stringify(jsonData),
        //     success: function (response) {
        //         const msg = response.mensaje || "Mensaje";
        //         console.log("Respuesta del servidor:", response);
        //         toast(msg, "success", 5000, "top-end");
        //         variableIndefinida = 1;
        //     },
        //     error: function (xhr, status, error) {
        //         toast(error, "error", 8000, "top-center");
        //         console.error("Error:", error);
        //     },
        //     complete: function () {
        //         console.log("Petición finalizada.");
        //     },
        // });
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
            headers: {
                Authorization: "Bearer " + myToken,
            },
            success: function (response) {
                $container.empty();
                $("#loader").addClass("d-flex").removeClass("d-none").css("height", "50px");
                $container.css("height", "auto");

                setTimeout(() => {
                    $("#loader").removeClass("d-flex").addClass("d-none");
                    setTimeout(() => {
                        console.log(response.data[0]);
                        response.data.forEach((level) => {
                            $($container).append(`<div>${level.ClasificacionDesc}</div>`);
                        });
                    }, 50);
                }, 1000);
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
