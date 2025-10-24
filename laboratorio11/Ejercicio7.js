//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 7

//Suma de numeros de 1 a n

let numero = parseInt(prompt("Sumatoria hasta n, sin contar multiplos de cinco: "));
let sumatoria = 0;
for(let i = 1; i <= numero; i++){
    if(i%5 != 0){
        sumatoria += i;
    }
}
alert(sumatoria);