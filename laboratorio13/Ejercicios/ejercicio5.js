//Laboratorio Nro 13 - Ejercicio1
//Autor: Jhonatan
//Tiempo:

function tieneDuplicados(arr) {
    let miset = new Set(arr);
    return miset.size <= arr.length;
}
console.log(tieneDuplicados([1,1,2,3,4,2]))
