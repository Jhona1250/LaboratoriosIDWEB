//Laboratorio Nro 12 - Ejercicio11
//Autor: Jhonatan
//Tiempo: 3 min

//procesar texto

function procesarTexto(string){
    function contarPalabras(str){
        alert("el string tiene: " +  str.length);
    }
    function eliminarEspacion(str){
        alert("espacios eliminados: " + str.replaceAll(" ",  ""));
    }
    contarPalabras(string);
    eliminarEspacion(string);
}

procesarTexto("Lore impsum xd");
