//Laboratorio 14
//Autor: Jhonatan Lerma

//Ejercicio1
function Ejercicio1(){
    let precio = parseFloat(prompt("Ingrese un numero decimal: "));
    alert("Redondeo hacia arriba: " + Math.ceil(precio));
    alert("Redondeo hacia abajo: " + Math.floor(precio));
    alert("Redondeo normal: " + Math.round(precio));
}

//Ejercicio2
function Ejercicio2(){
    let numeroAleatorio = function(min,max){
        return Math.trunc(Math.random() * (max + 1 - min) + min);
    }
    let min = parseInt(prompt("Ingrese un rango minimo: "));
    let max = parseInt(prompt("Ingrese un rango maximo: "));
    prompt("Numero generado: " + numeroAleatorio(min, max))
}

//Ejercicio3
function Ejercicio3(){
    let numeroAleatorio = function(min,max){
        return Math.trunc(Math.random() * (max - min) + min);
    }
    let dado1 = numeroAleatorio(1,6);
    let dado2 = numeroAleatorio(1,6);

    alert("Lanzamiento de dados: " + dado1 + " " + dado2 + " suma: " + (dado1+dado2));
}

//Ejercicio4
function Ejercicio4(){
    let numero = parseFloat(prompt("Ingrese un numero: "));
    alert('Su cuadrado: ' + Math.pow(numero,2) );
    alert('Su cubo: ' + Math.pow(numero,3));
    alert('Su raiz cuadrada: ' + Math.sqrt(numero));
}

//Ejercicio5
function Ejercicio5(){
    let gradosAradianes = (gr)=>{return (gr/180) * Math.PI;};
    let grados = parseFloat(prompt("Ingrese el angulo en grados: "));
    alert("Seno del angulo: " + Math.sin(gradosAradianes(grados)) + " Coseno del angulo: " + Math.cos(gradosAradianes(grados)));
}

//Ejercicio6
function Ejercicio6(){
    const generarContraseña = function(){
        let contraseña = "";
        for(let a = 0; a<6; a++) {
            let random = Math.trunc(Math.random() * 10);
            contraseña += random.toString();
        }
        return contraseña;
    };
    
    alert("Contraseña generada: " + generarContraseña());
}

//Ejercicio7
function Ejercicio7(){
    let cordenadas1 = [0,0];
    let cordenadas2 = [0,0];
    cordenadas1[0] = parseFloat(prompt("Ingrese la cordenada x1: "));
    cordenadas1[1] = parseFloat(prompt("Ingrese la cordenada y1: "));
    cordenadas2[0] = parseFloat(prompt("Ingrese la cordenada x2: "));
    cordenadas2[1] = parseFloat(prompt("Ingrese la cordenada y2: "));
    alert("Distancia entre los 2 puntos: " + Math.sqrt(Math.pow(cordenadas1[0] - cordenadas2[0],2) + Math.pow(cordenadas1[1] - cordenadas2[1],2)));
    alert("Deistancia del punto: " + cordenadas1 + " al origen = " + Math.sqrt(Math.pow(cordenadas1[0], 2) + Math.pow(cordenadas1[1], 2)));
    alert("Deistancia del punto: " + cordenadas2 + " al origen = " + Math.sqrt(Math.pow(cordenadas2[0], 2) + Math.pow(cordenadas2[1], 2)));
}
//Ejercicio8
function Ejercicio8(){
    let a = [];
    let maximo = function(numberList){
        if(numberList.length == 0)
            return
        let max = numberList[0];
        for(let i = 1; i<numberList.length; i++){
            if(numberList[i] >= max)
                max = numberList[i];
        }
        return max;
    }
    let normalizarNotas = function(notas){
        let maxima = maximo(notas);
        for(let i in notas){
            notas[i] = notas[i]/maxima;
        }
        return notas;
    }
    let notas = [16,17,1,5,2,20];
    alert("Notas " + notas + " normalizadas: " + normalizarNotas(notas));
}

//Ejercicio9
function Ejercicio9(){
    class Producto{
        #nombre;
        #precio;
        #stock;

        set nombre(value){
            this.nombre = value;
        }
        set precio(value){
            if(value > 0)
                this.precio = value;
        }
        set stock(value){
            if(value > 0)
                this.stock = value;
        }
        vender(cantidad){
            if(this.#stock - cantidad >= 0)
                this.stock -= cantidad;
        }
    }
    let pro = new Producto();
    pro.nombre = "producto1";
    pro.cantidad = 23;
    pro.precio = 5;
    alert(2)
}