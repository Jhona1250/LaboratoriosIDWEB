//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 4

//Tabla de multiplicar:

let tablaDel = parseInt(prompt("Ingrese el numero para crear la tabla de multiplicar"));
let stringdetablas = "";

for(let i = 0; i<13; i++){
    stringdetablas += tablaDel.toString() + " x " + i + " = " + (i*tablaDel);
    stringdetablas += "\n";
}
alert(stringdetablas);