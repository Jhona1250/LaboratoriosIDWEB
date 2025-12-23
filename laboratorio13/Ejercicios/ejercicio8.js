//Laboratorio Nro 13 - Ejercicio1
//Autor: Jhonatan
//Tiempo:
let map = new Map()

function invertirMap(map){
    let mapaInvertido = new Map();
    for(let valor of map){
        mapaInvertido[valor[1]] = valor[0];
    }

    console.log(mapaInvertido)
}
invertirMap(new Map([["pepe", 2], ["pep", 22], ["ffff", 6]]))