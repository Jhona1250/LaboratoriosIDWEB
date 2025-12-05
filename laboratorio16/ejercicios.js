//ejercicio1
function ejercicio1(){
    let boton = document.getElementById("ejercicio1").querySelector("input");
    let parrafo = document.getElementById("ejercicio1").querySelector("p");
    boton.addEventListener("click", function(){
        parrafo.textContent = "Texto cambiado"
    })
}
//ejercicio2
function ejercicio2(){
    let boton = document.getElementById("ejercicio1").querySelector("input");
    let parrafo = document.getElementById("ejercicio1").querySelector("p");
    boton.addEventListener("click", function(){
        if(parrafo.textContent == "Texto cambiado")
            parrafo.textContent = "Texto original";
        else
            parrafo.textContent = "Texto cambiado";
    })
}

//ejercicio3
function ejercicio3(){
    let boton = document.getElementById("ejercicio3").querySelector("input");
    boton.addEventListener("click", function(){
        if(document.body.getAttribute("class") != "oscuro")
            document.body.setAttribute("class", "oscuro");
        else
            document.body.setAttribute("class", "claro");
    });
}

//ejercicio4
function ejercicio4(){
    let incremento = document.getElementById("ejercicio4").querySelector("div").getElementById("incremento");
    let decremento = document.getElementById("ejercicio4").querySelector("div").getElementById("decremento");
    let label = document.getElementById("ejercicio4").getElementById("numero");
    let numero = 0;
    incremento.addEventListener("click", function(){
        numero++;
        label.textContent=numero;
    })
    decremento.addEventListener("click", function(){
        numero--;
        label.textContent=numero;
    })

}
ejercicio4();

//ejercicio5
function ejercicio5(){

}

//ejercicio6
function ejercicio6(){

}

//ejercicio7
function ejercicio7(){

}

//ejercicio8
function ejercicio8(){

}

//ejercicio9
function ejercicio9(){

}

//ejercicio10
function ejercicio10(){

}

