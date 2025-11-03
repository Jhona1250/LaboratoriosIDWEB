//Laboratorio Nro 13 - Ejercicio 10
//Autor: Jhonatan


function contarLetras(string) {
    let letras = string.toLowerCase().split("");
    let contador = new Map();
    for(let letra of letras) {
        contador.set(letra, 0);
    }
    for(let letra of letras) {
        contador[letra] += 1;
    }
    alert(toStringMap(contador));
}
contarLetras("hola hola hola")
function toStringMap(map) {
    let texto = "";
    for(let [key, value] of map) {
        texto += "[" + key + "]" + " = " + value + " ";
    }
    return texto;
}