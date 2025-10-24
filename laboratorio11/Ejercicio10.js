//Jhonatan Lerma
//Laboratorio Nro 11 - Ejercicio 10

//Menu Interactivo

function mostrarMenuPrincipal(){
    let opcion = parseInt(prompt("Este es el menu, elija una opcion:\n1. Calcular estadisticas de n notas\n2. Contar numeros pares e impares en un rango\n3. Generar una tabla de multiplicar\n4. Salir"));
    return opcion;
}
function opcionNotas(){
    let contador = 0;
    let sumatoria = 0;
    let maximo = 0, minimo = 20;
    let contadorPares = 0;
    let notas = [];
    let promedio;
    while(true){
        let nota = parseInt(prompt("Ingrese una nota entre 0 y 20, (ingrese -1 para salir)"));
        if(nota == -1){
            break;
        }
        if(nota >= 0 && nota <= 20){
            contador++;
            contadorPares = (nota%2 == 0)? contadorPares + 1: contadorPares;
            maximo = (nota >= maximo)? nota: maximo;
            minimo = (nota <= minimo)? nota: minimo;
            notas[contador - 1] = nota;
            sumatoria += nota;
        }
        else{
            alert("nota no valida");
        }
    }

    /*Calcula por encima del promedio*/
    promedio = sumatoria/contador;
    porencima = [];
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= promedio)
            porencima[i] = notas[i]
    }
    alert("Promedio: " + promedio + "\nMinimo: " + minimo + "\nMaximo: " + maximo +"\nPares: " + contadorPares + "\nImpares: " + (contador - contadorPares) + "\nPor encima del promedio: " + porencima);
}
function opcionTablaMultiplicar(){
    let numeroDeLaTabla = parseInt(prompt("Ingrese el numero para crear la tabla: "));
    let stringTabla = "";
    for(let i = 0; i <12; i++){
        stringTabla += numeroDeLaTabla + " x " + i + " = " + i*numeroDeLaTabla + "\n";
    }
    alert(stringTabla);
}
function opcionParesEimpares(){
    let cotaInferior = parseInt(prompt("Ingrese la cota inferior: "));
    let cotaSuperior = parseInt(prompt("Ingrese la cota superior: "));
    let contador = 0;
    let contadorPares = 0;
    for(let i = cotaInferior; i <= cotaSuperior; i++){
        contador++;
        if (i%2 == 0)
            contadorPares++;
    }
    alert("Numero total de pares: " + contadorPares + "\nNumero total de impares: " + (contador - contadorPares));
}

let opcion = -1;

while(opcion != 4){
    opcion = mostrarMenuPrincipal();
    switch(opcion){
        case 1:
            opcionNotas();
            break;
        case 2:
            opcionParesEimpares();
            break;
        case 3:
            opcionTablaMultiplicar();
            break;
        case 4:
            continue;
        default:
            alert("Opcion invalida");
            break;
    }
}