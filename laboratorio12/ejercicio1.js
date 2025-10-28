//Laboratorio Nro 12 - Ejercicio1
//Autor: Jhonatan
//Tiempo: 3 min

//espar

//funcion declarada
function esPar(num){
    return num%2 == 0;
}
//funcion flecha
const esParFlecha = (num) => {return num%2==0;}; 
//funcion expresada
const esParExpresada = function(num){
    return num%2 == 0;
}

alert(esParFlecha(2));
alert(esPar(4))
alert(esParExpresada(9))