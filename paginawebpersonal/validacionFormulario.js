let correo = document.getElementById("correo")
let nombre = document.getElementById("nombre")
let mensaje = document.getElementById("mensaje")
let form = document.getElementsByClassName("formulario");
form[0].addEventListener("submit", e=>{
    console.log(correo)
    console.log(nombre)
})