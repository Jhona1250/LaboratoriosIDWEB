//Laboratorio Nro 12 - Ejercicio4
//Autor: Jhonatan
//Tiempo: 3 min

//mayor de tres

//funcion declarada:
function mayorDeTres(n1,n2,n3){
    return (n1 > n2)?n1:((n2>n3)?n2:n3);
}
//funcion expresada:
const mayorDeTresDeclarada = function(n1,n2,n3){
    return (n1 > n2)?n1:((n2>n3)?n2:n3);
};
//funcion flecha:
const mayorDeTresFlecha = (n1,n2,n3) => {return (n1 > n2)?n1:((n2>n3)?n2:n3);};

alert("Mayor entre 2,7,-12: " + mayorDeTres(2,7,-12));
alert("Mayor entre -2,-6,-99: " + mayorDeTresDeclarada(-2,-6,-99));
alert("Mayor entre 2,99,-1000: " + mayorDeTresFlecha(2,99,-1000));
