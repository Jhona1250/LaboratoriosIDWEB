//Laboratorio Nro 13 - Ejercicio 11
//Autor: Jhonatan

function combinarCatalogos(){
    function combinarCatalogos(tiendaA, tiendaB) {
        const catalogoCombinado = {};
        for (let producto in tiendaA) {
            catalogoCombinado[producto] = parseFloat(tiendaA[producto].toFixed(2));
        }
            for (let producto in tiendaB) {
            const precioB = parseFloat(tiendaB[producto].toFixed(2));
            
            if (catalogoCombinado[producto] !== undefined) {
                catalogoCombinado[producto] = Math.min(catalogoCombinado[producto], precioB);
            } else {
                catalogoCombinado[producto] = precioB;
            }
        }

        return catalogoCombinado;
    }

    const tiendaA = {
        laptop: 3500.5,
        mouse: 100.35,
        teclado: 250.9
    };

    const tiendaB = {
        mouse: 95.2,
        monitor: 720.457,
        teclado: 260.1
    };

    console.log(combinarCatalogos(tiendaA, tiendaB));
}