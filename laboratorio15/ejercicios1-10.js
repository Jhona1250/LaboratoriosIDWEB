//ejercicio1:
function ejercicio1(){
    let sub = document.querySelector("h2");
    console.log(sub.textContent);
}

//ejercicio2:
function ejercicio2(){
    let elementosP = document.getElementsByTagName("p");
    for(let elemento of elementosP){
        elemento.textContent = "Texto actualizado dinamicamente";
    }
}

//ejercicio3:
function ejercicio3(){
    let primeraImagen = document.querySelector("img");
    primeraImagen.setAttribute("src", "./imagenes/perro.webp")
    primeraImagen.setAttribute("alt", "perrito")
}

//ejercicio4
function ejercicio4(){
    let elementosResaltados = document.getElementById("listadesordenada").getElementsByTagName("li");
    for(let elemento of elementosResaltados){
        elemento.setAttribute("class", "resaltado");
    }
}

//ejercicio5
function ejercicio5(){
    let listadesordenada = document.getElementById("listadesordenada").children;
    for(let elemento of listadesordenada){
        console.log(elemento.textContent);
    }
}

//ejercicio6
function ejercicio6(){
    let todaslasdivisiones = document.getElementsByTagName("div");
    for(let division of todaslasdivisiones){
        let redrandom = Math.trunc(Math.random() * 256);
        let greenrandom = Math.trunc(Math.random() * 256);
        let bluerandom = Math.trunc(Math.random() * 256);
        division.style.backgroundColor = "rgb(" + redrandom + ", " + greenrandom + ", " + bluerandom + ")"
    }
}
