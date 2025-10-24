//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 2 

//solicitador de edad
let edad = parseInt(prompt("Ingrese la edad"));
if(edad < 12 )
    alert("Niño");
else if(edad <= 17)
    alert("Adolecente");
else if(edad <= 59)
    alert("Adulto");
else
    alert("Adulto mayor");
