//Laboratorio Nro 13 - Ejercicio 9
//Autor: Jhonatan


function objetoAuto() {
    const auto = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2022,
        detalles: function() {
            return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
        }
    };
    alert(auto.detalles());
}