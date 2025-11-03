//Laboratorio Nro 13 - Ejercicio 2
//Autor: Jhonatan

function filtrarArr(arreglo){
    let sumatoria = 0;
    for(let a in arreglo){
        if(arreglo[a] > 0){
            sumatoria += Math.pow(arreglo[a], 2);
        }
    }
    alert("arreglo ingresado: " + arreglo + ", sumatoria: " + sumatoria);
}
