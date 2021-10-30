var nombre = document.getElementById("inputEmail3");
var correo = document.getElementById ("inputPassword3");
var mensaje = document.getElementById ("floatingTextarea");
var error = document.getElementById ("error");
error.style.color = "red";

function enviarformulario () {
console.log ("Enviando formulario!")

var mensajesError = [];

if (nombre.value === null || nombre.value ==="") {
mensajesError.push("Ingresa tu nombre");

}

if (correo.value === null || nombre.value ==="") {
mensajesError.push("Ingresa su correo"); 

}

error.innerHTML = mensajesError.join(", ");

return false;

}
