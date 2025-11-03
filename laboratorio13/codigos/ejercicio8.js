//Laboratorio Nro 13 - Ejercicio 8
//Autor: Jhonatan


function invertirMap(mapa) {
    let mapInvertido = new Map();
    
    for(let [key, value] of mapa) {
        mapInvertido.set(value, key); 
    }
    
    alert("mapa anterior: " + toStringMap(mapa) + " mapa invertido: " + toStringMap(mapInvertido));
}

function toStringMap(map) {
    let texto = "";
    for(let [key, value] of map) {
        texto += "[" + key + "]" + " = " + value + " ";
    }
    return texto;
}