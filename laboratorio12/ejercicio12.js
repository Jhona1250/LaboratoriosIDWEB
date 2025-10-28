//Laboratorio Nro 12 - Ejercicio12
//Autor: Jhonatan
//Tiempo: 3 min

//operaciones matematicas

const operacionesMatematicas = (num1, num2, operacion) =>{
    const suma = (n1, n2) => {
        return n1 + n2;
    };
    const resta = (n1,n1) => {
        return n1 - n2;
    }
    const multiplicacion = (n1,n2) => {
        return n1 * n2;
    }
    const division = (n1,n2) => {
        return n1/n2;
    }
    if(operacion == "+") {
        return suma(num1, num2);
    }
    else if(operacion == "-"){
        return resta(num1, num2);
    }
    else if(operacion == "/"){
        return division(num1, num2);
    }
    else if(opreacion == "*"){
        return multiplicacion(num1, num2);
    }
};