let ejercicio1 = document.getElementById("Ejercicio1");
if(ejercicio1){
    ejercicio1.addEventListener("click", function(){
        doblarNumeros([1,2,3,4,5]);
    })
}
let ejercicio2 = document.getElementById("Ejercicio2");
if(ejercicio2){
    ejercicio2.addEventListener("click", function(){
        filtrarArr([1,-2,3,-4,5]);
    })
}

let ejercicio3 = document.getElementById("Ejercicio3");
if(ejercicio3){
    ejercicio3.addEventListener("click", function(){
        reordenarPalabras("Esyo es uN textO");
    })
}

let ejercicio4 = document.getElementById("Ejercicio4");
if(ejercicio4){
    ejercicio4.addEventListener("click", function(){
        crearConjunto(["Pepe", "Juan", "Pepe"]);
    })
}
let ejercicio5 = document.getElementById("Ejercicio5");
if(ejercicio5){
    ejercicio5.addEventListener("click", function(){
        tieneDuplicados([1,1,2,5,7,1,7,8]);
    })
}
let ejercicio6 = document.getElementById("Ejercicio6");
if(ejercicio6){
    ejercicio6.addEventListener("click", function(){
        listaDeCompras();
    })
}
let ejercicio7 = document.getElementById("Ejercicio7");
if(ejercicio7){
    ejercicio7.addEventListener("click", function(){
        contarPalabras("hola hola HOLAAAA hola");
    })
}
let ejercicio8 = document.getElementById("Ejercicio8");
if(ejercicio8){
    ejercicio8.addEventListener("click", function(){
        invertirMap(new Map([
        ["arroz", 2.5],
        ["papa", 2.0],
        ["pollo", 6.0],
        ["azucar", 2.4],
    ]));
    })
}
let ejercicio9 = document.getElementById("Ejercicio9");
if(ejercicio9){
    ejercicio9.addEventListener("click", function(){
        objetoAuto();
    })
}
let ejercicio10 = document.getElementById("Ejercicio10");
if(ejercicio10){
    ejercicio10.addEventListener("click", function(){
        contarLetras("esto es una oracion");
    })
}
let ejercicio11 = document.getElementById("Ejercicio11");
if(ejercicio11){
    ejercicio11.addEventListener("click", function(){
        combinarCatalogos();
    })
}
let ejercicio12 = document.getElementById("Ejercicio12");
if(ejercicio12){
    ejercicio12.addEventListener("click", function(){
        gestionar();
    })
}