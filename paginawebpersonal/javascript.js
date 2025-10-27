let elementos = document.getElementsByClassName("elementoscontenedor")

// Convertir HTMLCollection a Array para poder usar forEach
let parrafos = [
    ["Starcraft 2 es un juego de estrategia en tiempo real donde se pueden controlar 3 razas: protos, zerg y terran, link a la pagina: "],
    ["Es un juego de ritmo en donde se debe \"pegar\" circulos y tiene 4 modos"],
    ["Un juego de mundo abierto lanzado en 2013, lo consegui regalado de epicgames por el 2021 xd"],
    ["Este junto con gta 5 no lo corre mi pc, pero el poco tiempo que lo jugue me gusto, similar a simcity 4 pero con mejoras visuales"],
    ["Logre verla en formato pelicula, trata temas principalmente relacionados con la ciencia ficcion"],
    ["Aborda una historia reeal en la segunda guerra mundial, un soldado que se negaba a usar un arma en la guerra pero comprometido con rescatar a toda persona que pudiera"],
    ["Kimetsu no Yaiba trata sobre una guerra entre humanos vs demonios, es la continuacion de la 1era temporada del anime del mismo nombre"],
    ["Pelicula de zombies ambientada en Corea del Sur, la mayor partes de las escenas ocurren entre los trenes y sus estaciones, por eso su nombre"],
]
Array.from(elementos).forEach((elemento, index) => {
    // Evento cuando el mouse entra
    elemento.addEventListener('mouseenter', function() {
        crearDivDinamico(elemento, index);
    });
    
    // Evento cuando el mouse sale (opcional: eliminar el div)
    elemento.addEventListener('mouseleave', function() {
        eliminarDivDinamico(index);
    });
});

function crearDivDinamico(elementoPadre, id) {
    let divExistente = document.getElementById(`div-dinamico-${id}`);
    if (divExistente) {
        divExistente.style.display = 'block';
        return;
    }
    
    let nuevoDiv = document.createElement('div');
    nuevoDiv.id = `div-dinamico-${id}`;
    nuevoDiv.className = 'div-dinamico';
    nuevoDiv.innerHTML = `
        <p>${parrafos[id][0]}</p>
    `;
    
    nuevoDiv.style.position = 'absolute';
    nuevoDiv.style.top = '0';
    nuevoDiv.style.width = '50px'
    nuevoDiv.style.left = '0';
    nuevoDiv.style.background = 'rgba(160, 255, 179)';
    nuevoDiv.style.color = 'black';
    nuevoDiv.style.padding = '10px';
    nuevoDiv.style.borderRadius = '10px';
    nuevoDiv.style.zIndex = '1000';
    nuevoDiv.style.minWidth = '200px';
    nuevoDiv.style.padding = '20px';
    nuevoDiv.style.borderTopRightRadius = '20px';
    nuevoDiv.style.borderBottomLeftRadius = '20px';
    nuevoDiv.style.borderRight = '10px solid rgba(200, 200, 200)';
    nuevoDiv.style.boxShadow = '5px 5px 1px gray';
    
    // Posicionar cerca del elemento
    const rect = elementoPadre.getBoundingClientRect();
    nuevoDiv.style.top = `${rect.bottom + window.scrollY}px`;
    nuevoDiv.style.left = `${rect.left + window.scrollX}px`;
    
    document.body.appendChild(nuevoDiv);
}

function eliminarDivDinamico(id) {
    let divExistente = document.getElementById(`div-dinamico-${id}`);
    if (divExistente) {
        divExistente.style.display = 'none';
        divExistente.remove();
    }
}