//Laboratorio Nro 13 - Ejercicio1
//Autor: Jhonatan
//Tiempo:

function eliminarCoincidenciasSet(){
    let set = new Set(["juan", "juan", "juan", "pepe"]);
    let xd = new Array(set.values())
    for (let a of xd){
        alert(a)
    }
}
eliminarCoincidenciasSet()

let miarray = new Set([1,2,3,3,]);
console.log(miarray)