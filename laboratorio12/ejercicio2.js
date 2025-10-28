//Laboratorio Nro 12 - Ejercicio2
//Autor: Jhonatan
//Tiempo: 3 min

//area rectangulo

//funcion declarada:
function areaRectangulo(base, altura){
    return base * altura;
}
//funcion expresada:
const areaRectanguloDeclarada = function(base, altura){
    return base * altura;
};
//funcion flecha:
const areaRectanguloFlecha = (base, altura) => {return base*altura;};

alert("Area del rectangulo de 5 ancho y 2 de altura: " + areaRectangulo(5,2));
alert("Area del rectangulo de 5 ancho y 4 de altura: " + areaRectanguloDeclarada(5,4));
alert("Area del rectangulo de 9 ancho y 1 de altura: " + areaRectanguloFlecha(9,1));