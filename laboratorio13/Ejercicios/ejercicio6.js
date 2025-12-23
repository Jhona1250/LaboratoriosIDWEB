//Laboratorio Nro 13 - Ejercicio1
//Autor: Jhonatan
//Tiempo:

function productosYprecios(){
    let lista = new Map([
        ["papa", 2.45],
        ["arroz", 3],
        ["pan", 2],
        ["pollo", 5]
    ]);
    let suma = 0;
    lista.forEach((valor, _) => {suma+=valor;});
    return suma;
}

alert(productosYprecios())