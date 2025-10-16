$(document).ready(function () {
    $("#formInsertMovies").on("submit", function (event) {
        event.preventDefault();
        submitLevels($(this));
    });

    function submitLevels(form) {
        const levelVal = $(form).find("#levelName").val();
        const myApiToken = "Mytokendelaapi";

        const nivelData = {
            ClasificacionDesc: levelVal,
        };

        $.ajax({
            url: "http://127.0.0.1:8220/registrar_clasificaciones",
            type: "POST",
            // headers: {
            //     Authorization: "Bearer " + myApiToken,
            // },
            contentType: "application/json",
            data: JSON.stringify(nivelData),
            success: function (response) {
                const msg = response.mensaje || "Mensaje"
                console.log("Respuesta del servidor:", response);
                // alert(`Mensage recibido: ${response.mensaje}`);
                toast(msg, "success", 5000, "top-end")
                variableIndefinida = 1;
            },
            error: function (xhr, status, error) {
                toast(error, "error", 8000, "top-center")
                console.error("Error:", error);
            },
            complete: function () {
                console.log("Petición finalizada.");
            },
        });
    }

    // toast("Hola", "success", 5000, "top-end");
    // setTimeout(() => {
    //     toast("Adios", "error", 5000, "top-start");
    // }, 6000);

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
});
