//Laboratorio Nro 13 - Ejercicio1
//Autor: Jhonatan
//Tiempo:

function filtrarYtransformar(arr){
    let sumatoria = 0;
    for (let i in arr) {
        if (arr[i] > 0) {
            sumatoria += Math.pow(arr[i], 2);
        }
    }
    return sumatoria
}