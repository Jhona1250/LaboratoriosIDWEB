//Laboratorio Nro 13 - Ejercicio 4
//Autor: Jhonatan

function crearConjunto(nombres){
    let conjunto = new Set();
    for(let valor of nombres){
        conjunto.add(valor);
    }
    alert("elementos ingresados: " + nombres + ", conjunto creado: " + [...conjunto]);
}
