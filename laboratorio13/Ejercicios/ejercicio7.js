//Laboratorio Nro 13 - Ejercicio1
//Autor: Jhonatan
//Tiempo:

let t = ""
function contarPalabras(texto){
    let palabras = texto.toLowerCase().split(" ");
    let map = new Map();
    for(let i in palabras){
        map[palabras[i]] = 0;
    }
    for(let palabra of palabras){
        map[palabra]++;
    }
    console.log(map)
}
contarPalabras("PEPE pepe Pepe")