//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 12

//Tienda con resupuesto

let opcion;
let totalApagar = 0;
let presupuesto = 100;
while(opcion != -1){
    opcion = parseInt(prompt("Ingrese el precio de un producto (-1 para salir)"));
    if(opcion == -1)
        continue;
    if(presupuesto - opcion >= 0){
        totalApagar += opcion;
        presupuesto -= opcion;
    }
    else{
        opcion = -1;
        continue;
    }
}
if(totalApagar > 100){
    alert("Usted tiene un descuento del 10%");
    totalApagar * 90/100;
}
else if(totalApagar <= 100 && totalApagar >= 50){
    alert("Usted tiene un descuento del 5%");
    totalApagar * 95/100;
}
else{
    alert("No aplica descuento");
}
alert("Total a pagar: " + totalApagar)
