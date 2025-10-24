//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 2 

//Promedio validacion:
let pedirNota = function(){
    let nota1 = parseInt(prompt("Ingrese una nota: "));
    if(nota1 <= 20 && nota1 >= 0){
        return nota1;
    }
    return 0;
}

let suma = 0;
for(let a = 0; a<5; a++){
    suma += pedirNota();
}
alert("Promedio: " + (suma/5));