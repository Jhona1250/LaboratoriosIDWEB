//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 6

//Numeros primos en rango

let numero = parseInt(prompt("Ingrese un numero: "));
let numerosPrimos = "";
for(let i = 2; i <= numero; i++){
    let esPrimo = true;
    for(let j = 2; j < i; j++){
        if(i%j == 0){
            esPrimo = false;
            break;
        }
    }
    if(esPrimo){
        numerosPrimos += i + "\n";
    }
}
alert(numerosPrimos);