//Laboratorio Nro 13 - Ejercicio1
//Autor: Jhonatan
//Tiempo:

let str = ""
function contarLetras(palabra) {
    let objetoResgistro = {};
    let nuevostring = palabra.replace(" ", "").toLowerCase()
    for(let a = 0; a < nuevostring.length; a++){
        objetoResgistro[nuevostring.charAt(a)] ++;
    } 

}
contarLetras("aewewe")