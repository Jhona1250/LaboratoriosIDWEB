//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 9

//Numero Armstrong

let numero = prompt("Ingrese un numero");
try{
    numero = parseInt(numero);
}
catch(e){
    console.log(e);
    numero = 153
}

let numerosdigitos = Math.trunc(Math.log10(numero) + 1);
const digitos = [];
for(let i = 1; i <= numerosdigitos; i++){
    digitos[i - 1] = Math.trunc((numero%(Math.pow(10, numerosdigitos - i + 1)))/Math.pow(10, numerosdigitos - i));
}
let suma = 0;
for(let i = 0; i < numerosdigitos; i++){
    suma += Math.pow(digitos[i], 3);
}
if(suma == numero){
    alert("Es armstrong");
}
else{
    alert("No es armstrong");
}
