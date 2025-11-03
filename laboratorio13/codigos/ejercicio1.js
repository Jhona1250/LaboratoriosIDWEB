//Laboratorio Nro 13 - Ejercicio 1
//Autor: Jhonatan

function doblarNumeros(arreglo){
    let nuevoArreglo = [];
    for(let a in arreglo){
        nuevoArreglo[a] = arreglo[a] * 2;
    }
    alert("arreglo anterior: " + arreglo + ", nuevo arreglo: " + nuevoArreglo);
}
