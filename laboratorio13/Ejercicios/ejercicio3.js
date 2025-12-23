//Laboratorio Nro 13 - Ejercicio1
//Autor: Jhonatan
//Tiempo:
arreg = ["dsad"]

let arr = "d"
arr.toUpperCase
function reordenarPalabras(oracion) {
    let palabras = oracion.split(" ");
    let arregloOrdenado = [];
    for(let i in palabras){
        arregloOrdenado.push(palabras[i].toUpperCase());
    }
    return arregloOrdenado.sort((palabra1, palabra2) => {return palabra1.charCodeAt(0) - palabra2.charCodeAt(0)});
}
alert(reordenarPalabras("hola me llamo juan"));