//Laboratorio Nro 12 - Ejercicio3
//Autor: Jhonatan
//Tiempo: 3 min

//area rectangulo
function esMultiplo(numero, multiplo){
    return numero%multiplo == 0;
}
//funcion declarada:
const esMultiploDeclarada = function(numero, multiplo){return numero%multiplo == 0;};
//funcion expresada:
const esMultiploFlecha = (numero, multiplo) => {return numero%multiplo == 0;};
//funcion flecha:

alert("Es 6 multiplo de 4?: " + esMultiplo(6,4));
alert("Es 8 multiplo de 2?: " + esMultiploDeclarada(8,2));
alert("Es 9 multiplo de 3?: " + esMultiploFlecha(9,3));