//Laboratorio Nro 12 - Ejercicio7
//Autor: Jhonatan
//Tiempo: 3 min

//calcular descuento

const calcularDescuentoescuento = function(precio, porcentaje) {
    return precio * (100 - porcentaje) / 100;
};
alert("Descuento del 20% sobre 100: " + calcularDescuentoescuento(100, 20));