//Laboratorio Nro 13 - Ejercicio 7
//Autor: Jhonatan


function contarPalabras(string){
    let palabras = string.toLowerCase().split(" ");
    let contador = new Map()
    for(let palabra of palabras) {
        contador[palabra] = 0;
    }
    for(let palabra of palabras) {
        contador[palabra] += 1;
    }
    alert("string ingresado: " + string + " contador de palabras: " + toStringMap(contador));
}

function toStringMap(map){
    let texto = "";
    for(let key in map){
        texto += "[" + key + "]" + " = " + map[key] + " ";
    }
    return texto;
}
