//Laboratorio Nro 13 - Ejercicio1
//Autor: Jhonatan
//Tiempo:

function doblarNumeros(arreglo) {
    let nuevoArreglo = [];
    for(let a in arreglo){
        nuevoArreglo[a] = arreglo[a] * 2;
    }
    return nuevoArreglo
}