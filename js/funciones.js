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
            $("#resultado").empty();
            for (i = 0; i < json.items.length; i++) {
                $("#resultado").append(json.items[i].name + "<br>");
            }
            console.log(json)
        }
    });
}

function guardarCliente() {
    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        data: {
            id: $('#ide').val(),
            name: $("#nombre").val(),
            email: $("#correo").val(),
            age: $('#edad').val()
        },
        type: 'POST',
        dataType: 'json',
        success: function (json, textStatus, xhr) {
            console.log(json);
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

function editarCliente() {
    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        data: {
            id: $(ide),
            name: $("#nombre").val(),
            email: $("#correo").val(),
            age: $('#edad').val()
        },
        type: 'PUT',
        dataType: 'json',
        success: function (json, textStatus, xhr) {
            console.log(json);
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
    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        data: {
            id: 3
        },
        type: 'DELETE',
        dataType: 'json',
        success: function (json, textStatus, xhr) {
            console.log(json);
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
        dataType: 'json',
        success: function (json) {
            $("#resultado").empty();
            $("#resultado").append("Nombre: " + json.items[0].name + " Correo: " + json.items[0].email + " Edad: " + json.items[0].age);
            console.log(json);
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


/*
  $.ajax({
      url:"https://g6c335b483ca254-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos/",
      type:"GET",
      datatype:"JSON",
      success:function(respuesta){
      // obtener los elementos del json
      $('<h1/>').text(json.title).appendTo('body');
      $('<div class="content"/>')
          .html(json.html).appendTo('body');
      // mostrarlos por consola del navegado
          console.log(respuesta);
      }
  });
  */

