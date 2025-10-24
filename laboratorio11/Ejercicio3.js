//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 3

//Contador de pares e impares:

let par = 0, impar = 0;
for(let a = 10; a<20; a++){
    let numero = parseInt(prompt("Ingrese un numero:"));
    par += (numero%2 == 0)? 1: 0;
    impar += (numero%2 != 0)? 1:0;
}
alert("Total pares: " + par + " total impares: " + impar);