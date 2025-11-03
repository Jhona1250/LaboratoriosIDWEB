//Laboratorio Nro 13 - Ejercicio 5
//Autor: Jhonatan


function tieneDuplicados(array){
    let conjunto = new Set();
    for(let a in array){
        conjunto.add(array[a]);
    }
    if(array.length > conjunto.size){
        alert("el array: " + array + " tiene elementos duplicados")
        return true;
    }
    alert("el array: " + array + " no tiene elementos duplicados")
    return false;
}
