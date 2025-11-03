//Laboratorio Nro 13 - Ejercicio 6
//Autor: Jhonatan


function listaDeCompras(){
    let lista = new Map([
        ["arroz", 2.5],
        ["papa", 2.0],
        ["pollo", 6.0],
        ["azucar", 2.4],
    ]);
    let sumatoria = 0;
    for(let a in lista){
        sumatoria += lista[a];
    }
    alert("la suma total de la lista es de: " + sumatoria);
}
