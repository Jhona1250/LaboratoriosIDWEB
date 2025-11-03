//Laboratorio Nro 13 - Ejercicio 3
//Autor: Jhonatan


function reordenarPalabras(texto){
    let palabras = texto.toUpperCase().split(" ");
    palabras.sort((str1, stre2)=> str1.charCodeAt(0) - stre2.charCodeAt(0))
    alert("string ingresado: " + texto + " palabras ordenadas: " + palabras);
}
