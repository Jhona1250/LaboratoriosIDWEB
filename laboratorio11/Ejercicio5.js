//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 5

//Cajero automatico:

let montoAretirar = parseInt(prompt("Ingrese un monto a retirar: "));
let billetes100 = 0, billetes50 = 0, billetes20 = 0, billetes10 = 0;
while(montoAretirar >99){
    montoAretirar-=100;
    billetes100++;
}
while(montoAretirar >39){
    montoAretirar-=50;
    billetes50++;
}
while(montoAretirar >19){
    montoAretirar-=20;
    billetes20++;
}
while(montoAretirar >9){
    montoAretirar-=10;
    billetes10++;
}
alert("Billetes 100: " + billetes100 +"\nBilletes 50: " + billetes50 +"\nBilletes 20: " + billetes20 + "\nBilletes 10: " + billetes10);
