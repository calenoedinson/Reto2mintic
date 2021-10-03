function consultarClienteTodo() {
    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',

        error: function (xhr, status) {
            alert('ha sucedido un problema, ' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Petición realizada, ' + xhr.status);
        },
        success: function (json) {
            $("#TablaResultado").empty();
            $("#TablaResultado").append("<tr>");
            $("#TablaResultado").append("<th>ID</th>");
            $("#TablaResultado").append("<th>Nombre</th>");
            $("#TablaResultado").append("<th>Email</th>");
            $("#TablaResultado").append("<th>Edad</th>>");
            $("#TablaResultado").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#TablaResultado").append("<tr>");
                $("#TablaResultado").append("<td>" + json.items[i].id + "</td>");
                $("#TablaResultado").append("<td>" + json.items[i].name + "</td>");
                $("#TablaResultado").append("<td>" + json.items[i].email + "</td>");
                $("#TablaResultado").append("<td>" + json.items[i].age + "</td>");
                $("#TablaResultado").append("</tr>");
            }
            console.log(json)
        }
    });
}

function guardarCliente() {
    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        data: {
            id: $("#ide").val(),
            name: $("#nombre").val(),
            email: $("#correo").val(),
            age: $("#edad").val()
        },
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema ' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Petición realizada ' + xhr.status);
            limpiarFormulario();
        }
    });
}

function editarCliente() {
    var datos = {
        id: $("#ide").val(),
        name: $("#nombre").val(),
        email: $("#correo").val(),
        age: $("#edad").val()
    }

    var datosaEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        data: datosaEnviar,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Petición realizada ' + xhr.status);
            limpiarFormulario();
        }
    });
}

function eliminarCliente() {
    var datos = {
        id: $("#ide").val()
    }

    var datosaEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        data: datosaEnviar,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Petición realizada ' + xhr.status);
            limpiarFormulario();
        }
    });
}

function buscarClienteId(id) {
    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/' + id.val(),
        dataType: 'json',
        type: 'GET',
        success: function (json) {
            $("#TablaResultado").empty();
            $("#TablaResultado").append("<tr>");
            $("#TablaResultado").append("<th>ID</th>");
            $("#TablaResultado").append("<th>Nombre</th>");
            $("#TablaResultado").append("<th>Email</th>");
            $("#TablaResultado").append("<th>Edad</th>>");
            $("#TablaResultado").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#TablaResultado").append("<tr>");
                $("#TablaResultado").append("<td>" + json.items[i].id + "</td>");
                $("#TablaResultado").append("<td>" + json.items[i].name + "</td>");
                $("#TablaResultado").append("<td>" + json.items[i].email + "</td>");
                $("#TablaResultado").append("<td>" + json.items[i].age + "</td>");
                $("#TablaResultado").append("</tr>");
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Petición realizada ' + xhr.status);
        }
    });
}

function limpiarFormulario() {
    $("#ide").val("");
    $("#nombre").val("");
    $("#correo").val("");
    $("#edad").val("");
}


